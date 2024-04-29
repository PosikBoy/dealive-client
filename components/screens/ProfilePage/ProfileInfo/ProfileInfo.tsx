"use client";
import { Controller, useForm } from "react-hook-form";

import styles from "./ProfileInfo.module.scss";
import InputField from "@/components/Ui/InputField/InputField";
import PhoneInputField from "@/components/Ui/PhoneInputField/PhoneInputField";
import { useTypedDispatch, useTypedSelector } from "@/hooks/redux.hooks";
import Button from "@/components/Ui/Button/Button";
import { updateProfile } from "@/store/profile/profile.actions";
import { logOut as logOutAction } from "@/store/auth/auth.actions";
import { useRouter } from "next/navigation";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import { useState } from "react";

interface IFormState {
  name: string;
  phoneNumber: string;
  email: string;
}

interface ResponseType {
  payload: {
    name: string;
    id: number;
    phoneNumber: string;
    email: string;
  };
}
const ProfileInfo = () => {
  const [success, setSuccess] = useState("");
  const user = useTypedSelector((state) => state.auth.user);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormState>({
    mode: "onBlur",
    defaultValues: {
      phoneNumber: user?.phoneNumber || "",
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  const profile = useTypedSelector((state) => state.profile);
  const dispatch = useTypedDispatch();
  const onSubmit = async (data: IFormState) => {
    const response = (await dispatch(updateProfile(data))) as ResponseType;
    console.log(response);
    if (response?.payload?.name) {
      setSuccess("Ваши данные были успешно изменены");
    }
    setTimeout(() => setSuccess(""), 3000);
  };

  const logOut = async () => {
    const response = await dispatch(logOutAction());
    router.replace("/");
  };

  return (
    <div className={styles.profileInfo}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.profileInfo__form}
      >
        <Heading3 color="black" className={styles.profileInfo__title}>
          Ваши данные
        </Heading3>
        {profile.error ? (
          <div className={styles.profileInfo__error}>{profile.error}</div>
        ) : null}
        {success ? (
          <div className={styles.profileInfo__success}>{success}</div>
        ) : null}

        <InputField placeholder="Имя пользователя" {...register("name")} />

        <Controller
          name={"phoneNumber"}
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value: /^(?:\+7|\b8)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
              message: "Введите номер телефона",
            },
          }}
          render={({ field }) => (
            <PhoneInputField
              onBlur={field.onBlur}
              onChange={(value: any) => field.onChange(value)}
              value={field.value}
              error={errors?.phoneNumber}
              placeholder="Номер телефона"
            />
          )}
        />

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
        <div className={styles.profileInfo__buttons}>
          <Button type="submit">Обновить данные</Button>
          <Button type="button" onClick={() => logOut()}>
            Выйти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
