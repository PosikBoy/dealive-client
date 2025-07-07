import { FC, useCallback, useState } from "react";
import {
  FieldError,
  UseFormClearErrors,
  UseFormSetValue,
} from "react-hook-form";

import Button from "@/components/ui/Button/Button";

import { IOrderPrices } from "@/types/models/order";

import PriceInfoModal from "../ModalWindows/PriceInfoModal";

import Heading3 from "@/components/ui/Heading3/Heading3";
import { IOrderCreateDto } from "@/types/dto/order.dto";
import { getTariffClassName } from "@/utils/getTariffData";
import clsx from "clsx";
import Image from "next/image";
import styles from "./SendOrder.module.scss";

interface ISendOrderProps {
  prices: IOrderPrices;
  setValue: UseFormSetValue<IOrderCreateDto>;
  loading: boolean;
  price: number;
  error: FieldError | undefined;
  clearErrors: UseFormClearErrors<IOrderCreateDto>;
}

const SendOrder: FC<ISendOrderProps> = ({
  prices,
  loading,
  setValue,
  price,
  error,
  clearErrors,
}) => {
  const [isPriceInfoModalOpen, setIsPriceInfoModalOpen] = useState(false);
  const [activeTariff, setActiveTariff] = useState("");
  const onClick = useCallback(
    (name: string) => {
      setActiveTariff(name);
      clearErrors("price");
      setValue(
        "price",
        prices.options.find((o) => o.label === name)?.price || 0
      );
    },
    [prices.options]
  );

  return (
    <div className={styles.sendOrder}>
      <Heading3 color="black">
        Стоимость доставки{" "}
        <button
          type="button"
          onClick={() => setIsPriceInfoModalOpen(!isPriceInfoModalOpen)}
        >
          <Image src="/question-icon.svg" width={25} height={25} alt="icon" />
        </button>
      </Heading3>
      {prices.options.length === 0 && (
        <p className={styles.sendOrder__description}>
          Начните заполнять форму, чтобы мы смогли предложить вам оптимальную
          цену доставки
        </p>
      )}
      <div className={styles.sendOrder__tariffs}>
        {prices.options.length > 0 ? (
          prices.options.map((option) => (
            <button
              className={clsx(
                styles.sendOrder__tariff,
                option.label === activeTariff && styles.active
              )}
              key={option.label}
              type="button"
              onClick={() => onClick(option.label)}
            >
              <span
                className={clsx(
                  styles.sendOrder__tariffName,
                  styles[getTariffClassName(option.label).className]
                )}
              >
                {option.label}
              </span>
              <div className={styles.sendOrder__tariffPrice}>
                {option.price} ₽
              </div>
              <div className={styles.sendOrder__tariffDescription}>
                {getTariffClassName(option.label).description}
              </div>
            </button>
          ))
        ) : (
          <div className={styles.sendOrder__tariff}>
            <div
              className={clsx(styles.sendOrder__tariffName, styles.standart)}
            >
              Стандарт
            </div>
            <div className={styles.sendOrder__tariffPrice}>
              {prices.basePrice}
            </div>
          </div>
        )}
      </div>

      <div className={styles.sendOrder__payment}>
        Оплата производится наличными курьеру на одном из адресов
      </div>
      <div className={styles.sendOrder__agreement}>
        Отправляя заказ нам, вы соглашаетесь с
        <a href="/privacy.docx" className={styles.agreementLink}>
          политикой обработки персональных данных
        </a>
      </div>
      {error && <div className={styles.sendOrder__error}>{error.message}</div>}
      <div className={styles.sendOrder__button}>
        <Button type="submit" disabled={loading}>
          Отправить заказ {price && " • " + price + " ₽"}
        </Button>
      </div>
      {isPriceInfoModalOpen && (
        <PriceInfoModal callback={setIsPriceInfoModalOpen} />
      )}
    </div>
  );
};

export default SendOrder;
