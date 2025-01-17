import "./DocumentsDelivery.scss";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import Heading from "@/components/Ui/Heading/Heading";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";

import HowToUse from "../../seo/HowToUse/HowToUse";
import AdditionalService from "../../seo/AdditionalService/AdditionalService";
import WhatWeDeliver from "../../seo/WhatWeDeliver/WhatWeDeliver";
import MiniForm from "@/components/Ui/MiniForm/MiniForm";

const DocumentsDeliveryPage: FC = () => {
  return (
    <main className="page-content">
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <strong>
                  <Heading className="welcome__title">
                    Срочная доставка документов и посылок курьером в Москве
                  </Heading>
                </strong>
                <strong>
                  <Heading2 className="welcome__subtitle">
                    Вы сами назначаете цену
                  </Heading2>
                </strong>
              </div>
              <div className="welcome__mini-form">
                <MiniForm />
              </div>
            </div>
            <strong>
              <Heading3 className="welcome__losung">
                Почему выбирают нас для доставки документов?
              </Heading3>
            </strong>

            <div className="welcome__tiles">
              <Tile title="Точность и оперативность" />
              <Tile title="Конфиденциальность" />
              <Tile title="Надежно и безопасно" />
              <Tile title="Без регистрации" />
            </div>
          </div>
        </div>
      </section>
      <HowToUse
        title="Как оформить заказ на доставку документов?"
        description="Мы специализируемся на быстрой доставке документов, чтобы они попадали к вам или вашим клиентам в самые сжатые сроки. Наши курьеры всегда готовы выполнить заказ быстро и без задержек, чтобы вы не теряли время и могли сосредоточиться на важном."
        step1={`В поле "Что везем?" укажите документы. Далее заполните все данные и нажмите "Оформить заказ"`}
        step2="Мы начинаем поиск курьера для вашего заказа. Это обычно занимает не более 20 минут. Если вы хотите, чтобы курьер выбрал ваш заказ быстрее, предложите немного большую сумму за заказ — и курьер найдется быстрее! 🚀"
        step3="Ваш заказ в процессе! Курьер уже забирает документы и доставляет её по адресу. Вы можете отслеживать его маршрут в режиме реального времени или общаться с ним через чат. Важные документы будут у получателя уже совсем скоро!"
        step4="Ваш заказ завершён! Курьер вовремя забрал и доставил документы. Мы уверены, что доставка прошла быстро и безопасно."
      />
      <AdditionalService />
      <WhatWeDeliver
        title="Что мы перевозим?"
        description="Мы готовы забрать и доставить документы, папки, бумаги, файлы, конверты и другие виды документов. Но кроме этого, мы беремся за доставку цветов, тортов, обуви, одежды, коробок и пакетов."
      />
    </main>
  );
};

export default DocumentsDeliveryPage;
