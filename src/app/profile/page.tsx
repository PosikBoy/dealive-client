import ProfilePage from "@/components/screens/ProfilePage/ProfilePage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "Рассчитать стоимость и оформить заявку",
  description:
    "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Профиль пользователя",
    description: "Профиль пользователя DEALIVE.ru",
    siteName: "Профиль DEALIVE.RU",
  },
  robots: {
    index: false,
    follow: false,
  },
  twitter: {
    title: "Профиль пользователя",
    description: "Профиль пользователя DEALIVE.ru",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
};

export const viewport: Viewport = {
  themeColor: "#3586ff",
};

const Order: NextPage = () => {
  return <ProfilePage />;
};

export default Order;
