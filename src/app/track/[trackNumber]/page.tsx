import { Metadata, NextPage } from "next";

import TrackOrderByTrackNumberPage from "@/components/screens/TrackOrder/TrackOrderByTrackNumberPage";
import { use } from "react";

type Params = Promise<{
  trackNumber: string;
}>;

export const metadata: Metadata = {
  title: "Отслеживание заказа | Курьерская служба DEALIVE",
  description: "Отслеживание заказа в курьерской службе DEALIVE",
  keywords: [
    "срочная доставка, Москва быстрая доставка, экспресс доставка по Москве, курьер в Москве, Москва доставить посылку",
  ],
  openGraph: {
    locale: "ru",
    url: "/",
    title: "Отслеживание заказа | Курьерская служба DEALIVE",
    description: "Отслеживание заказа в курьерской службе DEALIVE",
    siteName: "Рассчитать стоимость и оформить заявку.",
  },

  twitter: {
    title: "Отслеживание заказа | Курьерская служба DEALIVE",
    description: "Отслеживание заказа в курьерской службе DEALIVE",
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
const page = (props: { params: Params }) => {
  const params = use(props.params);
  const trackNumber = params.trackNumber;

  return <TrackOrderByTrackNumberPage trackNumber={trackNumber} />;
};

export default page;
