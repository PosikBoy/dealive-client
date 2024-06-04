import Image, { StaticImageData } from "next/image";
import styles from "./Card.module.scss";
import { FC } from "react";
interface ICardProps {
  img: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  imageDescription: string;
  reversed?: boolean;
}

const Card: FC<ICardProps> = ({
  img,
  alt,
  title,
  subtitle,
  imageDescription,
  reversed = false,
}) => {
  return (
    <div className={`${styles.card} ${reversed ? styles.reversed : ""}`}>
      <div className={styles.card__image}>
        <Image src={img} alt={alt} fill={true} quality={100} loading="lazy" />
      </div>
      <div className={styles.card__text}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__subtitle}>{subtitle}</div>
        <div className={styles.card__imageDescription}>{imageDescription}</div>
      </div>
    </div>
  );
};

export default Card;
