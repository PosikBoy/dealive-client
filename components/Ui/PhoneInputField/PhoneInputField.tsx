import styles from "./PhoneInputField.module.scss";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface IPhoneField extends InputHTMLAttributes<HTMLInputElement> {
  onChange: any;
  error: any;
  placeholder: string;
  required?: boolean;
  // error?: any;
  // name: string;
  // setValue: (name: any, value: any) => void;
}

const PhoneInputField = forwardRef<HTMLInputElement, IPhoneField>(
  ({ onChange, error, placeholder, required, ...rest }, ref) => {
    const phoneChangeHandler = (e: any) => {
      //React.ChangeEvent<HTMLInputElement>
      const regex = /[0-9]|\+/;
      let value = e.target.value;
      console.log(e);
      if (e.nativeEvent.data === null) {
        onChange(value);
        return;
      }

      if (regex.test(value[value.length - 1]) && value.length < 19) {
        value = value.replaceAll(/\D/g, "");
        if (value[0] == "9") {
          value = "7" + value;
        }
        if (value[0] == "7") {
          value =
            "+7 (" +
            (value[1] ? value[1] : "") +
            (value[2] ? value[2] : "") +
            (value[3] ? value[3] + ") " : "") +
            (value[4] ? value[4] : "") +
            (value[5] ? value[5] : "") +
            (value[6] ? value[6] + "-" : "") +
            (value[7] ? value[7] : "") +
            (value[8] ? value[8] + "-" : "") +
            (value[9] ? value[9] : "") +
            (value[10] ? value[10] : "");
          onChange(value);
          return;
        } else if (value[0] == "8") {
          value =
            "8 (" +
            (value[1] ? value[1] : "") +
            (value[2] ? value[2] : "") +
            (value[3] ? value[3] + ") " : "") +
            (value[4] ? value[4] : "") +
            (value[5] ? value[5] : "") +
            (value[6] ? value[6] + "-" : "") +
            (value[7] ? value[7] : "") +
            (value[8] ? value[8] + "-" : "") +
            (value[9] ? value[9] : "") +
            (value[10] ? value[10] : "");
          onChange(value);
          return;
        }
      }
    };
    const phonePasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      let value = e.clipboardData.getData("text");
      value = value.replaceAll(/\D/g, "").slice(0, 11);
      if (value[0] == "9") {
        value = "7" + value;
      }
      if (value[0] == "7") {
        value =
          "+7 (" +
          (value[1] ? value[1] : "") +
          (value[2] ? value[2] : "") +
          (value[3] ? value[3] + ") " : "") +
          (value[4] ? value[4] : "") +
          (value[5] ? value[5] : "") +
          (value[6] ? value[6] + "-" : "") +
          (value[7] ? value[7] : "") +
          (value[8] ? value[8] + "-" : "") +
          (value[9] ? value[9] : "") +
          (value[10] ? value[10] : "");
        onChange(value);
        return;
      } else if (value[0] == "8") {
        value =
          "8 (" +
          (value[1] ? value[1] : "") +
          (value[2] ? value[2] : "") +
          (value[3] ? value[3] + ") " : "") +
          (value[4] ? value[4] : "") +
          (value[5] ? value[5] : "") +
          (value[6] ? value[6] + "-" : "") +
          (value[7] ? value[7] : "") +
          (value[8] ? value[8] + "-" : "") +
          (value[9] ? value[9] : "") +
          (value[10] ? value[10] : "");
        onChange(value);
        return;
      }
    };
    return (
      <>
        <div className={styles.field}>
          <label>
            <input
              className={
                styles.field__input + (error?.message ? " " + styles.error : "")
              }
              autoComplete="phone"
              ref={ref}
              placeholder=" "
              onInput={phoneChangeHandler}
              onPaste={phonePasteHandler}
              type="tel"
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
export default PhoneInputField;
