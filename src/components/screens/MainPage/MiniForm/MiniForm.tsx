"use client";

import styles from "./miniForm.module.scss";
import { useForm } from "react-hook-form";
import InputField from "@/components/Ui/InputField/InputField";
import Button from "@/components/Ui/Button/Button";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import { useRouter } from "next/navigation";
import { useTypedDispatch } from "@/hooks/redux.hooks";
import { addData } from "@/store/orderForm/orderForm.slice";
import AddressInputField from "@/components/Ui/AddressInput/AddressInput";

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
          <InputField
            control={control}
            autoComplete="address-line1"
            {...register("pickupAddress")}
          />
          <InputField
            type="text"
            placeholder="Куда доставить?"
            autoComplete="off"
            {...register("destinationAddress")}
          />
        </div>
        <Button type="submit">Рассчитать стоимость</Button>
      </div>
    </form>
  );
};

export default MiniForm;
