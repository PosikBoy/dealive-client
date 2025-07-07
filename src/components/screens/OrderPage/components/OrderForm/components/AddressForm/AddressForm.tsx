import { FC, useState } from "react";
import {
  Control,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";

import AddressInput from "@/components/ui/AddressInput/AddressInput";
import InputField from "@/components/ui/InputField/InputField";
import PhoneInputField from "@/components/ui/PhoneInputField/PhoneInputField";
import TextArea from "@/components/ui/TextArea/TextArea";

import { IOrderCreateDto } from "@/types/dto/order.dto";
import styles from "./AddressForm.module.scss";

interface IAddressForm {
  remove: UseFieldArrayRemove;
  index: number;
  isRemoveButtonShown: boolean;
  control: Control<IOrderCreateDto>;
  errors: FieldErrors<IOrderCreateDto>;
  register: UseFormRegister<IOrderCreateDto>;
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
        {isRemoveButtonShown && (
          <div
            className={styles.addressForm__delete}
            onClick={() => remove(index)}
          ></div>
        )}
      </div>

      <div className={styles.addressForm__address}>
        <AddressInput
          name={`addresses.${index}.address`}
          control={control}
          error={errors?.addresses?.[index]?.address}
          required={true}
        />
      </div>
      <div className={styles.addressForm__row}>
        <div className={styles.addressForm__phone}>
          <PhoneInputField
            name={`addresses.${index}.phoneNumber`}
            control={control}
            error={errors?.addresses?.[index]?.phoneNumber}
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
            error={errors?.addresses?.[index]?.phoneName}
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
              error={errors?.addresses?.[index]?.floor}
              {...register(`addresses.${index}.floor`, {
                maxLength: {
                  value: 9,
                  message: "Максимальная длина - 9 символов",
                },
              })}
            />
          </div>
          <div className={styles.additional__apartment}>
            <InputField
              error={errors?.addresses?.[index]?.apartment}
              autoComplete="address-line2"
              type="text"
              placeholder="Квартира"
              {...register(`addresses.${index}.apartment`, {
                maxLength: {
                  value: 9,
                  message: "Максимальная длина - 9 символов",
                },
              })}
            />
          </div>
        </div>

        <div className={styles.additional__comment}>
          <TextArea
            autoComplete="note"
            placeholder="Комментарий"
            error={errors?.addresses?.[index]?.info}
            {...register(`addresses.${index}.info`, {
              maxLength: {
                value: 511,
                message: "Максимальная длина - 512 символов",
              },
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
