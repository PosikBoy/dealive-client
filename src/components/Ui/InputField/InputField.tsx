import styles from "./InputField.module.scss";
import { forwardRef, InputHTMLAttributes } from "react";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder: string;
  className?: string;
  required?: boolean;
  error?: any;
  color?: "default" | "white";
}

const InputField = forwardRef<HTMLInputElement, IField>(
  (
    {
      type = "text",
      placeholder,
      required = false,
      error,
      autoComplete,
      color,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <>
        <div className={styles.field + " " + (className || "")}>
          <label>
            <input
              className={
                styles.field__input +
                " " +
                (error?.message ? " " + styles.error : "") +
                (color === "white" ? " " + styles.white : "")
              }
              placeholder=" "
              type={type}
              ref={ref}
              autoComplete={autoComplete}
              {...rest}
            />
            <span
              className={
                styles.field__placeholder +
                (error?.message ? " " + styles.error : "")
              }
              style={{
                color: color === "white" ? "var(--white)" : "var(--black)",
                backgroundColor:
                  color === "white" ? "#00000000" : "var(--white)",
              }}
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
