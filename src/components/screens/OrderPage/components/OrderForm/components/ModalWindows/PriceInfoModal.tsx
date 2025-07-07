import { FC } from "react";

import ModalWindow from "@/components/shared/ModalWindow/ModalWindow";

import styles from "./ModalWindows.module.scss";

type Props = {
  callback: Function;
};

const PriceInfoModal: FC<Props> = ({ callback }) => {
  return (
    <ModalWindow
      title="О цене"
      callback={() => callback(false)}
      className={styles.modalWindow}
    >
      <div className={styles.modalWindow__content}>
        <p>
          Вы контролируете стоимость доставки! Наш сервис предоставляет вам
          уникальную возможность самостоятельно установить справедливую цену,
          которая устроит вас и наших опытных курьеров.
        </p>

        <p>
          Помните, что профессиональные курьеры заслуживают достойной оплаты за
          качественную и оперативную работу. Предложив курьерам достаточно
          привлекательную ставку, вы гарантированно получите быструю и надежную
          доставку вашего заказа.
        </p>

        <p>
          Определите справедливую цену и обеспечьте себе максимально выгодные
          условия доставки!
        </p>
      </div>
    </ModalWindow>
  );
};

export default PriceInfoModal;
