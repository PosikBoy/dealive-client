import LoginPage from "@/components/screens/LoginPage/LoginPage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "Вход в аккаунт | Курьрская служба DEALIVE",
  description:
    "Авторизуйтесь, чтобы получать персональные предложения, отслеживать доставки и управлять своим профилем в DEALIVE.",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/login",
    title: "Вход в аккаунт | Курьрская служба DEALIVE",
    description:
      "Авторизуйтесь, чтобы получать персональные предложения, отслеживать доставки и управлять своим профилем в DEALIVE.",
    siteName: "Вход в аккаунт | Курьрская служба DEALIVE",
  },

  twitter: {
    title: "Вход в аккаунт | Курьрская служба DEALIVE",
    description:
      "Авторизуйтесь, чтобы получать персональные предложения, отслеживать доставки и управлять своим профилем в DEALIVE.",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#3586ff",
};
const Order: NextPage = () => {
  return <LoginPage />;
};

export default Order;
