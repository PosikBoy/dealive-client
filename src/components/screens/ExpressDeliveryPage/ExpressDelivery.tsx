import "./ExpressDelivery.scss";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import MiniForm from "./components/MiniForm/MiniForm";
import Heading from "@/components/Ui/Heading/Heading";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import Card from "@/components/Ui/Card/Card";
import mapRoutingImage from "@/assets/images/mapRouting.png";

import WhatWeDeliver from "./components/WhatWeDeliver/WhatWeDeliver";
import HowToUse from "./components/HowToUse/HowToUse";
import AdditionalService from "./components/AdditionalService/AdditionalService";

const ExpressDeliveryPage: FC = () => {
  return (
    <main className="page-content">
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <strong>
                  <Heading className="welcome__title">
                    Экспресс-доставка{" "}
                    <span className="highlighted">день в день</span> в Москве по
                    вашей цене!
                  </Heading>
                </strong>
                <strong>
                  <Heading2 className="welcome__subtitle">
                    Найдем вам курьера на ваших условиях
                  </Heading2>
                </strong>
              </div>
              <div className="welcome__mini-form">
                <MiniForm />
              </div>
            </div>
            <strong>
              <Heading3 className="welcome__losung">
                Скорость — наш приоритет! Доставим ваш груз за считанные часы.
              </Heading3>
            </strong>

            <div className="welcome__tiles">
              <Tile title={`Доставка "от двери до двери"`} />
              <Tile title="Гибкость" />
              <Tile title="Удобство заказа" />
              <Tile title="Без регистрации" />
            </div>
          </div>
        </div>
      </section>
      <HowToUse />
      <AdditionalService />
      <WhatWeDeliver />

      <section className="info">
        <div className="container">
          <div className="info__content">
            <Card
              img={mapRoutingImage}
              alt="Курьер"
              title="Как мы ускоряем выполнение заказа?"
              subtitle="Для того, чтобы увеличить скорость доставки мы используем оптимизацию маршрутов, подъем заказа в пуле заказов. Для курьеров мы сортируем заказы по их срочности, цене и доходу за расстояние. Поэтому, если вы увеличите сумму заказа - заказ будет более приоритетным в системе. "
              imageDescription="На фото курьер Евгений"
              reversed={true}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpressDeliveryPage;
