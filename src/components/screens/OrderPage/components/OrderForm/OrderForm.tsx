"use client";

import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import Button from "@/components/ui/Button/Button";
import Heading3 from "@/components/ui/Heading3/Heading3";

import orderService from "@/services/order/order.service";

import { useTypedSelector } from "@/hooks/redux.hooks";
import { IAddress, IOrder, IOrderCreateDto } from "@/types/order.interface";

import styles from "./OrderForm.module.scss";

import AddressForm from "./components/AddressForm/AddressForm";
import SuccessOrderModal from "./components/ModalWindows/SuccessOrderModal";
import OrderInfoForm from "./components/OrderInfoForm/OrderInfoForm";
import SendOrder from "./components/SendOrder/SendOrder";

const OrderForm = () => {
  const [order, setOrder] = useState<IOrder | null>(null);

  const state = useTypedSelector((state) => state.orderForm);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
    clearErrors,
  } = useForm<IOrderCreateDto>({
    defaultValues: {
      addresses: [{ address: "" }, { address: "" }],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses",
  });

  useEffect(() => {
    setValue(`addresses.${0}.address`, state.pickupAddress);
    setValue(`addresses.${1}.address`, state.destinationAddress);
  }, []);

  const onSubmit = async (data: IOrderCreateDto) => {
    const order = await orderService.send(data);

    if (order?.id) {
      setOrder(order);
      reset();
    }
  };

  return (
    <>
      {order && (
        <SuccessOrderModal callback={() => setOrder(null)} order={order} />
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
            const isRemoveButtonShown = fields.length > 2;
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
          {fields.length < 40 && (
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
          <SendOrder register={register} error={errors?.price} />
        </div>
      </form>
    </>
  );
};

export default OrderForm;
