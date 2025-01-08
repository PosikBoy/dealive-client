"use client";

import { useTypedDispatch, useTypedSelector } from "@/hooks/redux.hooks";
import styles from "./AuthForm.module.scss";
import { useForm } from "react-hook-form";
import { registration as authRegister, login } from "@/store/auth/auth.actions";
import InputField from "@/components/Ui/InputField/InputField";
import { FC, useState } from "react";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import { IClient } from "@/types/client.interface";
import { getProfile } from "@/store/client/client.actions";

interface IFormData {
  email: string;
  password: string;
  repeatPassword?: string;
}

interface ResponseType {
  payload: {
    accessToken: string;
    client: IClient;
  };
}

const AuthForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<IFormData>({
    mode: "onChange",
  });

  const router = useRouter();
  const [type, setType] = useState<"registration" | "login">("registration");
  const [shownError, setShownError] = useState(false);

  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  const onSubmit = async (data: IFormData) => {
    const authData = {
      email: data.email,
      password: data.password,
    };
    let response;
    if (type === "registration") {
      response = (await dispatch(authRegister(authData))) as ResponseType;
    } else {
      response = (await dispatch(login(authData))) as ResponseType;
    }

    if (response.payload.client) {
      console.log("getprofile");
      await dispatch(getProfile());
      router.replace("/profile");
    }
    setShownError(true);
  };

  const validateRepeatPassword = () => {
    const data = getValues();
    if (data.password === data.repeatPassword) {
      return true;
    }
    return "Пароли не совпадают";
  };

  let IsRepeatPasswordShow =
    type === "registration" ? " " + styles.authForm__repeatPassword_show : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      <p className={styles.authForm__heading}>Вход в личный кабинет</p>
      <div className={styles.authForm__toggleType}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setShownError(false);
            setType("login");
          }}
          className={
            styles.authForm__type +
            (type === "login" ? " " + styles.active : "")
          }
        >
          <span>Войти</span>
        </button>
        <button
          onClick={(e) => {
            setShownError(false);
            e.preventDefault();
            setType("registration");
          }}
          type="button"
          className={
            styles.authForm__type +
            (type === "registration" ? " " + styles.active : "")
          }
        >
          <span>Регистрация</span>
        </button>
      </div>
      {isLoading && <p>Загрузка...</p>}
      {error && shownError && !isLoading && (
        <div className={styles.authForm__error}>{error}</div>
      )}
      <div className={styles.authForm__inputs}>
        <InputField
          type="text"
          placeholder="Электронная почта"
          required
          autoComplete="username"
          {...register("email", {
            required: "Заполните это поле",
            minLength: {
              value: 3,
              message: "Введите электронную почту",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Введите электронную почту",
            },
          })}
          error={errors?.email}
        />
        <InputField
          type="password"
          autoComplete="password"
          placeholder="Пароль"
          required
          {...register("password", {
            required: "Заполните это поле",
            minLength: {
              value: 6,
              message: "Пароль минимум 6 символов",
            },
          })}
          error={errors?.password}
        />
        {type === "registration" && (
          <InputField
            type="password"
            placeholder="Пароль повторно"
            required
            {...register("repeatPassword", {
              required: "Заполните это поле",
              validate: validateRepeatPassword,
            })}
            autoComplete="new-password"
            error={errors?.repeatPassword}
            className={styles.authForm__repeatPassword + IsRepeatPasswordShow}
          />
        )}
      </div>
      <Button type="submit">
        <span className={styles.authForm__buttonText}>Войти</span>
      </Button>
    </form>
  );
};

export default AuthForm;
