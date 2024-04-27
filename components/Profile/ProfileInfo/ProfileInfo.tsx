"use client";
import "./profileInfo.css";
import { useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { useTypedDispatch } from "@/hooks/redux.hooks";
import { useTypedSelector } from "@/hooks/redux.hooks";
import { getProfile, updateProfile } from "@/store/profile/profile.actions";
import { logOut } from "@/store/auth/auth.actions";
import { useForm } from "react-hook-form";

interface IUserFormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const ProfileInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const router = useRouter();
  const user = useTypedSelector((state) => state.auth.user);
  const dispatch = useTypedDispatch();
  const logOutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(logOut());
    router.replace("/");
  };
  useEffect(() => {
    if (!user?.id) {
      router.replace("/");
    }
    reset(user);
  }, [dispatch]);
  const onSubmit = async (data: any) => {
    await console.log(data);
    // dispatch(updateProfile(data));
  };
  return (
    <div className="profile_info">
      <div className="container">
        <div className="profile-info__body">
          <h2 className="profile-info__title">Ваш профиль</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="profile-info__info"
          >
            <div className="profile-info__name">
              <p className="profile-info__name-title">Имя</p>
              <input {...register("name")} className="profile-field" />
            </div>
            <div className="profile-info__surname">
              <p className="profile-info__surname-title">Фамилия</p>
              <input {...register("secondName")} className="profile-field" />
            </div>
            <div className="profile-info__email">
              <p className="profile-info__email-title">Электронная почта</p>
              <input
                {...register("email")}
                className="profile-field"
                placeholder="Введите свою электронную почту"
              />
            </div>
            <div className="profile-info__phone">
              <p className="profile-info__phone-title">Номер телефона</p>
              <input
                {...register("phoneNumber")}
                className="profile-field"
                placeholder="Введите свой Номер телефона"
              />
            </div>
            <div className="profile-info__buttons">
              <button type="submit" className="profile-info__update-button">
                Обновить данные
              </button>
              <button
                className="profile-info__logout-button"
                onClick={logOutHandler}
              >
                Выйти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
