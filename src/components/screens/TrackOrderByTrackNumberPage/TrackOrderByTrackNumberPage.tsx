"use client";
import React, { FC, useEffect, useState } from "react";
import "./TrackOrderByTrackNumberPage.scss";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Image, { StaticImageData } from "next/image";

import ClockIcon from "@/assets/icons/clock.png";
import CourierFoundIcon from "@/assets/icons/found.png";
import CourierIcon from "@/assets/icons/courier.png";
import CheckIcon from "@/assets/icons/check.png";
import orderService from "@/services/order/order.service";
import { IOrder } from "@/types/order.interface";
import Loader from "@/components/Ui/Loader/Loader";
import Address from "./components/Address/Address";
import Price from "./components/Price/Price";
import Actions from "./components/Actions/Actions";

interface TrackOrderByTrackNumberPageProps {
  trackNumber: string;
  code: string | null;
}

interface StatusInfo {
  status: string;
  icon: StaticImageData;
}

const TrackOrderByTrackNumberPage: FC<TrackOrderByTrackNumberPageProps> = ({
  trackNumber,
  code,
}) => {
  const [order, setOrder] = useState<IOrder>();
  const [error, setError] = useState<string>("");

  const fetchOrder = async () => {
    try {
      const order = await orderService.getByTrackNumberAndCode(
        trackNumber,
        code || ""
      );
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
    2: { status: "Новый заказ", icon: ClockIcon },
    3: { status: "В поиске курьера", icon: CourierFoundIcon },
    4: { status: "В пути", icon: CourierIcon },
    5: { status: "Доставлен", icon: CheckIcon },
  };

  const currentStatus = orderStatusMap[order?.statusId];
  const statusEntries = Object.entries(orderStatusMap);

  return (
    <>
      <div className="order-page">
        <div className="order-page__container">
          <div className="order-page__body">
            <div className="order-page__status status">
              <Heading2 className="status__title">Статус заказа</Heading2>
              <div className="status__body">
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
                        <div className="status-item__text ${isActive}">
                          {statusInfo.status}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <Actions actions={order.actions} />
            <div className="order-page__support-button support-button">
              <a href="https://t.me/dealivesupport">Связаться с нами</a>
            </div>
            {order.addresses.map((address, index) => (
              <Address address={address} index={index} key={index} />
            ))}
            <Price price={order.price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderByTrackNumberPage;
