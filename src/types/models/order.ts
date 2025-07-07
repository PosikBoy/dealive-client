export interface IAddress {
  id: number;
  orderId: number;
  address: string;
  floor?: string;
  apartment?: string;
  phoneNumber: string;
  phoneName?: string;
  info?: string;
  createdAt: string;
  updatedAt: string;
}

export type IAddressWithoutSensitiveInfo = Pick<
  IAddress,
  "id" | "orderId" | "address" | "info"
>;

export interface IOrder {
  id: number;
  clientId?: number;
  date?: string;
  phoneNumber?: string;
  phoneName?: string;
  parcelType: string;
  weight: string;
  statusId: number;
  price: number;
  trackNumber: string;
  code: string;
  courierId?: number;
  createdAt: string;
  updatedAt?: string;
  addresses: IAddress[];
  actions: IAction[];
  courier?: {
    name: string;
    secondName: string;
    lastName: string;
    phoneNumber: string;
  };
}

export type IOrderWithoutSensitiveInfo = Pick<
  IOrder,
  "id" | "date" | "parcelType" | "weight" | "price" | "addresses"
>;

export enum OrderActionType {
  GO_TO = "GO_TO",
  ARRIVED_AT = "ARRIVED_AT",
  PICKUP = "PICKUP",
  DELIVER = "DELIVER",
  COLLECT_PAYMENT = "COLLECT_PAYMENT",
  PAY_COMMISION = "PAY_COMMISION",
  COMPLETE_ORDER = "COMPLETE_ORDER",
}

export interface IAction {
  id: number;
  orderId: number;
  sequence: number;
  actionType: OrderActionType;
  description: string;
  addressId: number;
  isCompleted: boolean;
  completedAt: string;
}

export interface IPriceOption {
  label: string;
  price: number;
}

export interface IOrderPrices {
  //Может быть 150 или "От 150"
  basePrice: string | number;
  options: IPriceOption[];
}

export type ITrackingInfo = Pick<IOrder, "id" | "trackNumber" | "code">;
