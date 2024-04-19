import React, { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ children, className= "" }) => {
  return (
    <h1 className={styles.heading + (className ?" " + className : " ")}>
      {children}
    </h1>
  );
};

export default Heading;
