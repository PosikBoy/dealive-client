import "./MainPage.css";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import MiniForm from "./MiniForm/MiniForm";
import Heading from "@/components/Ui/Heading/Heading";
import Subtitle from "@/components/Ui/Subtitle/Subtitle";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";

const MainPage: FC = () => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page__content">
          <div className="main-page__block">
            <div className="main-page__offer">
              <Heading className="main-page__title">
                Срочная доставка <span className="highlighted">в Москве</span>
              </Heading>
              <Heading2 className="main-page__subtitle">
                быстро найдем<span className="highlighted"> вам</span> курьера!
              </Heading2>
            </div>
            <MiniForm />
          </div>
          <Heading3 className="main-page__title">
            Живи - а доставку<span className="highlighted"> оставь </span>нам
          </Heading3>
          <div className="main-page__tiles">
            <Tile title="Доставка по городу" />
            <Tile title="Выкуп и отправка" />
            <Tile title="Сбор ПВЗ" />
            <Tile title="И другие поручения" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
