import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./TextArea.module.scss";

interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
  error?: { message?: string } | undefined;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ placeholder, error, ...rest }, ref) => {
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
  },
);
export default TextArea;
