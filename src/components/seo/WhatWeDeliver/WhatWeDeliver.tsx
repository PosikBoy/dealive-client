import Image from "next/image";

import Heading2 from "@/components/Ui/Heading2/Heading2";

import wwd1 from "@/assets/images/wwd1.png";
import wwd10 from "@/assets/images/wwd10.png";
import wwd11 from "@/assets/images/wwd11.png";
import wwd2 from "@/assets/images/wwd2.png";
import wwd3 from "@/assets/images/wwd3.png";
import wwd4 from "@/assets/images/wwd4.png";
import wwd5 from "@/assets/images/wwd5.png";
import wwd6 from "@/assets/images/wwd6.png";
import wwd7 from "@/assets/images/wwd7.png";
import wwd8 from "@/assets/images/wwd8.png";
import wwd9 from "@/assets/images/wwd9.png";
import "./WhatWeDeliver.scss";

interface IProps {
  title: string;
  description: string;
}

const WhatWeDeliver = (props: IProps) => {
  const { title, description } = props;
  return (
    <section className="what-we-deliver wwd">
      <div className="container">
        <div className="wwd__grid">
          <div className="wwd__item wwd__item_1">
            <Image src={wwd1} alt="Фото цветов" quality={80} loading="lazy" />
            <p className="wwd__hint">Цветы</p>
          </div>
          <div className="wwd__item wwd__item_2">
            <Image
              src={wwd2}
              alt="Маленькая коробочка"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Коробочки</p>
          </div>
          <div className="wwd__item wwd__item_text wwd__item_3">
            <Heading2>{title}</Heading2>
            <p>{description}</p>
          </div>

          <div className="wwd__item wwd__item_4">
            <Image
              src={wwd4}
              alt="Папка с документами"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Документы</p>
          </div>
          <div className="wwd__item wwd__item_5">
            <Image
              src={wwd5}
              alt="Фото кроссовок"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Обувь</p>
          </div>
          <div className="wwd__item wwd__item_6">
            <Image src={wwd6} alt="Фото тортика" quality={80} loading="lazy" />
            <p className="wwd__hint">Тортик</p>
          </div>
          <div className="wwd__item wwd__item_7">
            <Image src={wwd7} alt="Коробка" quality={80} loading="lazy" />
            <p className="wwd__hint">Коробка</p>
          </div>

          <div className="wwd__item wwd__item_8">
            <Image src={wwd8} alt="Фото тортика" quality={80} loading="lazy" />
            <p className="wwd__hint">Тортик</p>
          </div>
          <div className="wwd__item wwd__item_10">
            <Image
              src={wwd9}
              alt="Бумажный пакет фото"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Бумажный пакет</p>
          </div>

          <div className="wwd__item wwd__item_text wwd__item_9">
            <p>
              Обращаем ваше внимание, что мы строго соблюдаем законодательство
              Российской Федерации и не осуществляем транспортировку товаров,
              запрещённых к обороту на территории РФ.
            </p>
          </div>

          <div className="wwd__item wwd__item_12">
            <Image src={wwd3} alt="Фото цветов" quality={80} loading="lazy" />
            <p className="wwd__hint">Цветы</p>
          </div>
          <div className="wwd__item wwd__item_13">
            <Image
              src={wwd10}
              alt="Фото бумажного пакета"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Маленький пакет</p>
          </div>
          <div className="wwd__item wwd__item_14">
            <Image
              src={wwd11}
              alt="Новогодний подарок"
              quality={80}
              loading="lazy"
            />
            <p className="wwd__hint">Новогодний подарок</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
