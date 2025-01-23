import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from "./Heading2.module.scss";

type Heading2Props = {
  children: ReactNode;
  className?: string;
  color?: "black" | "white";
};

const Heading2: React.FC<Heading2Props> = ({
  children,
  className = "",
  color = "white",
}) => {
  return (
    <h2
      className={clsx(className, styles.heading2)}
      style={{ color: color === "black" ? "var(--black)" : "var(--white)" }}
    >
      {children}
    </h2>
  );
};

export default Heading2;
