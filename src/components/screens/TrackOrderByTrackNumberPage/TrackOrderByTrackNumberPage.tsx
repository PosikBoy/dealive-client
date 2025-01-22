"use client";
import React, { FC, useEffect, useState } from "react";
import "./TrackOrderByTrackNumberPage.scss";
import Heading2 from "@/components/Ui/Heading2/Heading2";

import orderService from "@/services/order/order.service";
import { IOrder } from "@/types/order.interface";
import Loader from "@/components/Ui/Loader/Loader";
import Address from "./components/Address/Address";
import Price from "./components/Price/Price";
import Actions from "./components/Actions/Actions";
import Status from "./components/Status/Status";
import Heading from "@/components/Ui/Heading/Heading";
import Courier from "./components/Courier/Courier";
import Button from "@/components/Ui/Button/Button";
import TrackLink from "./components/TrackLink/TrackLink";

import notFoundCar from "@/assets/icons/notFoundCat.png";
import Image from "next/image";

interface TrackOrderByTrackNumberPageProps {
  trackNumber: string;
  code: string | null;
}

const TrackOrderByTrackNumberPage: FC<TrackOrderByTrackNumberPageProps> = ({
  trackNumber,
  code,
}) => {
  const [order, setOrder] = useState<IOrder>();
  const [error, setError] = useState<string>("");
  const [isOrderInTrackList, setIsOrderInTrackList] = useState<boolean>(false);
  console.log(order);
  const fetchOrder = async () => {
    try {
      const order = await orderService.getByTrackNumberAndCode(
        trackNumber,
        code || ""
      );

      setOrder(order);

      const isOrderInTrackList = orderService.isInTrackList(order.id);
      setIsOrderInTrackList(isOrderInTrackList);
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
        <div className="not-found">
          <Image src={notFoundCar} alt="" />
          {error}
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

  const handleTrackList = () => {
    const isInTrackList = orderService.isInTrackList(order.id);

    if (isInTrackList) {
      orderService.removeFromTrackList(order.id);
      setIsOrderInTrackList(false);
    } else {
      orderService.saveTrackingInfo(order);
      setIsOrderInTrackList(true);
    }
  };

  return (
    <>
      <div className="order-page">
        <div className="order-page__container">
          <div className="order-page__body">
            <Heading className="order-page__heading">Заказ {order.id}</Heading>
            <Status statusId={order.statusId} />
            {order.courierId && order.courier && (
              <Courier courier={order.courier} />
            )}
            <Actions actions={order.actions} />
            <div className="order-page__support-button support-button">
              <a href="https://t.me/dealivesupport">Связаться с нами</a>
            </div>
            {order.addresses.map((address, index) => (
              <Address address={address} index={index} key={index} />
            ))}
            <TrackLink trackNumber={order.trackNumber} code={order.code} />
            <Button
              className="order-page__button"
              color="white"
              onClick={() => handleTrackList()}
            >
              {isOrderInTrackList
                ? "Удалить из отслеживаемых"
                : "Добавить в отслеживаемые"}
            </Button>
            <Price price={order.price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrderByTrackNumberPage;
