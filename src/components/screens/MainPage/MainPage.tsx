import { FC } from "react";
import "./MainPage.scss";

import MiniForm from "@/components/features/MiniForm/MiniForm";
import AdditionalService from "@/components/seo/AdditionalService/AdditionalService";
import HowToUse from "@/components/seo/HowToUse/HowToUse";
import WhatWeDeliver from "@/components/seo/WhatWeDeliver/WhatWeDeliver";

import Tile from "@/components/shared/Tile/Tile";
import Heading from "@/components/ui/Heading/Heading";
import Heading2 from "@/components/ui/Heading2/Heading2";
import Heading3 from "@/components/ui/Heading3/Heading3";

import Container from "@/components/layout/Container/Container";
import FAQ from "@/components/seo/FAQ/FAQ";
import InfoCard from "@/components/seo/InfoCard/InfoCard";

const MainPage: FC = () => {
  return (
    <main className="page-content">
      <section className="welcome">
        <Container>
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <strong>
                  <Heading className="welcome__title">
                    Срочная доставка{" "}
                    <span className="highlighted">в Москве и Подмосковье</span>{" "}
                    на ваших условиях!
                  </Heading>
                </strong>
                <strong>
                  <Heading2 className="welcome__subtitle">
                    Поможем отыскать курьера по удобной цене
                  </Heading2>
                </strong>
              </div>
            </div>
            <strong>
              <Heading3 className="welcome__losung">
                Срочная <span className="highlighted"> день в день </span>
                доставка
              </Heading3>
            </strong>

            <div className="welcome__row">
              <div className="welcome__tiles">
                <Tile title="Заберем посылку" />
                <Tile title="Вы сами указываете цену!" />
                <Tile title="Соберем товар с пвз" />
                <Tile title="Быстро и безопасно" />
              </div>

              <div className="welcome__mini-form">
                <MiniForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhatWeDeliver
        title="Что мы перевозим?"
        description="Мы предоставляем услуги по перевозке грузов различного размера: от небольших посылок, таких как документы, до коробок и пакетов."
      />
      <HowToUse
        title="Как воспользоваться нашими услугами?"
        description="Наша цель — сделать доставку максимально простой и удобной для вас. Следите за всеми этапами процесса, от оформления заказа до его завершения, и будьте уверены: всё под контролем. Мы ценим ваше время и всегда готовы помочь!"
        step1="После этого ваш заказ попадет в нашу систему и станет доступен курьерам."
        step2="Мы уже ищем для вас курьера! Обычно это занимает не более 20 минут, но если хотите ускорить процесс, предложите немного больше за заказ — и ваш курьер найдется быстрее! 🚀"
        step3="Ваш заказ в процессе выполнения! Курьер уже забирает посылку и доставляет её по указанному адресу. Вы всегда можете отслеживать его маршрут в режиме реального времени, общаться через чат и быть уверены, что всё под контролем"
        step4="Ваш заказ успешно завершён! Мы сделали всё, чтобы доставка прошла быстро и удобно: курьер вовремя забрал посылку и доставил её по назначению. Когда вам снова понадобится доставка — мы всегда готовы помочь."
      />
      <InfoCard />
      <AdditionalService />
      <FAQ />
    </main>
  );
};

export default MainPage;
