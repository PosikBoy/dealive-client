import Heading3 from "@/components/Ui/Heading3/Heading3";
import Loader from "@/components/Ui/Loader/Loader";
import orderService from "@/services/order/order.service";
import { IOrderResponse } from "@/types/order.interface";
import React, { FC, useEffect, useState } from "react";
import Order from "./Order/Order";

const MyOrders: FC = () => {
  const [orders, setOrders] = useState<IOrderResponse[]>();

  const fetchOrders = async () => {
    try {
      const data = await orderService.getAll();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (!orders) {
    return <Loader />;
  }
  if (orders.length === 0) {
    return <></>;
  }

  return (
    <>
      <Heading3>Ваши заказы</Heading3>
      {orders?.map((item) => (
        <Order key={item.info?.id} order={item} />
      ))}
    </>
  );
};

export default MyOrders;
