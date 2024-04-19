import Heading from "@/components/Ui/Heading/Heading";
import styles from "./OrderPage.module.scss";
import { NextPage } from "next";
import React from "react";
import OrderForm from "./OrderForm/OrderForm";

const OrderPage: NextPage = () => {
  return (
    <div className="container">
      <div className={styles.orderPage__body}>
        <Heading>Оформление заявки</Heading>
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;
