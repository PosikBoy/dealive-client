"use client";
import React, {
  Children,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TrackOrder.scss";
import orderService from "@/services/order/order.service";
import { IOrder } from "@/types/order.interface";

import ClockIcon from "@/assets/icons/clock.png";
import CourierFoundIcon from "@/assets/icons/found.png";
import CourierIcon from "@/assets/icons/courier.png";
import CheckIcon from "@/assets/icons/check.png";
import Image from "next/image";
import formatDate from "@/utils/date";
import Link from "next/link";
import { useRouter } from "next/navigation";

export enum OrderStatusEnum {
  NEW_ORDER = 1,
  IN_PROCESS = 2,
  SEARCH_COURIER = 3,
  COURIER_IN_TRANSIT = 4,
  DELIVERED = 5,
  CANCELLED = 6,
}

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

const TrackOrder = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [activeOrders, setActiveOrders] = useState<IOrder[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const [prevOffset, setPrevOffset] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const trackOrders = async () => {
      const orders = await orderService.trackOrders();

      if (orders) setActiveOrders(orders);
    };
    trackOrders();
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setPrevOffset(offset); // Сохраняем предыдущее значение скролла
    setStartX(e.clientX);
  };
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newOffset = e.clientX - startX + prevOffset;

    const maxOffset = ref.current
      ? ref.current.scrollWidth - ref.current.clientWidth
      : 0;
    if (newOffset > 0 || maxOffset < Math.abs(newOffset)) return;
    setOffset(e.clientX - startX + prevOffset);
  };
  const handleMouseUpOrder = (e: MouseEvent<HTMLDivElement>, order: IOrder) => {
    e.preventDefault();
    setIsDragging(false);

    if (Math.abs(offset - prevOffset) < 5)
      router.push(`/track/${order?.trackNumber}?code=${order?.code}`);
  };

  const handleMouseUpContainer = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  return (
    <>
      {activeOrders.length > 0 && (
        <div
          className="track-order"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={(e) => handleMouseUpContainer(e)}
        >
          <div className="track-order__container" ref={ref}>
            {activeOrders.map((order) => {
              return (
                <div
                  className="track-order__order order "
                  key={order.id}
                  style={{
                    transform: `translateX(${offset}px)`,
                    cursor: "grab",
                  }}
                  onMouseUp={(e) => handleMouseUpOrder(e, order)}
                >
                  {orderStatusIcons.map((icon, index) => {
                    const isActive =
                      order?.statusId - 1 == index ? true : false;
                    if (isActive) {
                      return (
                        <div className="order__status">
                          <div className="order__status-icon">
                            <Image
                              src={icon}
                              alt="icon"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="order__column">
                            <div className="order__number">
                              {"Заказ " +
                                order.id +
                                " | " +
                                formatDate(order.createdAt)}
                            </div>
                            <div className="order__status-text">
                              {orderStatuses[index]}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TrackOrder;
