import "./MainPage.scss";
import Tile from "@/components/Ui/Tile/Tile";
import { FC } from "react";
import MiniForm from "./MiniForm/MiniForm";
import Heading from "@/components/Ui/Heading/Heading";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import Card from "@/components/Ui/Card/Card";
import dealiveryGuyImage from "@/assets/images/dealiveryGuy1.png";
import giftImage from "@/assets/images/gift.png";

const MainPage: FC = () => {
  return (
    <div className="pageContent">
      <div className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__block">
              <div className="welcome__offer">
                <Heading className="welcome__title">
                  Срочная доставка <span className="highlighted">в Москве</span>
                </Heading>
                <Heading2 className="welcome__subtitle">
                  быстро найдем<span className="highlighted"> вам</span>{" "}
                  курьера!
                </Heading2>
              </div>
              <div className="welcome__mini-form">
                <MiniForm />
              </div>
            </div>
            <Heading3 className="welcome__losung">
              Живи - а доставку<span className="highlighted"> оставь </span>нам
            </Heading3>
            <div className="welcome__tiles">
              <Tile title="Доставка по городу" />
              <Tile title="Выкуп и отправка" />
              <Tile title="Сбор ПВЗ" />
              <Tile title="И другие поручения" />
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="container">
          <div className="info__content">
            <Heading2 className="info__title">А чем мы занимаемся?</Heading2>

            <Card
              img={dealiveryGuyImage}
              alt="Изображение курьера"
              title="Идеальное решение для тех, кто ценит свое время и ждать просто нет возможности! "
              subtitle="Оставьте заявку прямо сейчас и убедитесь, что срочная доставка может быть действительно быстрой, надежной и клиентоориентированной!"
              imageDescription="На фото наши курьеры"
            />
            <Card
              img={giftImage}
              alt="Изображение подарка"
              title="Доставляем что угодно и выполняем почти любые поручения!"
              subtitle="Предлагаем вашему вниманию уникальный сервис доставки, который поможет решить любые ваши задачи! Наши профессиональные курьеры с радостью возьмутся за выполнение любого поручения, от прогулки с домашним питомцем до осмотра квартиры. "
              imageDescription="На фото то, что мы перевозим"
              reversed={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
