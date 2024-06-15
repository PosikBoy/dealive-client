"use client";
import React, { useEffect } from "react";
import styles from "./ProfilePage.module.scss";
import Heading from "@/components/Ui/Heading/Heading";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { useTypedSelector } from "@/hooks/redux.hooks";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const user = useTypedSelector((state) => state.auth.user);

  const router = useRouter();
  useEffect(() => {
    if (!user?.id) {
      router.replace("/login");
    }
  }, [user]);
  return (
    <div className="container">
      <div className={styles.profilePage__body}>
        <Heading>Профиль</Heading>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default ProfilePage;
