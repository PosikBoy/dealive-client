import clsx from "clsx";
import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

type Props = {
  classname?: string;
  children: ReactNode;
};

const Container: FC<Props> = ({ classname, children }) => {
  return <div className={clsx(styles.container, classname)}>{children}</div>;
};

export default Container;
