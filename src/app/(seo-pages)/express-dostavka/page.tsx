import { Metadata } from "next";

import ExpressDeliveryPage from "@/components/screens/ExpressDeliveryPage/ExpressDelivery";

export const metadata: Metadata = {
  title: "Экспресс-доставка курьером в Москве | Курьерская служба DEALIVE",
  description:
    "Надежная экспресс-доставка 24/7 день в день ✔ Курьеры готовы работать по всей Москве и ближнему Подмосковью. Стараемся выполнять ваши заказы максимально быстро. Вы сами выбираете цену для заказа! ➤",
  keywords: [
    "срочная доставка, Москва экспресс-доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Экспресс-доставка курьером в Москве | Курьерская служба DEALIVE",
    description:
      "Надежная экспресс-доставка 24/7 день в день ✔ Курьеры готовы работать по всей Москве и ближнему Подмосковью. Стараемся выполнять ваши заказы максимально быстро. Вы сами выбираете цену для заказа! ➤",
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
    title: "Экспресс-доставка курьером в Москве | Курьерская служба DEALIVE",
    description:
      "Надежная экспресс-доставка 24/7 день в день ✔ Курьеры готовы работать по всей Москве и ближнему Подмосковью. Стараемся выполнять ваши заказы максимально быстро. Сами назначайте цену для заказа! ➤",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
};

export default function Home() {
  return <ExpressDeliveryPage />;
}
