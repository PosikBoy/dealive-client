import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./RadioButton.module.scss";

interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  value: string;
}

const RadioButton = forwardRef<HTMLInputElement, IRadioButton>(
  ({ text, value, ...rest }, ref) => {
    return (
      <>
        <div className={styles.radio}>
          <label className={styles.radio__button}>
            <input
              value={value}
              className={styles.radio__input}
              type="radio"
              ref={ref}
              {...rest}
            />
            <div className={styles.radio__text}>{text}</div>
          </label>
        </div>
      </>
    );
  },
);
export default RadioButton;
