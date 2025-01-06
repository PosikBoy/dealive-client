import "./DocumentsDelivery.scss";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import MiniForm from "./components/MiniForm/MiniForm";
import Heading from "@/components/Ui/Heading/Heading";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";

import HowToUse from "./components/HowToUse/HowToUse";
import AdditionalService from "./components/AdditionalService/AdditionalService";
import WhatWeDeliver from "./components/WhatWeDeliver/WhatWeDeliver";

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
      <HowToUse />
      <AdditionalService />
      <WhatWeDeliver />
    </main>
  );
};

export default DocumentsDeliveryPage;
