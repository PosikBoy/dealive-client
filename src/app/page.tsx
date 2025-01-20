import MainPage from "@/components/screens/MainPage/MainPage";
import "./page.css";
import { Metadata } from "next";
import TrackOrder from "@/components/Ui/TrackOrder/TrackOrder";

export const metadata: Metadata = {
  title: "Срочная доставка курьером в Москве | Курьерская служба DEALIVE",
  description:
    "Ищете курьера в Москве или области? ➜ Надежная доставка 24/7 ✔ Курьеры готовы работать по всей Москве и России. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Срочная доставка курьером по Москве | Курьерская служба DEALIVE",
    description:
      "Ищете курьера в Москве или области? ➜ Надежная доставка 24/7 ✔ Курьеры готовы работать по всей Москве и России. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
    siteName: "Срочная доставка в Москве. Экспресс курьер по городу.",
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

  twitter: {
    title: "Срочная доставка курьером в Москве | Курьерская служба DEALIVE",
    description:
      "Ищете курьера в Москве или области? ➜ Надежная доставка 24/7 ✔ Курьеры готовы работать по всей Москве и России. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
  verification: {
    yandex: "b94cb0cb518ebeb9",
  },
};

export default function Home() {
  return (
    <>
      <MainPage />
      <TrackOrder />
    </>
  );
}
