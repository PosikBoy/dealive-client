import React, { useEffect, useState } from "react";

import styles from "./Brightness.module.scss";
type Props = {
  onClick: () => void;
};

const Brightness = ({ onClick }: Props) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <div
      className={styles.brightness + (active ? " " + styles.active : "")}
      onClick={() => {
        setActive(false);
        onClick();
      }}
    ></div>
  );
};

export default Brightness;
