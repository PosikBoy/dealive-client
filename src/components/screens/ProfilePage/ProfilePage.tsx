"use client";
import React, { useEffect } from "react";
import styles from "./ProfilePage.module.scss";
import Heading from "@/components/Ui/Heading/Heading";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import { useTypedSelector } from "@/hooks/redux.hooks";
import { useRouter } from "next/navigation";
import MyOrders from "./components/MyOrders/MyOrders";

const ProfilePage = () => {
  const client = useTypedSelector((state) => state.auth.client);
  const router = useRouter();
  useEffect(() => {
    console.log("client", client);
    if (!client?.id) {
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
