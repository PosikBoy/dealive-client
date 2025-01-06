import OrderPage from "@/components/screens/OrderPage/OrderPage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "Оформление экспресс-доставки курьером | Курьерская служба DEALIVE",
  description:
    "Быстрая и надежная доставка 📦 в Москве и области! Заполните форму заказа прямо сейчас и получите свою посылку в день! 🚚✨ DEALIVE — доставка на ваших условиях: удобно, честно и оперативно. Закажите быстро и без хлопот! 💨",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Оформление экспресс-доставки курьером | Курьерская служба DEALIVE",
    description:
      "Быстрая и надежная доставка 📦 в Москве и области! Заполните форму заказа прямо сейчас и получите свою посылку в день! 🚚✨ DEALIVE — доставка на ваших условиях: удобно, честно и оперативно. Закажите быстро и без хлопот! 💨",
    siteName: "Рассчитать стоимость и оформить заявку.",
  },

  twitter: {
    title: "Оформление экспресс-доставки курьером | Курьерская служба DEALIVE",
    description:
      "Быстрая и надежная доставка 📦 в Москве и области! Заполните форму заказа прямо сейчас и получите свою посылку в день! 🚚✨ DEALIVE — доставка на ваших условиях: удобно, честно и оперативно. Закажите быстро и без хлопот! 💨",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#3586ff",
};
const Order: NextPage = () => {
  return <OrderPage />;
};

export default Order;
