"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import styles from "./notFound.module.scss";

import notFoundCar from "@/assets/icons/notFoundCat.png";

// export const metadata: Metadata = {
//   title: "Страница не найдена",
//   description: "Страница не найдена",
//   robots: {
//     index: false,
//     follow: false,
//   },
// };

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.notFound}>
      <div className="container">
        <div className={styles.notFound__body}>
          <Image src={notFoundCar} alt="" />
          <h1>404</h1>
          <p>Страница не найдена или находится в разработке</p>
          <p>Через 3 секунды Вы вернетесь на главную страницу!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
