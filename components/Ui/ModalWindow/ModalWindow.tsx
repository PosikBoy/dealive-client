import { FC, ReactNode } from "react";
import styles from "./ModalWindow.module.scss";
import Heading3 from "../Heading3/Heading3";
import Brightness from "../Brightness/Brightness";

interface IModalWindow {
  children: ReactNode;
  title: string;
  callback: () => void;
  className: string;
}

const ModalWindow: FC<IModalWindow> = ({
  children,
  title = "Информация",
  callback,
  className,
}) => {
  return (
    <>
      <Brightness onClick={callback}></Brightness>
      <div className={styles.modalWindow + (className ? " " + className : "")}>
        <div className="container">
          <div className={styles.modalWindow__body}>
            <div className={styles.modalWindow__heading}>
              <Heading3 className={styles.modalWindow__title}>{title}</Heading3>
              <div
                className={styles.modalWindow__close}
                onClick={callback}
              ></div>
            </div>
            <div className={styles.modalWindow__info}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
