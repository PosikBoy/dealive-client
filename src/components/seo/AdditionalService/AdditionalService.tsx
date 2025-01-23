import "./AdditionalService.scss";
import Image from "next/image";
import Link from "next/link";

import Heading2 from "@/components/Ui/Heading2/Heading2";

import cardImage1 from "@/assets/images/cardImage1.png";
import cardImage2 from "@/assets/images/cardImage2.png";
import cardImage3 from "@/assets/images/cardImage3.png";
import cardImage4 from "@/assets/images/cardImage4.png";
import cardImage5 from "@/assets/images/cardImage5.png";
import cardImage6 from "@/assets/images/cardImage6.png";
import cardImage7 from "@/assets/images/cardImage7.png";

const AdditionalService = () => {
  return (
    <section className="additional-info">
      <div className="container">
        <div className="additional-info__body">
          <div className="additional-info__heading">
            <span className="additional-info__legend">
              Дополнительные услуги
            </span>
            <Heading2 color="black">А что еще мы можем сделать?</Heading2>
          </div>
          <div className="additional-info__cards-block">
            <div className="additional-info__cards-column">
              <div className="additional-info__card additional-info__card_1">
                <div className="additional-info__card-image">
                  <Image
                    src={cardImage1}
                    alt="Пункт выдачи заказов"
                    fill={true}
                    quality={60}
                    loading="lazy"
                  />
                </div>
                <div className="additional-info__card-title">
                  Хранение заказов
                </div>
              </div>
              <div className="additional-info__card additional-info__card_2">
                <div className="additional-info__card-image">
                  <Image
                    src={cardImage2}
                    alt="Пункт выдачи заказов"
                    fill={true}
                    quality={60}
                    loading="lazy"
                  />
                </div>
                <div className="additional-info__card-title">Сбор заказов</div>
              </div>
            </div>
            <div className="additional-info__cards-column">
              <div className="additional-info__card additional-info__card_3">
                <div className="additional-info__card-image">
                  <Image
                    src={cardImage3}
                    alt="Пункт выдачи заказов"
                    fill={true}
                    quality={60}
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
                    quality={60}
                    loading="lazy"
                  />
                </div>
                <div className="additional-info__card-title">
                  Осмотрим перед выкупом
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
                    quality={60}
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
                    quality={60}
                    loading="lazy"
                  />
                </div>
                <div className="additional-info__card-title">Выкупим товар</div>
              </div>
            </div>
            <div className="additional-info__cards-column">
              <div className="additional-info__card additional-info__card_7">
                <div className="additional-info__card-image">
                  <Image
                    src={cardImage7}
                    alt="Пункт выдачи заказов"
                    fill={true}
                    quality={60}
                    loading="lazy"
                  />
                </div>
                <div className="additional-info__card-title">
                  И многое другое
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
    </section>
  );
};

export default AdditionalService;
