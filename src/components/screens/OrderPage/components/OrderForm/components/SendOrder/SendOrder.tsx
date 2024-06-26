import InputField from "@/components/Ui/InputField/InputField";
import React, { FC, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import styles from "./SendOrder.module.scss";
import Button from "@/components/Ui/Button/Button";
import Image from "next/image";
import PriceInfoModal from "../ModalWindows/PriceInfoModal";
import { IOrder } from "@/types/order.interface";

interface ISendOrderProps {
  register: UseFormRegister<IOrder>;
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
            {...register("info.price", {
              required: "Укажите цену",
              pattern: {
                value: /^\d+$/,
                message: "Только числа",
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
