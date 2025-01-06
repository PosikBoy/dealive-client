import Image from "next/image";

import wwd1 from "@/assets/images/wwd1.png";
import wwd2 from "@/assets/images/wwd2.png";
import wwd3 from "@/assets/images/wwd3.png";
import wwd4 from "@/assets/images/wwd4.png";
import wwd5 from "@/assets/images/wwd5.png";
import wwd6 from "@/assets/images/wwd6.png";
import wwd7 from "@/assets/images/wwd7.png";
import wwd8 from "@/assets/images/wwd8.png";
import wwd9 from "@/assets/images/wwd9.png";

import Heading2 from "@/components/Ui/Heading2/Heading2";
import "./WhatWeDeliver.scss";

const WhatWeDeliver = () => {
  return (
    <section className="what-we-deliver wwd">
      <div className="container">
        <div className="wwd__grid">
          <div className="wwd__item wwd__item_1">
            <Image
              src={wwd1}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_2">
            <Image
              src={wwd2}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_text wwd__item_3">
            <Heading2>Что мы перевозим?</Heading2>
            <p>
              Мы готовы забрать и доставить документы, папки, бумаги, файлы,
              конверты и другие виды документов. Но кроме этого, мы беремся за
              доставку цветов, тортов, обуви, одежды, коробок и пакетов.
            </p>
          </div>

          <div className="wwd__item wwd__item_4">
            <Image
              src={wwd4}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_5">
            <Image
              src={wwd5}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_6">
            <Image
              src={wwd6}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_7">
            <Image
              src={wwd7}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>

          <div className="wwd__item wwd__item_8">
            <Image
              src={wwd8}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_text wwd__item_9">
            <p>
              Обращаем ваше внимание, что мы строго соблюдаем законодательство
              Российской Федерации и не осуществляем транспортировку товаров,
              запрещённых к обороту на территории РФ.
            </p>
          </div>
          <div className="wwd__item wwd__item_10">
            <Image
              src={wwd9}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_11"></div>

          <div className="wwd__item wwd__item_12">
            <Image
              src={wwd3}
              alt="Пункт выдачи заказов"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="wwd__item wwd__item_13"></div>
          <div className="wwd__item wwd__item_14"></div>
          <div className="wwd__item wwd__item_15"></div>
          <div className="wwd__item wwd__item_16"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
