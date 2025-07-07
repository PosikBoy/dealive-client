import React, { ReactNode } from "react";

import clsx from "clsx";
import styles from "./Subtitle.module.scss";

type SubtitleProps = {
  children: ReactNode;
  className?: string;
  color?: "black" | "white";
};

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className,
  color = "white",
}) => {
  return (
    <p className={clsx(styles.subtitle, className, styles[color])}>
      {children}
    </p>
  );
};

export default Subtitle;
