"use client";

import { useForm } from "react-hook-form";
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
  const user = useTypedSelector((state) => state.auth);

  console.log("user", user);

  const router = useRouter();
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IFormState>({
    mode: "onChange",
    defaultValues: {
      phoneNumber: user?.user?.phoneNumber || "",
      name: user?.user?.name || "",
      email: user?.user?.email || "",
    },
  });

  const dispatch = useTypedDispatch();
  const onSubmit = async (data: IFormState) => {
    setSuccess("");
    const response = (await dispatch(updateProfile(data))) as ResponseType;
    if (response.payload.id) {
      setSuccess("Ваши данные были успешно изменены");
    }
    setTimeout(() => setSuccess(""), 3000);
  };

  const logOut = async () => {
    await dispatch(logOutAction());
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
        {user?.error ? (
          <div className={styles.profileInfo__error}>{user?.error}</div>
        ) : null}
        {success ? (
          <div className={styles.profileInfo__success}>{success}</div>
        ) : null}

        <InputField
          type="text"
          autoComplete="name"
          placeholder="Имя пользователя"
          required
          {...register("name", {
            required: "Введите ваше имя",
          })}
          error={errors?.name}
        />
        <PhoneInputField
          control={control}
          name="phoneNumber"
          error={errors?.phoneNumber}
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
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Введите электронную почту",
            },
          })}
          error={errors?.email}
        />
        <div className={styles.profileInfo__buttons}>
          <Button type="submit">
            <span>Обновить данные</span>
          </Button>
          <Button type="button" onClick={() => logOut()}>
            Выйти
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
