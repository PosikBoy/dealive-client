import clsx from "clsx";
import React, { ReactNode } from "react";

import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  color?: "black" | "white";
};

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  color = "white",
}) => {
  return (
    <h1
      className={clsx(styles.heading, className)}
      style={{ color: color === "black" ? "var(--black)" : "var(--white)" }}
    >
      {children}
    </h1>
  );
};

export default Heading;
