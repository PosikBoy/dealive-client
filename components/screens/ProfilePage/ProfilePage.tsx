import React from "react";
import styles from "./ProfilePage.module.scss";
import Heading from "@/components/Ui/Heading/Heading";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = () => {
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
