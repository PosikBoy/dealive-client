import { IOrderResponse } from "@/types/order.interface";
import Link from "next/link";
import React, { FC } from "react";
import ClockIcon from "@/assets/icons/clock.png";
import CourierFoundIcon from "@/assets/icons/found.png";
import CourierIcon from "@/assets/icons/courier.png";
import CheckIcon from "@/assets/icons/check.png";
import Image from "next/image";

import "./Order.scss";
import formatDate from "@/utils/date";

interface IOrderProps {
  order: IOrderResponse;
}

const Order: FC<IOrderProps> = ({ order }) => {
  const orderStatuses = ["В обработке", "Курьер найден", "В пути", "Доставлен"];
  const orderStatusIcons = [
    ClockIcon,
    CourierFoundIcon,
    CourierIcon,
    CheckIcon,
  ];
  return (
    <Link href={`/order/${order.info.id}`} className="order">
      <div className="order__status">
        {orderStatusIcons.map((icon, index) => {
          const isActive =
            order?.info?.status == orderStatuses[index] ? true : false;
          if (isActive) {
            return (
              <>
                <div className="order__status-icon">
                  <Image
                    src={icon}
                    alt="icon"
                    width={20}
                    height={20}
                    key={index}
                  />
                </div>
                <div className="order__status-text">{orderStatuses[index]}</div>
              </>
            );
          }
        })}
      </div>
      <div className="order__info">
        <div className="order__heading">
          <div className="order__id">Заказ {order.info.id}</div>
          <div className="order__date">{formatDate(order.info.date)}</div>
        </div>
        <div className="order__footer">
          <div className="order__additional">Дополнительно</div>
          <div className="order__price">{order.info.price + " ₽"}</div>
        </div>
      </div>
    </Link>
  );
};

export default Order;
