import "./ExpressDelivery.scss";
import { FC } from "react";

import AdditionalService from "@/components/seo/AdditionalService/AdditionalService";
import HowToUse from "@/components/seo/HowToUse/HowToUse";
import WhatWeDeliver from "@/components/seo/WhatWeDeliver/WhatWeDeliver";
import Card from "@/components/shared/Card/Card";
import Heading from "@/components/ui/Heading/Heading";
import Heading2 from "@/components/ui/Heading2/Heading2";
import Heading3 from "@/components/ui/Heading3/Heading3";
import MiniForm from "@/components/features/MiniForm/MiniForm";
import Tile from "@/components/shared/Tile/Tile";

import mapRoutingImage from "@/assets/images/mapRouting.png";

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
      <HowToUse
        title="Как оформить заказ на экспресс-доставку?"
        description="Мы специализируемся на экспресс-доставке, чтобы ваши заказы приходили как можно быстрее! Наши курьеры готовы выполнить заказ с максимальной скоростью, чтобы вы не теряли время. Мы ценим ваше время и гарантируем, что доставка будет выполнена без задержек!"
        step1="Ваш заказ поступит в систему, и мы немедленно приступим к поиску курьера."
        step2="Мы начинаем поиск курьера для выполнения вашего заказа. Это обычно занимает не более 20 минут. Если вы хотите, чтобы курьер пришел быстрее, предложите немного большую сумму за заказ — и курьер найдется быстрее! 🚀"
        step3="Ваш заказ в процессе! Курьер уже забирает посылку и доставляет её по адресу. Вы можете отслеживать его маршрут в режиме реального времени или общаться с ним через чат. Ваш заказ будет в надежных руках!"
        step4="Ваш заказ завершён! Курьер вовремя забрал посылку и доставил её по указанному адресу. Мы гарантируем, что экспресс-доставка прошла быстро и удобно. Когда вам снова понадобится срочная доставка — мы всегда готовы помочь!"
      />
      <AdditionalService />
      <WhatWeDeliver
        title="Что мы перевозим?"
        description="Мы осуществляем поиск курьеров на экспресс-доставку документов, ключей, подарков, коробок, пакетов, электроники, продуктов и разных других грузов."
      />

      <section className="info">
        <div className="container">
          <div className="info__content">
            <Card
              img={mapRoutingImage}
              alt="Курьер"
              title="Как мы ускоряем выполнение заказа?"
              subtitle="Для того, чтобы увеличить скорость доставки мы используем оптимизацию маршрутов, подъем заказа в пуле заказов. Для курьеров мы сортируем заказы по их срочности, цене и доходу за расстояние. Поэтому, если вы увеличите сумму заказа - заказ будет более приоритетным в системе. "
              imageDescription="На фото курьер умная маршрутизация"
              reversed={true}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpressDeliveryPage;
