import Image, { StaticImageData } from "next/image";
import React from "react";

import Heading3 from "@/components/Ui/Heading3/Heading3";

import styles from "./Status.module.scss";

import CheckIcon from "@/assets/icons/check.png";
import ClockIcon from "@/assets/icons/clock.png";
import CourierIcon from "@/assets/icons/courier.png";
import CourierFoundIcon from "@/assets/icons/found.png";

type Props = {
  statusId: number;
};

interface StatusInfo {
  status: string;
  icon: StaticImageData;
}

const Status = (props: Props) => {
  const { statusId } = props;

  const orderStatusMap: Record<number, StatusInfo> = {
    2: { status: "Новый заказ", icon: ClockIcon },
    3: { status: "Ищем курьера", icon: CourierFoundIcon },
    4: { status: "В пути", icon: CourierIcon },
    5: { status: "Заказ выполнен", icon: CheckIcon },
  };

  const statusEntries = Object.entries(orderStatusMap);

  return (
    <>
      <div className={styles.status}>
        <div className={styles.status__body}>
          <Heading3 className={styles.status__title} color="black">
            Статус заказа
          </Heading3>

          <ul className={styles.status__list}>
            {statusEntries.map(([statusIndex, statusInfo]) => {
              const isActive =
                statusId === Number(statusIndex) ? styles.active : "";
              return (
                <li
                  className={`${styles.status__item} ${styles.statusItem} ${isActive}`}
                  key={statusIndex}
                >
                  <div className={styles.statusItem__icon}>
                    <Image
                      src={statusInfo.icon}
                      alt={statusInfo.status}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className={`${styles.statusItem__text} ${isActive}`}>
                    {statusInfo.status}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Status;
