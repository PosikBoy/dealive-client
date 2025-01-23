import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import Heading from "@/components/Ui/Heading/Heading";

import styles from "./OrderPage.module.scss";

import OrderForm from "./components/OrderForm/OrderForm";

const OrderPage: NextPage = () => {
  return (
    <div className="container">
      <div className={styles.orderPage__body}>
        <nav className={styles.breadcrumb}>
          <div className="container">
            <ul className={styles.breadcrumb__list}>
              <li className={styles.breadcrumb__link}>
                <Link href="/">Главная</Link>
              </li>
              <li className={styles.breadcrumb__link}>Оставить заказ</li>
            </ul>
          </div>
        </nav>
        <Heading className={styles.heading}>
          Оформление срочной доставки курьером в Москве
        </Heading>
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
