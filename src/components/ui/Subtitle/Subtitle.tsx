import React, { ReactNode } from "react";

import styles from "./Subtitle.module.scss";

type SubtitleProps = {
  children: ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};

export default Subtitle;
