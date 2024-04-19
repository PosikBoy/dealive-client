import React, { ReactNode } from "react";
import styles from "./Heading3.module.scss";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading3: React.FC<HeadingProps> = ({ children, className }) => {
  return <h3 className={styles.heading + (className ? " " + className : " ")}>{children}</h3>;
};

export default Heading3;
