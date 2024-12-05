import { Control, Controller } from "react-hook-form";
import styles from "./PhoneInputField.module.scss";
import { forwardRef, InputHTMLAttributes, useState, FC } from "react";

interface IPhoneField extends InputHTMLAttributes<HTMLInputElement> {
  onChange: any;
  error: any;
  placeholder: string;
  required?: boolean;
}

interface IPhoneInputController {
  name: string;
  control: Control<any>;
  error: any;
}

const PhoneInputController: FC<IPhoneInputController> = ({
  name,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: "Введите номер телефона",
        pattern: {
          value: /^(?:\+7|\b8)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
          message: "Введите номер телефона",
        },
      }}
      render={({ field }) => (
        <PhoneInputField
          onBlur={field.onBlur}
          onChange={(value: any) => field.onChange(value)}
          value={field.value}
          error={error}
          placeholder="Номер телефона"
          required
        />
      )}
    />
  );
};

const PhoneInputField = forwardRef<HTMLInputElement, IPhoneField>(
  ({ onChange, error, placeholder, required, ...rest }, ref) => {
    const phoneChangeHandler = (e: any) => {
      //React.ChangeEvent<HTMLInputElement>
      const regex = /[0-9]|\+/;
      let value = e.target.value;

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
export default PhoneInputController;
