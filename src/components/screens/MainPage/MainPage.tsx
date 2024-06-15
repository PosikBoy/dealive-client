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
import Image from "next/image";

// imports for additional info cards
import cardImage1 from "@/assets/images/cardImage1.png";
import cardImage2 from "@/assets/images/cardImage2.png";
import cardImage3 from "@/assets/images/cardImage3.png";
import cardImage4 from "@/assets/images/cardImage4.png";
import cardImage5 from "@/assets/images/cardImage5.png";
import cardImage6 from "@/assets/images/cardImage6.png";
import cardImage7 from "@/assets/images/cardImage7.png";
import Link from "next/link";

const MainPage: FC = () => {
  return (
    <div className="pageContent">
      <div className="welcome">
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
                    быстро найдем<span className="highlighted"> вам</span>{" "}
                    курьера!
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
            <div className="info__indicators">
              <div className="info__indicator">
                <div className="info__indicator-value">100+</div>
                <div className="info__indicator-title">Курьеров онлайн</div>
              </div>
              <div className="info__indicator">
                <div className="info__indicator-value">1300+</div>
                <div className="info__indicator-title">Довольных клиентов</div>
              </div>
              <div className="info__indicator">
                <div className="info__indicator-value">25/7</div>
                <div className="info__indicator-title">
                  Ищем курьеров для вас
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="container">
          <div className="additional-info__body">
            <div className="additional-info__heading">
              <span className="additional-info__legend">
                Дополнительные услуги
              </span>
              <div className="additional-info__title">
                А что еще мы можем сделать?
              </div>
            </div>
            <div className="additional-info__cards-block">
              <div className="additional-info__cards-column">
                <div className="additional-info__card additional-info__card_1">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage1}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Сбор заказов
                  </div>
                </div>
                <div className="additional-info__card additional-info__card_2">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage2}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Хранение заказов
                  </div>
                </div>
              </div>
              <div className="additional-info__cards-column">
                <div className="additional-info__card additional-info__card_3">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage3}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Заберем ваши посылки
                  </div>
                </div>
                <div className="additional-info__card additional-info__card_4">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage4}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Осмотр перед выкупом
                  </div>
                </div>
              </div>
              <div className="additional-info__cards-column">
                <div className="additional-info__card additional-info__card_5">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage5}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Оформим доверенность
                  </div>
                </div>
                <div className="additional-info__card additional-info__card_6">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage6}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    Выкуп товара
                  </div>
                </div>
              </div>
              <div className="additional-info__cards-column">
                <div className="additional-info__card additional-info__card_7">
                  <div className="additional-info__card-image">
                    <Image
                      src={cardImage7}
                      alt="Пункт выдачи заказов"
                      fill={true}
                      quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div className="additional-info__card-title">
                    И многое другое по договоренности с курьером
                  </div>
                </div>
              </div>
            </div>
            <div className="additional-info__text">
              <p>
                Для дополнительных услуг просто укажите в комментарии к адресу
                ваше поручение в{" "}
                <Link
                  className="additional-info__order-link"
                  href="/order"
                  title="Оформить заказ"
                >
                  форме заказа
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
