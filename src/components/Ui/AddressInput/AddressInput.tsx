"use client";
import styles from "./AddressInput.module.scss";
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import suggestionsService from "@/services/suggestions/suggestions.service";
import { Controller } from "react-hook-form";
import { useDebounce } from "use-debounce";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  autoComplete?: string;
}

const AddressInput = forwardRef<HTMLInputElement, IField>(
  ({ error, autoComplete, ...rest }, ref) => {
    const [suggestions, setSuggestions] = useState([]);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const suggestions = suggestionsService.getSuggestions(value);

      console.log(suggestions);
    };

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
              type="text"
              ref={ref}
              autoComplete={autoComplete}
              onChange={onChangeHandler}
              {...rest}
            />
            <span
              className={
                styles.field__placeholder +
                (error?.message ? " " + styles.error : "")
              }
            >
              Введите адрес*
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

export default AddressInput;
