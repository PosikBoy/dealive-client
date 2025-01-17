import styles from "./TextArea.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  type?: string;
  placeholder: string;
  error?: any;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ type = "text", placeholder, error, ...rest }, ref) => {
    return (
      <>
        <div className={styles.field}>
          <textarea
            cols={1000}
            rows={5}
            placeholder=""
            className={
              styles.field__input +
              " " +
              (error?.message ? " " + styles.error : "")
            }
            ref={ref}
            {...rest}
          />
          <span className={styles.field__placeholder}>{placeholder}</span>
        </div>
        {error && <span className={styles.field__error}>{error.message}</span>}
      </>
    );
  }
);
export default TextArea;
