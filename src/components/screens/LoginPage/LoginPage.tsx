"use client";
import React, { useEffect } from "react";
import Heading from "@/components/Ui/Heading/Heading";
import AuthForm from "@/components/Ui/AuthForm/AuthForm";
import "./LoginPage.scss";
import { useTypedSelector } from "@/hooks/redux.hooks";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const user = useTypedSelector((state) => state.auth.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.id) {
      router.replace("/profile");
    }
  }, []);
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__body">
          <Heading>Авторизация</Heading>
          <div className="welcome__form">
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
