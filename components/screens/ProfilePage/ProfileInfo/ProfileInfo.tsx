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

interface IFormState {
  name: string;
  phoneNumber: string;
  email: string;
}
const ProfileInfo = () => {
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
  const dispatch = useTypedDispatch();
  const onSubmit = (data: IFormState) => {
    dispatch(updateProfile(data));
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

        <InputField placeholder="Электронная почта" {...register("email")} />
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
