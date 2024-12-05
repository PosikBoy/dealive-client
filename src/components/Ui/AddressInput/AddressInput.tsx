import suggestionsService from "@/services/suggestions/suggestions.service";
import styles from "./AddressInput.module.scss";
import {
  ChangeEvent,
  FC,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Control, Controller } from "react-hook-form";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  onChange: any;
  placeholder: string;
  error?: any;
  value: string;
}

interface SuggestionItem {
  value: string;
}

interface IAddressInputController {
  name: string;
  control: Control<any>;
  error: any;
  placeholder?: string;
  required?: boolean;
  rules?: any;
}

const AddressInputController: FC<IAddressInputController> = ({
  name,
  control,
  error,
  placeholder = "Введите адрес",
  required,
  rules = {
    pattern: {
      value: /^.{0,127}$/,
      message: "Максимум 128 символов",
    },
    required: {
      value: required,
      message: "Это поле обязательно",
    },
  },
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }) => (
        <AddressInput
          onChange={(value: any) => field.onChange(value)}
          value={field.value}
          error={error}
          placeholder={placeholder}
          required={required}
        />
      )}
    />
  );
};

const AddressInput = forwardRef<HTMLInputElement, IField>(
  ({ onChange, placeholder, error, value, ...rest }, ref) => {
    const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      let timeoutId = null;
      if (value) {
        timeoutId = setTimeout(async () => {
          try {
            const suggestions = await suggestionsService.getSuggestions(value);
            setSuggestions(suggestions);
            setShowSuggestions(true);
          } catch (error) {
            console.error(error);
          }
        }, 1000);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue);
    };

    const handleSuggestionClick = (suggestion: SuggestionItem) => {
      inputRef.current?.focus();
      onChange(suggestion.value);
      setSuggestions([]);
      setShowSuggestions(false);
    };
    return (
      <>
        <div className={styles.field}>
          <label>
            <input
              type="text"
              placeholder=" "
              ref={inputRef}
              autoComplete="address-line1"
              onInput={handleInputChange}
              value={value}
              {...rest}
              className={
                styles.field__input +
                " " +
                (error?.message ? " " + styles.error : "")
              }
            />
            <span
              className={
                styles.field__placeholder +
                (error?.message ? " " + styles.error : "")
              }
            >
              {placeholder}
            </span>
            {error && (
              <div className={styles.field__error}>
                {error.message || "error"}
              </div>
            )}
          </label>
          {showSuggestions && suggestions?.length > 0 && (
            <>
              <div
                className={styles.suggestions__overflow}
                onClick={() => setShowSuggestions(false)}
              ></div>
              <div className={styles.suggestions}>
                <ul className={styles.suggestions__list}>
                  {suggestions.map((suggestion, index) => (
                    <li
                      className={styles.suggestions__item}
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.value}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
);
export default AddressInputController;
