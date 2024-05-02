import ProfilePage from "@/components/screens/ProfilePage/ProfilePage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "Рассчитать стоимость и оформить заявку",
  description:
    "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  metadataBase: new URL("https://dealive.ru/profile"),
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Рассчитать стоимость и оформить заявку.",
    description:
      "Срочная, надежная и безопасная доставка для бизнеса в Москве. Мы поможем вам найти курьера для доставки. Максимально гибкий подход - наши курьеры готовы выполнять дополнительные задания за дополнительную плату.",
    siteName: "Рассчитать стоимость и оформить заявку.",
    images: [
      {
        url: "https://dealive.ru/icon.png", // Must be an absolute URL
        width: 128,
        height: 128,
      },
    ],
    type: "website",
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
  icons: {
    icon: "https://dealive.ru/favicon.ico",
    shortcut: "https://dealive.ru/favicon.ico",
  },
  manifest: "https://dealive.ru/manifest.json",
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

export const viewport: Viewport = {
  themeColor: "#3586ff",
};
const Order: NextPage = () => {
  return <ProfilePage />;
};

export default Order;
