import ProfilePage from "@/components/screens/ProfilePage/ProfilePage";
import { Metadata, NextPage, Viewport } from "next";

export const metadata: Metadata = {
  title: "Мой профиль | Курьерская служба DEALIVE",
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
