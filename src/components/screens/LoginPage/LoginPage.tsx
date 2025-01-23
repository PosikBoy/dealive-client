"use client";
import React, { useEffect } from "react";

import AuthForm from "@/components/features/AuthForm/AuthForm";
import Heading from "@/components/ui/Heading/Heading";

import "./LoginPage.scss";
import { useTypedSelector } from "@/hooks/redux.hooks";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const client = useTypedSelector((state) => state.auth.client);
  const router = useRouter();
  useEffect(() => {
    console.log("client in loginpage", client);
    if (client?.userId) {
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
