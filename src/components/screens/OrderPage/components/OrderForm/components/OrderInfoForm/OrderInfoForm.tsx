import { FC, memo } from "react";
import {
  Control,
  Controller,
  SetFieldValue,
  UseFormClearErrors,
  UseFormRegister,
} from "react-hook-form";

import InputField from "@/components/ui/InputField/InputField";
import RadioButton from "@/components/ui/RadioButton/RadioButton";

import { IOrderCreateDto } from "@/types/order.interface";

import styles from "./OrderInfoForm.module.scss";

interface IOrderInfoForm {
  control: Control<IOrderCreateDto>;
  errors: any;
  register: UseFormRegister<IOrderCreateDto>;
  setValue: SetFieldValue<any>;
  clearErrors: UseFormClearErrors<IOrderCreateDto>;
}

const OrderInfoForm: FC<IOrderInfoForm> = ({
  register,
  errors,
  control,
  setValue,
  clearErrors,
}) => {
  const parcelSuggestions = [
    "Коробка",
    "Документы",
    "Цветы",
    "Вещи",
    "Хрупкое",
  ];
  return (
    <div className={styles.info}>
      <p className={styles.info__parcel}>О посылке</p>
      <div className={styles.info__field}>
        <InputField
          type="text"
          placeholder="Что везем"
          autoComplete="off"
          required
          {...register("parcelType", {
            required: "Это коробка, документы, а может цветы? Нам важно знать",
            maxLength: {
              value: 44,
              message: "Максимум 44 символа",
            },
          })}
          error={errors.parcelType}
        />
        <div className={styles.info__parcelSuggestions}>
          {parcelSuggestions.map((value, index) => {
            return (
              <span
                key={index}
                className={styles.info__parcelSuggestion}
                onClick={() => {
                  setValue("parcelType", value);
                  clearErrors("parcelType");
                }}
              >
                {value}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.info__radio}>
        <p className={styles.info__weightTitle}>Вес посылки</p>
        <Controller
          name="weight"
          control={control}
          rules={{ required: "Пожалуйста, выберите вес" }}
          render={({ field }) => (
            <div className={styles.info__radios}>
              <RadioButton text="До 1 кг" {...field} value="До 1 кг" />
              <RadioButton text="До 5 кг" {...field} value="До 5 кг" />
              <RadioButton text="До 10 кг" {...field} value="До 10 кг" />
              <RadioButton text="До 15 кг" {...field} value="До 15 кг" />
            </div>
          )}
        />
        {errors.weight && (
          <div className={styles.info__weightError}>
            {errors.weight.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderInfoForm;
