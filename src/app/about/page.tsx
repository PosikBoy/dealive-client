import AboutPage from "@/components/screens/AboutPage/AboutPage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "О нас | Курьерская служба DEALIVE",
  description:
    "DEALIVE 💼 — ваш надежный сервис срочной доставки в Москве! 💌 Свобода выбора цены, честные условия, умные технологии и удобство 🌟. Доставка на ваших условиях!",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/about",
    title: "О нас | Курьерская служба DEALIVE",
    description:
      "DEALIVE 💼 — ваш надежный сервис срочной доставки в Москве! 💌 Свобода выбора цены, честные условия, умные технологии и удобство 🌟. Доставка на ваших условиях!",
    siteName: "О нас | Курьерская служба DEALIVE",
  },
  twitter: {
    title: "О нас | Курьерская служба DEALIVE",
    description:
      "DEALIVE 💼 — ваш надежный сервис срочной доставки в Москве! 💌 Свобода выбора цены, честные условия, умные технологии и удобство 🌟. Доставка на ваших условиях!",
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
  return <AboutPage />;
};

export default Order;
