"use client";

import styles from "./miniForm.module.scss";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/Ui/Button/Button";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import { useRouter } from "next/navigation";
import { useTypedDispatch } from "@/hooks/redux.hooks";
import { addData } from "@/store/orderForm/orderForm.slice";
import AddressInput from "@/components/Ui/AddressInput/AddressInput";

interface IMiniForm {
  pickupAddress: string;
  destinationAddress: string;
}

const MiniForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm<IMiniForm>({
    mode: "onBlur",
  });

  const router = useRouter();
  const dispatch = useTypedDispatch();
  const onSubmitHandler = (data: IMiniForm) => {
    dispatch(addData(data));
    router.push("/order");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.miniForm}>
      <div className={styles.miniForm__body}>
        <Heading3 color="black" className={styles.miniForm__heading}>
          Оставьте заявку
        </Heading3>
        <div className={styles.miniForm__inputs}>
          <Controller
            name="pickupAddress"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AddressInput
                onChange={(value: any) => field.onChange(value)}
                value={field.value}
                error={errors?.pickupAddress?.message}
                placeholder="Где забрать?"
              />
            )}
          />
          <Controller
            name="destinationAddress"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <AddressInput
                onChange={(value: any) => field.onChange(value)}
                value={field.value}
                error={errors?.destinationAddress?.message}
                placeholder="Куда доставить?"
              />
            )}
          />
        </div>
        <Button type="submit">Оформить доставку</Button>
      </div>
    </form>
  );
};

export default MiniForm;
