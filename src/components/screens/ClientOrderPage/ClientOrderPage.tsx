"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import "./ClientOrderPage.scss";

import Heading2 from "@/components/ui/Heading2/Heading2";

import Image, { StaticImageData } from "next/image";

import Loader from "@/components/shared/Loader/Loader";

import orderService from "@/services/order/order.service";

import { IOrder } from "@/types/models/order";

import Address from "./components/Address/Address";

import CheckIcon from "@/assets/icons/check.png";
import ClockIcon from "@/assets/icons/clock.png";
import CourierIcon from "@/assets/icons/courier.png";
import CourierFoundIcon from "@/assets/icons/found.png";

interface ClientOrderProps {
  orderId: number;
}

interface StatusInfo {
  status: string;
  icon: StaticImageData;
}

const ClientOrderPage: FC<ClientOrderProps> = ({ orderId }) => {
  const [order, setOrder] = useState<IOrder>();
  const [error, setError] = useState<string>("");

  const fetchOrder = async () => {
    try {
      const order = await orderService.getById(orderId);
      setOrder(order);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Случилась непредвиденная ошибка");
      }
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (error) {
    return (
      <div className="container">
        <div className="loader-wrapper">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container">
        <div className="loader-wrapper">
          <Loader />
        </div>
      </div>
    );
  }
  const orderStatusMap: Record<number, StatusInfo> = {
    2: { status: "", icon: ClockIcon },
    3: { status: "В поиске курьера", icon: CourierFoundIcon },
    4: { status: "В пути", icon: CourierIcon },
    5: { status: "Доставлен", icon: CheckIcon },
  };

  const currentStatus = orderStatusMap[order?.statusId];
  const statusEntries = Object.entries(orderStatusMap);

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
        <div className="orderPage__container">
          <div className="orderPage__body">
            <div className="orderPage__status status">
              <Heading2 className="status__title">Статус заказа</Heading2>
              <div className="status__body">
                <div className="status__status">{currentStatus.status}</div>
                <ul className="status__list">
                  {statusEntries.map(([statusId, statusInfo]) => {
                    const isActive =
                      order?.statusId === Number(statusId) ? "active" : "";
                    return (
                      <li
                        className={`status__item status-item ${isActive}`}
                        key={statusId} // Используем statusId как ключ
                      >
                        <div className="status-item__icon">
                          <Image
                            src={statusInfo.icon} // Используем иконку из orderStatusMap
                            alt={statusInfo.status}
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
