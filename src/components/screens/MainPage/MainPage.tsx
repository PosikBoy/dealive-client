import "./MainPage.scss";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import MiniForm from "./components/MiniForm/MiniForm";
import Heading from "@/components/Ui/Heading/Heading";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import Card from "@/components/Ui/Card/Card";
import courierImage from "@/assets/images/courier.jpg";

import WhatWeDeliver from "./components/WhatWeDeliver/WhatWeDeliver";
import HowToUse from "./components/HowToUse/HowToUse";
import AdditionalService from "./components/AdditionalService/AdditionalService";

const MainPage: FC = () => {
  return (
    <main className="page-content">
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <strong>
                  <Heading className="welcome__title">
                    Срочная доставка
                    <span className="highlighted"> в Москве</span>
                  </Heading>
                </strong>
                <strong>
                  <Heading2 className="welcome__subtitle">
                    поможем отыскать вам курьера!
                  </Heading2>
                </strong>
              </div>
              <div className="welcome__mini-form">
                <MiniForm />
              </div>
            </div>
            <strong>
              <Heading3 className="welcome__losung">
                Срочная <span className="highlighted"> день в день </span>
                доставка
              </Heading3>
            </strong>

            <div className="welcome__tiles">
              <Tile title="Заберем посылку" />
              <Tile title="Выкупим и отправим" />
              <Tile title="Соберем товар с пвз" />
              <Tile title="Быстро и безопасно" />
            </div>
          </div>
        </div>
      </section>

      <WhatWeDeliver />
      <HowToUse />
      <section className="info">
        <div className="container">
          <div className="info__content">
            <Card
              img={courierImage}
              alt="Изображение подарка"
              title="Идеальное решение для тех, кто ценит свое время, и ждать просто нет возможности! "
              subtitle="Предлагаем вашему вниманию уникальный сервис доставки, который поможет решить любые ваши задачи! Наши профессиональные курьеры с радостью возьмутся за выполнение любого поручения, от прогулки с домашним питомцем до осмотра квартиры. "
              imageDescription="На фото курьер Евгений"
              reversed={true}
            />
          </div>
        </div>
      </section>
      <AdditionalService />
    </main>
  );
};

export default MainPage;
