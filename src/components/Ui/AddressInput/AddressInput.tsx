import suggestionsService from "@/services/suggestions/suggestions.service";
import styles from "./AddressInput.module.scss";
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Controller } from "react-hook-form";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  onChange: any;
  placeholder: string;
  error?: any;
  value: string;
}
interface SuggestionItem {
  value: string;
}

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
            console.log(suggestions);
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
          {showSuggestions && (
            <ul className={styles.suggestions}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.value}
                </li>
              ))}
            </ul>
          )}
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
        </div>
      </>
    );
  }
);
export default AddressInput;
