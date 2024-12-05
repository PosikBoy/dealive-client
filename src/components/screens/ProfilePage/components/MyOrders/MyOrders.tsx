import Heading3 from "@/components/Ui/Heading3/Heading3";
import Loader from "@/components/Ui/Loader/Loader";
import orderService from "@/services/order/order.service";
import React, { FC, useEffect, useState } from "react";
import Order from "./Order/Order";
import { IOrder } from "@/types/order.interface";

const MyOrders: FC = () => {
  const [orders, setOrders] = useState<IOrder[]>();

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
        <Order key={item.id} order={item} />
      ))}
    </>
  );
};

export default MyOrders;
