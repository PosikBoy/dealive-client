import styles from "./Tile.module.scss";
import { FC } from "react";
interface ITileProps {
  title: string;
}
const Tile: FC<ITileProps> = ({ title }) => {
  return <div className={styles.tile}>{title}</div>;
};

export default Tile;
