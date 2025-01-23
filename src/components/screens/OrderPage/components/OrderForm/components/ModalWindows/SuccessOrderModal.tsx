import React, { FC } from "react";

import ModalWindow from "@/components/Ui/ModalWindow/ModalWindow";

import styles from "./ModalWindows.module.scss";

type Props = {
  callback: Function;
};

const SuccessOrderModal: FC<Props> = ({ callback }) => {
  return (
    <ModalWindow
      callback={() => callback(false)}
      title="Заказ отправлен!"
      className={styles.modalWindow}
    >
      <p>
        Спасибо за заказ! Скоро мы свяжемся по номеру, указанному в первом
        адресе или по номеру, указанному в вашем личном кабинете
      </p>
    </ModalWindow>
  );
};

export default SuccessOrderModal;
