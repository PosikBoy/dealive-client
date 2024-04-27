"use client";

import { useTypedDispatch, useTypedSelector } from "@/hooks/redux.hooks";
import styles from "./AuthForm.module.scss";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { register as authRegister, login } from "@/store/auth/auth.actions";
import InputField from "@/components/Ui/InputField/InputField";
import { FC, useState } from "react";
import Button from "../Button/Button";
import { IProfileResponse } from "@/services/types/profile.interface";

interface IFormData {
  email: string;
  password: string;
  repeatPassword?: string;
}

interface ResponseType {
  payload: {
    accessToken: string;
    user: IProfileResponse;
  };
}

const AuthForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm<IFormData>({
    mode: "onChange",
  });

  const [type, setType] = useState("register");

  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  const onSubmit = async (data: IFormData) => {
    const authData = {
      email: data.email,
      password: data.password,
    };
    let response;

    if (type === "register") {
      response = (await dispatch(authRegister(authData))) as ResponseType;
    } else {
      response = (await dispatch(login(authData))) as ResponseType;
    }
  };

  const validateRepeatPasword = () => {
    const data = getValues();
    if (data.password === data.repeatPassword) {
      return true;
    }
    return "Пароли не совпадают";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
      <p className={styles.authForm__heading}>Вход в личный кабинет</p>
      <div className={styles.authForm__toggleType}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setType("login");
          }}
          className={
            styles.authForm__type +
            " " +
            (type === "login" ? styles.active : "")
          }
        >
          <span>Войти</span>
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setType("register");
          }}
          type="button"
          className={
            styles.authForm__type +
            " " +
            (type === "register" ? styles.active : "")
          }
        >
          <span>Регистрация</span>
        </button>
      </div>
      {isLoading && <p>..Loading</p>}
      {error && <p>{error}</p>}
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
              value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
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
        {type === "register" && (
          <InputField
            type="password"
            placeholder="Пароль повторно"
            required
            {...register("repeatPassword", {
              required: "Заполните это поле",
              validate: validateRepeatPasword,
            })}
            error={errors?.repeatPassword}
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
