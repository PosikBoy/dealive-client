import MainPage from "@/components/screens/MainPage/MainPage";
import "./page.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Срочная доставка в Москве. Экспресс курьер по городу.",
  description:
    "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],

  openGraph: {
    locale: "ru",
    url: "/",
    title: "Срочная доставка в Москве. Экспресс курьер по городу.",
    description:
      "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
    siteName: "Срочная доставка в Москве. Экспресс курьер по городу.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },

  twitter: {
    title: "Срочная доставка в Москве. Экспресс курьер по городу.",
    description:
      "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["my-email", "my-link"],
    },
  },
};

export default function Home() {
  return (
    <>
      <MainPage />
    </>
  );
}
