import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from "./Heading3.module.scss";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  color?: "black" | "white";
};

const Heading3: React.FC<HeadingProps> = ({
  children,
  className,
  color = "white",
}) => {
  return (
    <h3
      className={clsx(styles.heading3, className)}
      style={{ color: color === "black" ? "var(--black)" : "var(--white)" }}
    >
      {children}
    </h3>
  );
};

export default Heading3;
