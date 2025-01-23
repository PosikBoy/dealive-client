"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import Heading from "@/components/Ui/Heading/Heading";

import { useTypedSelector } from "@/hooks/redux.hooks";

import styles from "./ProfilePage.module.scss";

import MyOrders from "./components/MyOrders/MyOrders";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

const ProfilePage = () => {
  const client = useTypedSelector((state) => state.auth.client);
  const router = useRouter();
  useEffect(() => {
    if (!client?.userId) {
      router.replace("/login");
    }
  }, [client]);

  return (
    <div className="container">
      <div className={styles.profilePage__body}>
        <Heading>Профиль</Heading>
        <ProfileInfo />
        <MyOrders />
      </div>
    </div>
  );
};

export default ProfilePage;
