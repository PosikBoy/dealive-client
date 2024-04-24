import styles from "./InputField.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
  required?: boolean;
  error?: any;
}

const InputField = forwardRef<HTMLInputElement, IField>(
  ({ type = "text", placeholder, required = false, error, ...rest }, ref) => {
    return (
      <>
        <div className={styles.field}>
          <label>
            <input
              className={
                styles.field__input +
                " " +
                (error?.message ? " " + styles.error : "")
              }
              placeholder=" "
              type={type}
              ref={ref}
              {...rest}
            />
            <span
              className={
                styles.field__placeholder +
                (error?.message ? " " + styles.error : "")
              }
            >
              {placeholder + (required ? "*" : "")}
            </span>
            {error && (
              <div className={styles.field__error}>
                {error.message || "error"}
              </div>
            )}
          </label>
        </div>
      </>
    );
  }
);
export default InputField;
