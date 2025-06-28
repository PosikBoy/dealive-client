import courierImage from "@/assets/images/courier.jpg";
import Container from "@/components/layout/Container/Container";
import Card from "@/components/shared/Card/Card";

import clsx from "clsx";
import { FC } from "react";

import styles from "./InfoCard.module.scss";

interface IProps {
  className?: string;
}

const InfoCard: FC<IProps> = ({ className }) => {
  return (
    <section className={clsx(styles.info, className)}>
      <Container>
        <Card
          className={styles.info__content}
          img={courierImage}
          alt="Изображение подарка"
          title="Идеальное решение для тех, кто ценит свое время, и ждать просто нет возможности! "
          subtitle="Предлагаем вашему вниманию уникальный сервис доставки, который поможет решить любые ваши задачи! Наши профессиональные курьеры с радостью возьмутся за выполнение любого поручения, от прогулки с домашним питомцем до осмотра квартиры. "
          imageDescription="На фото курьер Евгений"
          reversed={true}
        />
      </Container>
    </section>
  );
};

export default InfoCard;
