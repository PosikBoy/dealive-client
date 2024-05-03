import styles from "./TextArea.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  type?: string;
  placeholder: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ type = "text", placeholder, ...rest }, ref) => {
    return (
      <>
        <div className={styles.field}>
          <textarea
            cols={1000}
            rows={5}
            placeholder=""
            className={styles.field__input}
            ref={ref}
            {...rest}
          />
          {/* <div className={styles.field__outline}></div> */}
          <span className={styles.field__placeholder}>{placeholder}</span>
        </div>
      </>
    );
  }
);
export default TextArea;
