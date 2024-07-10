"use client";

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import styles from "./OrderForm.module.scss";
import Button from "@/components/Ui/Button/Button";
import { useTypedSelector } from "@/hooks/redux.hooks";
import Heading3 from "@/components/Ui/Heading3/Heading3";
import orderService from "@/services/order/order.service";
import AddressForm from "./components/AddressForm/AddressForm";
import SuccessOrderModal from "./components/ModalWindows/SuccessOrderModal";
import OrderInfoForm from "./components/OrderInfoForm/OrderInfoForm";
import SendOrder from "./components/SendOrder/SendOrder";
import { IAddress, IOrder } from "@/types/order.interface";

const OrderForm = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const state = useTypedSelector((state) => state.orderForm);
  const user = useTypedSelector((state) => state.auth.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
    clearErrors,
  } = useForm<IOrder>({
    defaultValues: {
      addresses: [{ address: "" }, { address: "" }],
    },
    mode: "onBlur",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  const setUserData = () => {
    if (user) {
      setValue("info.phone", user.phoneNumber || "");
      setValue("info.phoneName", user.name || "");
      setValue("info.userId", user.id);
    }
  };

  useEffect(() => {
    setValue(`addresses.${0}.address`, state.pickupAddress);
    setValue(`addresses.${1}.address`, state.destinationAddress);
    setUserData();
  }, [user]);

  const onSubmit = async (data: IOrder) => {
    const order = await orderService.send(data);

    if (order?.info?.id) {
      setIsSuccessModalOpen(true);
      reset();
      setUserData();
    }
  };

  return (
    <>
      {isSuccessModalOpen && (
        <SuccessOrderModal callback={setIsSuccessModalOpen} />
      )}

      <form className={styles.orderForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.orderForm__body}>
          <OrderInfoForm
            control={control}
            errors={errors}
            register={register}
            setValue={setValue}
            clearErrors={clearErrors}
          />
          <Heading3>Маршрут курьера</Heading3>
          {fields.map((address, index) => {
            let isRemoveButtonShown = fields.length > 2;
            return (
              <AddressForm
                key={address.id}
                index={index}
                remove={remove}
                isRemoveButtonShown={isRemoveButtonShown}
                control={control}
                errors={errors}
                register={register}
              />
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
          <SendOrder register={register} error={errors?.info?.price} />
        </div>
      </form>
    </>
  );
};

export default OrderForm;
