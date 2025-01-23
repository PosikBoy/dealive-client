"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import AddressInput from "@/components/ui/AddressInput/AddressInput";
import Button from "@/components/ui/Button/Button";
import Heading3 from "@/components/ui/Heading3/Heading3";

import { useTypedDispatch } from "@/hooks/redux.hooks";
import { addData } from "@/store/orderForm/orderForm.slice";

import styles from "./miniForm.module.scss";

interface IMiniForm {
  pickupAddress: string;
  destinationAddress: string;
}

const MiniForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    control,
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
          <AddressInput
            name="pickupAddress"
            control={control}
            error={errors?.pickupAddress?.message}
            placeholder="Где забрать?"
            required={false}
            rules={{}}
          />
          <AddressInput
            name="destinationAddress"
            control={control}
            error={errors?.destinationAddress?.message}
            placeholder="Куда доставить?"
            required={false}
            rules={{}}
          />
        </div>
        <Button type="submit">Оформить доставку</Button>
      </div>
    </form>
  );
};

export default MiniForm;
