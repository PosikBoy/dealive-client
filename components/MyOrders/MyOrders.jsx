import { useEffect } from "react";
import { useState } from "react";
import Order from "./Order/Order";
import "./MyOrders.css";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/getorders", {
        headers: {
          Authorization: `Bearer ${token}`, // Передача JWT токена в заголовке запроса
        },
      });
      if (response.status == 201) {
        const jsonData = await response.json();
        setOrders(jsonData.orders);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getOrders(token);
  }, []);
  return (
    <div className="my-orders">
      <div className="container">
        <div className="my-orders__body">
          <div className="my-orders__title">{orders[0] && "Ваши заказы"}</div>
          {orders.map((item) => {
            return <Order order={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
