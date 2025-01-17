import PickupPVZPage from "@/components/screens/PickupPVZPage/PickupPVZ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сбор товаров и выкупов с пунктов выдачи заказов ПВЗ | DEALIVE",
  description:
    "Нужна доставка товаров с ПВЗ? DEALIVE предложит курьера для сбора товаров и доставки их по Москве с максимальной удобностью и безопасностью. ☑",
  keywords: [
    "срочная доставка, Москва экспресс-доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Сбор товаров и выкупов с пунктов выдачи заказов ПВЗ | DEALIVE",
    description:
      "Нужна доставка товаров с ПВЗ? DEALIVE предложит курьера для сбора товаров и доставки их по Москве с максимальной удобностью и безопасностью. ☑",
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
    title: "Сбор товаров и выкупов с пунктов выдачи заказов ПВЗ | DEALIVE",
    description:
      "Нужна доставка товаров с ПВЗ? DEALIVE предложит курьера для сбора товаров и доставки их по Москве с максимальной удобностью и безопасностью. ☑",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
};

export default function Home() {
  return <PickupPVZPage />;
}
