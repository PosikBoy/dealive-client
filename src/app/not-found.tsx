"use client";
import React, { useEffect } from "react";
import styles from "./notFound.module.scss";
import notFoundCar from "@/assets/notFoundCat.png";
import Image from "next/image";
import { Metadata } from "next";
import { title } from "process";
import { useRouter } from "next/navigation";
type Props = {};

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Страница не найдена",
  robots: {
    index: false,
    follow: false,
  },
};

const notFound = (props: Props) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className={styles.notFound}>
      <div className="container">
        <div className={styles.notFound__body}>
          <Image src={notFoundCar} alt="" />
          <h1>404</h1>
          <p>Страница не найдена или находится в разработке</p>
          <p>Через 3 секунды вы вернетесь на главную страницу!</p>
        </div>
      </div>
    </div>
  );
};

export default notFound;
