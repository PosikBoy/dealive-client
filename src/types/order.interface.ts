export interface IAddress {
  address: string;
  floor?: string;
  apartment?: string;
  phone: string;
  phoneName?: string;
  info?: string;
}
export interface IOrderInfo {
  userId?: number;
  phone?: string;
  phoneName?: string;
  parcelType: string;
  weight: string;
  price: number;
}

export interface IOrder {
  info: IOrderInfo;
  addresses: IAddress[];
}

export interface IOrderInfoResponse extends IOrderInfo {
  id: number;
  status: string;
  date: string;
}

export interface IOrderResponse {
  info: IOrderInfoResponse;
  addresses: IAddress[];
}
