import "./PickupPVZ.scss";
import { FC } from "react";

import AdditionalService from "@/components/seo/AdditionalService/AdditionalService";
import HowToUse from "@/components/seo/HowToUse/HowToUse";
import WhatWeDeliver from "@/components/seo/WhatWeDeliver/WhatWeDeliver";
import Heading from "@/components/ui/Heading/Heading";
import Heading2 from "@/components/ui/Heading2/Heading2";
import Heading3 from "@/components/ui/Heading3/Heading3";
import MiniForm from "@/components/features/MiniForm/MiniForm";
import Tile from "@/components/shared/Tile/Tile";

const PickupPVZPage: FC = () => {
  return (
    <main className="page-content">
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <strong>
                  <Heading className="welcome__title">
                    Сбор товаров и выкупов с пунктов выдачи заказов (ПВЗ) в
                    Москве
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
                Почему выбирают нас для сбора товаров из ПВЗ?
              </Heading3>
            </strong>

            <div className="welcome__tiles">
              <Tile title="Оперативность и точность" />
              <Tile title="Экономия времени" />
              <Tile title="Гибкость цены" />
              <Tile title="Простота заказа" />
            </div>
          </div>
        </div>
      </section>
      <WhatWeDeliver
        title="Что мы собираем?"
        description="Мы готовы забирать товары с ПВЗ, такие как одежда, электроника, косметика, книги и многое другое. Предоставляем услуги по сбору предварительно оплаченных заказов. Курьеры не смогут оплатить заказы со своего счета."
      />
      <HowToUse
        title="Как оформить заказ на сбор с ПВЗ?"
        description="Мы осуществляем услуги сбора товаров и выкупов с пунктов выдачи заказов (ПВЗ). Наши курьеры заберут все товары быстро и без задержек, а вы можете сосредоточиться на других задачах или личных делах. Работаем только с уже оплаченными заказами. Курьеры не смогут оплатить товар со своего счета."
        step1={`В поле \"Что везем?\" укажите товары для сбора. Если товары разные - так и напишите. В дополнительную информацию вы можете указать коды получения или ссылки на QR-коды. Они станут доступны курьеру только после взятия заказа. Заполните остальные данные и нажмите \"Оформить заказ\". `}
        step2="Мы начинаем поиск курьера на сбор. Обычно это занимает не более 20 минут. Если хотите ускорить процесс, предложите чуть большую сумму за заказ. Ориенторовочный тариф на сбор - 200р за точку, при итоговом весе не более 0.5 кг за точку "
        step3="Ваш заказ в процессе! Курьер собирает товары с  ПВЗ и готовит их для доставки или передачи. Вы можете отслеживать его маршрут в режиме реального времени. Далее курьер отвезет все товары на ваш склад."
        step4="Сбор завершён! Курьер вовремя забрал и доставил товары. Мы уверены, что всё прошло оперативно и безопасно."
      />
      <AdditionalService />
    </main>
  );
};

export default PickupPVZPage;
