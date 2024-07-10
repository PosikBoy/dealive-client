import { FC, useState } from "react";
import styles from "./AddressForm.module.scss";
import { Control, UseFieldArrayRemove, UseFormRegister } from "react-hook-form";

import AddressInput from "@/components/Ui/AddressInput/AddressInput";
import PhoneInputField from "@/components/Ui/PhoneInputField/PhoneInputField";
import InputField from "@/components/Ui/InputField/InputField";
import TextArea from "@/components/Ui/TextArea/TextArea";
import { IOrder } from "@/types/order.interface";

interface IAddressForm {
  remove: UseFieldArrayRemove;
  index: number;
  isRemoveButtonShown: boolean;
  control: Control<IOrder>;
  errors: any;
  register: UseFormRegister<IOrder>;
}

const AddressForm: FC<IAddressForm> = ({
  index,
  isRemoveButtonShown,
  remove,
  control,
  errors,
  register,
}) => {
  const [additionalFields, setAdditionalFields] = useState(false);
  return (
    <div className={styles.addressForm}>
      <div className={styles.addressForm__heading}>
        <p className={styles.addressForm__title}>Адрес {index + 1}</p>
        {isRemoveButtonShown ? (
          <div
            className={styles.addressForm__delete}
            onClick={() => remove(index)}
          ></div>
        ) : (
          <div></div>
        )}
      </div>

      <div className={styles.addressForm__address}>
        <AddressInput
          name={`addresses.${index}.address`}
          control={control}
          error={errors?.addresses?.[index]?.address}
        />
      </div>
      <div className={styles.addressForm__row}>
        <div className={styles.addressForm__phone}>
          <PhoneInputField
            name={`addresses.${index}.phone`}
            control={control}
            error={errors?.addresses?.[index]?.phone}
          />
        </div>
      </div>
      <div
        className={
          styles.additional + (additionalFields ? " " + styles.active : "")
        }
      >
        <div className={styles.additional__phoneName}>
          <InputField
            type="text"
            autoComplete="name"
            placeholder="Контактное лицо"
            {...register(`addresses.${index}.phoneName`, {
              maxLength: {
                value: 44,
                message: "Максимальная длина - 44 символов",
              },
            })}
          />
        </div>
        <div className={styles.additional__addressInfo}>
          <div className={styles.additional__floor}>
            <InputField
              type="text"
              autoComplete="address-line2"
              placeholder="Этаж"
              {...register(`addresses.${index}.floor`, {
                maxLength: 9,
              })}
            />
          </div>
          <div className={styles.additional__apartment}>
            <InputField
              autoComplete="address-line2"
              type="text"
              placeholder="Квартира"
              {...register(`addresses.${index}.apartment`, {
                maxLength: 9,
              })}
            />
          </div>
        </div>

        <div className={styles.additional__comment}>
          <TextArea
            autoComplete="note"
            placeholder="Комментарий"
            {...register(`addresses.${index}.info`, {
              maxLength: 511,
            })}
          />
        </div>
      </div>

      <div
        className={
          styles.additional__toggle +
          (additionalFields ? " " + styles.active : "")
        }
        onClick={() => {
          setAdditionalFields(!additionalFields);
        }}
      >
        Дополнительно
      </div>
    </div>
  );
};

export default AddressForm;
