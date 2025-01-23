import { FC, ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Heading3 from "../../ui/Heading3/Heading3";

import styles from "./ModalWindow.module.scss";

interface IModalWindow {
  children: ReactNode;
  title?: string;
  callback: () => void;
  className?: string;
}

const ModalWindow: FC<IModalWindow> = ({
  children,
  title = "Информация",
  callback,
  className,
}) => {
  const [portalElement, setPortalElement] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    setPortalElement(element);
    document.body.classList.add("modal-open");
    return () => {
      document.body.removeChild(element);
      document.body.classList.remove("modal-open");
    };
  }, []);

  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.modalWindow} onClick={callback}>
        <div
          className={
            styles.modalWindow__body + (className ? " " + className : "")
          }
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.modalWindow__heading}>
            <Heading3 color="black" className={styles.modalWindow__title}>
              {title}
            </Heading3>
            <div className={styles.modalWindow__close} onClick={callback}></div>
          </div>
          <div className={styles.modalWindow__info}>{children}</div>
        </div>
      </div>
    </>,
    portalElement
  );
};

export default ModalWindow;
