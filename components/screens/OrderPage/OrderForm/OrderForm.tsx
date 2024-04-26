"use client";

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import styles from "./OrderForm.module.scss";
import InputField from "@/components/Ui/InputField/InputField";
import Button from "@/components/Ui/Button/Button";
import PhoneInputField from "@/components/Ui/PhoneInputField/PhoneInputField";
import RadioButton from "@/components/Ui/RadioButton/RadioButton";
import TextArea from "@/components/Ui/TextArea/TextArea";
import Image from "next/image";
import Brightness from "@/components/Ui/Brightness/Brightness";
import { useTypedSelector } from "@/hooks/redux.hooks";
import ModalWindow from "@/components/Ui/ModalWindow/ModalWindow";
import Heading3 from "@/components/Ui/Heading3/Heading3";

interface IAddress {
  address: string;
  floor: string;
  apartment: string;
  phone: string;
  phoneName: string;
  info: string;
}

interface IOrderData {
  phone: string;
  phoneName: string;
  parcelType: string;
  weight: string;
  info: string;
  price: number;
  addresses: IAddress[];
}

const OrderForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setValue,
    clearErrors,
  } = useForm<IOrderData>({
    defaultValues: {
      addresses: [{ address: "" }, { address: "" }],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const [additionalFields, setAdditionalFields] = useState(
    Array(fields.length).fill(false)
  );

  const [isPriceInfo, setIsPriceInfo] = useState(false);

  const state = useTypedSelector((state) => state.orderForm);

  useEffect(() => {
    setValue(`addresses.${0}.address`, state.pickupAddress);
    setValue(`addresses.${1}.address`, state.destinationAddress);
  }, []);

  const onSubmit = (data: any) => {
    console.log(errors);
    console.log(data);
    reset();
  };
  const parcelSuggestions = [
    "Коробка",
    "Документы",
    "Цветы",
    "Вещи",
    "Хрупкое",
  ];

  return (
    <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.orderForm__body}>
        <div className={styles.orderForm__info}>
          <p className={styles.orderForm__parcel}>О посылке</p>
          <div className={styles.orderForm__field}>
            <InputField
              type="text"
              placeholder="Что везем"
              autoComplete="off"
              required
              {...register("parcelType", {
                required:
                  "Это коробка, документы, а может цветы? Нам важно знать",
              })}
              error={errors.parcelType}
            />
            <div className={styles.orderForm__parcelSuggestions}>
              {parcelSuggestions.map((value) => {
                return (
                  <span
                    className={styles.orderForm__parcelSuggestion}
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
          <div className={styles.orderForm__radio}>
            <p className={styles.orderForm__weightTitle}>Вес посылки</p>
            <Controller
              name="weight"
              control={control}
              rules={{ required: "Пожалуйста, выберите вес" }} // Валидация
              render={({ field }) => (
                <div className={styles.orderForm__radios}>
                  <RadioButton text="До 5 кг" {...field} value="До 5 кг" />
                  <RadioButton text="До 10 кг" {...field} value="До 10 кг" />
                  <RadioButton text="До 15 кг" {...field} value="До 15 кг" />
                </div>
              )}
            />
            {errors.weight && (
              <div className={styles.orderForm__weightError}>
                {errors.weight.message}
              </div>
            )}
          </div>
        </div>
        <Heading3> Маршрут курьера</Heading3>
        {fields.map((address, index) => {
          return (
            <div className={styles.addressForm} key={address.id}>
              <div className={styles.addressForm__heading}>
                <p className={styles.addressForm__title}>Адрес {index + 1}</p>
                {fields.length > 2 ? (
                  <div
                    className={styles.addressForm__delete}
                    onClick={() => remove(index)}
                  ></div>
                ) : (
                  <div></div>
                )}
              </div>

              <div className={styles.addressForm__address}>
                <InputField
                  type="text"
                  placeholder="Введите адрес"
                  autoComplete="address-line1"
                  {...register(`addresses.${index}.address`, {
                    required: "Заполните адрес",
                  })}
                  required
                  error={errors?.addresses?.[index]?.address}
                />
              </div>
              <div className={styles.addressForm__row}>
                <div className={styles.addressForm__phone}>
                  <Controller
                    name={`addresses.${index}.phone`}
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
                        error={errors?.addresses?.[index]?.phone}
                        placeholder="Номер телефона"
                        required
                      />
                    )}
                  />
                </div>
              </div>
              {additionalFields[index] && (
                <div className={styles.additional}>
                  <div className={styles.additional__phoneName}>
                    <InputField
                      type="text"
                      autoComplete="name"
                      placeholder="Контактное лицо"
                      {...register(`addresses.${index}.phoneName`)}
                    />
                  </div>
                  <div className={styles.additional__addressInfo}>
                    <div className={styles.additional__floor}>
                      <InputField
                        type="text"
                        autoComplete="address-line2"
                        placeholder="Этаж"
                        {...register(`addresses.${index}.floor`)}
                      />
                    </div>
                    <div className={styles.additional__apartment}>
                      <InputField
                        autoComplete="address-line2"
                        type="text"
                        placeholder="Квартира"
                        {...register(`addresses.${index}.apartment`)}
                      />
                    </div>
                  </div>

                  <div className={styles.additional__comment}>
                    <TextArea
                      autoComplete="note"
                      placeholder="Комментарий"
                      {...register(`addresses.${index}.info`)}
                    ></TextArea>
                  </div>
                </div>
              )}
              <div
                className={
                  styles.additional__toggle +
                  (additionalFields[index] ? " " + styles.active : "")
                }
                onClick={() => {
                  const newAdditionalFields = [...additionalFields];
                  newAdditionalFields[index] = !newAdditionalFields[index];
                  setAdditionalFields(newAdditionalFields);
                }}
              >
                Дополнительно
              </div>
            </div>
          );
        })}

        {fields.length < 20 && (
          <div className={styles.orderForm__button}>
            <Button
              type="button"
              color="white"
              onClick={() => append({} as IAddress)}
            >
              Добавить адрес
            </Button>
          </div>
        )}

        <div className={styles.sendOrder}>
          <p className={styles.sendOrder__title}>Предложите цену</p>
          <div className={styles.sendOrder__price}>
            <div className={styles.sendOrder__priceField}>
              <InputField
                type="text"
                placeholder="Предлагаемая цена"
                required
                {...register("price", {
                  required: "Укажите цену",
                  pattern: {
                    value: /^\d+$/,
                    message: "Только числа",
                  },
                })}
                error={errors.price}
              />
            </div>
            <div className={styles.sendOrder__priceInfo}>
              <button
                type="button"
                onClick={() => setIsPriceInfo(!isPriceInfo)}
              >
                <Image
                  src="/question-icon.svg"
                  width={25}
                  height={25}
                  alt="icon"
                />
              </button>
              {isPriceInfo && (
                <ModalWindow
                  title="О цене"
                  callback={() => setIsPriceInfo(false)}
                  className={styles.modalWindow}
                >
                  <div className={styles.modalWindow__content}>
                    <p>
                      Пока что наш сервис не умеет считать цену, поэтому у вас
                      есть возможность предложить цену самостоятельно.
                    </p>
                    <p>
                      Обратите внимание, что курьеры не поедут за сильно
                      маленькую цену и с радостью выполнят ваш заказ, если он
                      будет хорошо оплачен.
                    </p>
                    <p>Примерные цены:</p>
                    <p>Доставка внутри МКАД: 700р.</p>
                    <p>Доставка за МКАД до 5 км: 1000р.</p>
                    <p>Доставка за МКАД до 15 км: 1400р.</p>
                  </div>
                </ModalWindow>
              )}
            </div>
          </div>
          <div className={styles.sendOrder__button}>
            <Button type="submit">Отправить заказ</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
