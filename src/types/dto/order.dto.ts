import { IAddress, IOrder } from "../models/order";

export type IAddressCreateDto = Pick<
  IAddress,
  "address" | "floor" | "apartment" | "phoneNumber" | "phoneName" | "info"
>;

export type IOrderCreateDto = Pick<
  IOrder,
  "parcelType" | "weight" | "price" | "addresses"
> & {
  addresses: IAddressCreateDto[];
};

export type GetOrderPriceDto = Pick<
  IOrderCreateDto,
  "weight" | "parcelType"
> & {
  addresses: {
    address: string;
  }[];
};
