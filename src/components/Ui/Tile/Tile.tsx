import { FC } from "react";

import styles from "./Tile.module.scss";
interface ITileProps {
  title: string;
}
const Tile: FC<ITileProps> = ({ title }) => {
  return <div className={styles.tile}>{title}</div>;
};

export default Tile;
