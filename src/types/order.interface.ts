export interface IAddressWithoutSensitiveInfo {
  id: number;
  orderId: number;
  address: string;
  info: string;
}

export interface IOrderWithoutSensitiveInfo {
  id: number;
  date: string;
  parcelType: string;
  weight: string;
  price: number;
  addresses: IAddressWithoutSensitiveInfo[];
}

export interface IAddressCreateDto {
  address: string;
  floor?: string;
  apartment?: string;
  phoneNumber: string;
  phoneName?: string;
  info?: string;
}

export interface IOrderCreateDto {
  parcelType: string;
  weight: string;
  price: number;
  addresses: IAddressCreateDto[];
}

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
}

export interface ITrackingInfo {
  id: number;
  trackNumber: string;
  code: string;
}
