"use client";
import React, { FC, useEffect, useState } from "react";
import "./ClientOrderPage.scss";
import Link from "next/link";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Image from "next/image";

import ClockIcon from "@/assets/icons/clock.png";
import CourierFoundIcon from "@/assets/icons/found.png";
import CourierIcon from "@/assets/icons/courier.png";
import CheckIcon from "@/assets/icons/check.png";
import orderService from "@/services/order/order.service";
import { IOrder } from "@/types/order.interface";
import Loader from "@/components/Ui/Loader/Loader";
import Address from "./Address/Address";

interface ClientOrderProps {
  orderId: number;
}

const ClientOrderPage: FC<ClientOrderProps> = ({ orderId }) => {
  const [order, setOrder] = useState<IOrder>();

  const fetchOrder = async () => {
    const order = await orderService.getById(orderId);
    setOrder(order);
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (!order) {
    return (
      <div className="container">
        <div className="loader-wrapper">
          <Loader />
        </div>
      </div>
    );
  }

  const orderStatuses = [
    "В обработке",
    "В поиске курьера",
    "В пути",
    "Доставлен",
  ];
  const orderStatusIcons = [
    ClockIcon,
    CourierFoundIcon,
    CourierIcon,
    CheckIcon,
  ];
  return (
    <>
      <nav className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__link">
              <Link href="/profile">Мой профиль</Link>
            </li>
            <li className="breadcrumb__link">Заказ {orderId}</li>
          </ul>
        </div>
      </nav>
      <div className="orderPage">
        <div className="container">
          <div className="orderPage__body">
            <div className="orderPage__status status">
              <Heading2 className="status__title">Статус заказа</Heading2>
              <div className="status__body">
                <div className="status__status">
                  {orderStatuses[order.statusId - 2]}
                </div>
                <ul className="status__list">
                  {orderStatuses.map((status, index) => {
                    const isActive =
                      order?.statusId - 2 == index ? "active" : "";
                    return (
                      <li
                        className={`status__item status-item ${isActive}`}
                        key={index}
                      >
                        <div className="status-item__icon">
                          <Image
                            src={orderStatusIcons[index]}
                            alt="Часы"
                            width={24}
                            height={24}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="orderPage__support-button support-button">
              <a href="https://t.me/dealivesupport">Связаться с нами</a>
            </div>
            {order.addresses.map((address, index) => (
              <Address address={address} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientOrderPage;
