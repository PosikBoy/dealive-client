"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

import Button from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import Loader from "@/components/shared/Loader/Loader";
import TrackLink from "@/components/shared/TrackLink/TrackLink";

import orderService from "@/services/order/order.service";

import type { IOrder } from "@/types/order.interface";

import styles from "./TrackOrderByTrackNumberPage.module.scss";

import Actions from "./components/Actions/Actions";
import Address from "./components/Address/Address";
import Courier from "./components/Courier/Courier";
import Price from "./components/Price/Price";
import Status from "./components/Status/Status";

import notFoundCar from "@/assets/icons/notFoundCat.png";

interface TrackOrderByTrackNumberPageProps {
  trackNumber: string;
}

const TrackOrderByTrackNumberPage: FC<TrackOrderByTrackNumberPageProps> = ({
  trackNumber,
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [order, setOrder] = useState<IOrder>();
  const [error, setError] = useState<string>("");
  const [isOrderInTrackList, setIsOrderInTrackList] = useState<boolean>(false);

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
      <div className={styles.orderPage}>
        <div className={styles.orderPageContainer}>
          <div className={styles.orderPageBody}>
            <Heading className={styles.orderPageHeading}>
              Заказ {order.id}
            </Heading>
            <Status statusId={order.statusId} />
            {order.courierId && order.courier && (
              <Courier courier={order.courier} />
            )}
            <Actions actions={order.actions} />
            <div className={styles.supportButton}>
              <a href="https://t.me/dealivesupport">Связаться с нами</a>
            </div>
            {order.addresses.map((address, index) => (
              <Address address={address} index={index} key={index} />
            ))}
            <TrackLink trackNumber={order.trackNumber} code={order.code} />
            <Button
              className={styles.orderPageButton}
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
