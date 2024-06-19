import Heading from "@/components/Ui/Heading/Heading";
import styles from "./OrderPage.module.scss";
import { NextPage } from "next";
import React from "react";
import OrderForm from "./OrderForm/OrderForm";
import Link from "next/link";

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
        <Heading>Оформление заявки</Heading>
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
