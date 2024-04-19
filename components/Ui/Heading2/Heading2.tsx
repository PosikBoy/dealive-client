import React, { ReactNode } from "react";
import styles from "./Heading2.module.scss";

type Heading2Props = {
  children: ReactNode;
  className?: string;
};

const Heading2: React.FC<Heading2Props> = ({ children, className = "" }) => {
  return <h2 className={styles.heading + (className ? " " + className : " ")}>{children}</h2>;
};

export default Heading2;
