import { FC } from "react";

import ModalWindow from "@/components/shared/ModalWindow/ModalWindow";

import TrackLink from "@/components/shared/TrackLink/TrackLink";
import { IOrder } from "@/types/models/order";
import styles from "./ModalWindows.module.scss";

type Props = {
  callback: () => void;
  order: IOrder;
};

const SuccessOrderModal: FC<Props> = ({ callback, order }) => {
  return (
    <ModalWindow
      callback={callback}
      title="Заказ отправлен!"
      className={styles.modalWindow}
    >
      <p className={styles.orderText}>
        Спасибо за заказ! Курьер может позвонить на номер, указанный в личном
        кабинете или в первом адресе.
      </p>
      <p className={styles.orderText}>
        Подготовьте к оплате {order.price} ₽, можете оплатить курьеру на любом
        адресе.
      </p>
      <p className={styles.orderText}>
        Вы можете отслеживать свой заказ перейдя на главную страницу или по
        ссылке ниже.
      </p>
      <TrackLink trackNumber={order.trackNumber} code={order.code} />
    </ModalWindow>
  );
};

export default SuccessOrderModal;
