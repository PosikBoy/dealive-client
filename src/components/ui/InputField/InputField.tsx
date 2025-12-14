import { InputHTMLAttributes, Ref } from "react";

import clsx from "clsx";
import styles from "./InputField.module.scss";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  className?: string;
  required?: boolean;
  error?: any;
  color?: "default" | "white";
  name?: string;
  ref?: Ref<HTMLInputElement>;
}

const InputField = (props: IField) => {
  const {
    type = "text",
    placeholder,
    required = false,
    error,
    autoComplete,
    color = "default",
    className,
    ref,
    name = "Поле ввода",
    ...rest
  } = props;

  const isErrored = Boolean(error?.message);
  const placeholderText = placeholder + (required ? "*" : "");

  return (
    <div
      className={clsx(
        styles.field,
        className,
        isErrored && styles.error,
        styles[color]
      )}
    >
      <label>
        <input
          className={clsx(
            styles.field__input,
            isErrored && styles.error,
            styles[color]
          )}
          placeholder=" "
          name={name}
          type={type}
          ref={ref}
          autoComplete={autoComplete}
          required={required}
          {...rest}
        />
        <span className={clsx(styles.field__placeholder)}>
          {placeholderText}
        </span>
        {isErrored && (
          <div className={styles.field__error}>
            {error?.message || "Ошибка"}
          </div>
        )}
      </label>
    </div>
  );
};

export default InputField;
