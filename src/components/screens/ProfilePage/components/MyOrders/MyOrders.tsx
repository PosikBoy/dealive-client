import { FC, useEffect, useState } from "react";

import Loader from "@/components/shared/Loader/Loader";
import Heading3 from "@/components/ui/Heading3/Heading3";

import orderService from "@/services/order/order.service";

import { IOrder } from "@/types/models/order";

import Order from "./Order/Order";

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
