import { Metadata } from "next";

import DocumentsDeliveryPage from "@/components/screens/DocumentsDeliveryPage/DocumentsDelivery";

export const metadata: Metadata = {
  title: "Доставка документов и посылок ➤ | Курьерская служба DEALIVE",
  description:
    "DEALIVE — это надежная доставка документов и посылок по Москве с пешими курьерами.✔ Убедитесь в надежности и скорости наших курьерских услуг! ☑",
  keywords: [
    "срочная доставка, Москва экспресс-доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Срочная доставка документов в Москве | Курьерская служба DEALIVE",
    description:
      "Надежная экспресс-доставка 24/7 день в день ✔ Курьеры готовы работать по всей Москве и ближнему Подмосковью. Стараемся выполнять ваши заказы максимально быстро. Вы сами выбираете цену для заказа! ➤",
    siteName:
      "Срочная доставка документов в Москве | Курьерская служба DEALIVE",
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
    title: "Срочная доставка документов в Москве | Курьерская служба DEALIVE",
    description:
      "Надежная доставка документов для бизнеса ✔ Курьеры готовы работать по всей Москве и ближнему Подмосковью. Документы перевозим с заботой и осторожностью. Вы сами выбираете цену для заказа! ➤",
    images: ["https://dealive.ru/icon.png"], // Must be an absolute URL
  },
};

export default function Home() {
  return <DocumentsDeliveryPage />;
}
