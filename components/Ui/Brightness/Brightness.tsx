import React from "react";
import styles from "./Brightness.module.scss";
type Props = {
  onClick: () => void;
};

const Brightness = ({ onClick }: Props) => {
  return <div className={styles.brightness} onClick={onClick}></div>;
};

export default Brightness;
