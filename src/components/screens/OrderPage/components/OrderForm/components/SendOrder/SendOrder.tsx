import InputField from "@/components/Ui/InputField/InputField";
import React, { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./SendOrder.module.scss";
import Button from "@/components/Ui/Button/Button";
import Image from "next/image";
import PriceInfoModal from "../ModalWindows/PriceInfoModal";
import { IOrderCreateDto } from "@/types/order.interface";

interface ISendOrderProps {
  register: UseFormRegister<IOrderCreateDto>;
  error: any;
}

const SendOrder: FC<ISendOrderProps> = ({ register, error }) => {
  const [isPriceInfoModalOpen, setIsPriceInfoModalOpen] = useState(false);
  return (
    <div className={styles.sendOrder}>
      <p className={styles.sendOrder__title}>Предложите цену</p>
      <div className={styles.sendOrder__price}>
        <div className={styles.sendOrder__priceField}>
          <InputField
            type="text"
            placeholder="Предлагаемая цена"
            required
            {...register("price", {
              required: "Укажите цену",
              pattern: {
                value: /^\d+$/,
                message: "Только числа",
              },
              min: {
                value: 1,
                message: "Цена не может быть меньше 1",
              },
              max: {
                value: 100000,
                message: "Цена не может превышать 100000",
              },
            })}
            error={error}
          />
        </div>
        <div className={styles.sendOrder__priceInfo}>
          <button
            type="button"
            onClick={() => setIsPriceInfoModalOpen(!isPriceInfoModalOpen)}
          >
            <Image src="/question-icon.svg" width={25} height={25} alt="icon" />
          </button>
        </div>
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
      <div className={styles.sendOrder__button}>
        <Button type="submit">Отправить заказ</Button>
      </div>
      {isPriceInfoModalOpen && (
        <PriceInfoModal callback={setIsPriceInfoModalOpen} />
      )}
    </div>
  );
};

export default SendOrder;
