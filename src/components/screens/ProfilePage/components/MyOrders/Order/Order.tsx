import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import formatDate from "@/utils/date";

import { IOrder } from "@/types/order.interface";

import styles from "./Order.module.scss";

import CheckIcon from "@/assets/icons/check.png";
import ClockIcon from "@/assets/icons/clock.png";
import CourierIcon from "@/assets/icons/courier.png";
import CourierFoundIcon from "@/assets/icons/found.png";

interface IOrderProps {
  order: IOrder;
}

const Order: FC<IOrderProps> = ({ order }) => {
  const orderStatuses = [
    "Новый заказ",
    "В обработке",
    "Ищем курьера",
    "Курьер в пути",
    "Доставлен",
  ];
  const orderStatusIcons = [
    ClockIcon,
    ClockIcon,
    CourierFoundIcon,
    CourierIcon,
    CheckIcon,
  ];
  return (
    <Link href={`/order/${order.id}`} className={styles.order}>
      {orderStatusIcons.map((icon, index) => {
        const isActive = order?.statusId - 1 == index ? true : false;
        if (isActive) {
          return (
            <div className={styles.order__status}>
              <div className={styles.order__statusIcon}>
                <Image src={icon} alt="icon" width={20} height={20} />
              </div>
              <div className={styles.order__statusText}>
                {orderStatuses[index]}
              </div>
            </div>
          );
        }
      })}
      <div className={styles.order__info}>
        <div className={styles.order__heading}>
          <div className={styles.order__id}>Заказ {order.id}</div>
          <div className={styles.order__date}>
            {formatDate(order.createdAt)}
          </div>
        </div>
        <div className={styles.order__footer}>
          <div className={styles.order__additional}>Дополнительно</div>
          <div className={styles.order__price}>{order.price + " ₽"}</div>
        </div>
      </div>
    </Link>
  );
};

export default Order;
