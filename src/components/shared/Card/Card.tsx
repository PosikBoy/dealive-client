import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./Card.module.scss";

import Heading3 from "../../ui/Heading3/Heading3";
interface ICardProps {
  img: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  imageDescription: string;
  reversed?: boolean;
  transparent?: boolean;
}

const Card: FC<ICardProps> = ({
  img,
  alt,
  title,
  subtitle,
  imageDescription,
  reversed = false,
  transparent = false,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        transparent && styles.transparent,
        reversed && styles.reversed
      )}
    >
      <div className={styles.card__image}>
        <Image src={img} alt={alt} fill={true} quality={60} loading="lazy" />
      </div>
      <div className={styles.card__text}>
        <Heading3>{title}</Heading3>
        <div className={styles.card__subtitle}>{subtitle}</div>
        <div className={styles.card__imageDescription}>{imageDescription}</div>
      </div>
    </div>
  );
};

export default Card;
