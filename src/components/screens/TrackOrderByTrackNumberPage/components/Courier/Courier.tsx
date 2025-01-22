import React from "react";
import styles from "./Courier.module.scss";
import Heading3 from "@/components/Ui/Heading3/Heading3";

type Props = {
  courier: {
    name: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
  };
};

const Courier = (props: Props) => {
  const { name, secondName, lastName, phoneNumber } = props.courier;
  return (
    <div className={styles.courier}>
      <Heading3 className={styles.heading} color="black">
        Курьер
      </Heading3>
      <a
        href={`tel:${phoneNumber.replace(/\s/g, "")}`}
        className={styles.courier__body}
      >
        <div className={styles.courier__name}>
          {name} {secondName}
        </div>
        <div className={styles.courier__phoneNumber}>{phoneNumber}</div>
      </a>
    </div>
  );
};

export default Courier;
