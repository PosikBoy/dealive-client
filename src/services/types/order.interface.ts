export interface IAddress {
  city?: string;
  street?: string;
  houseNumber?: string;
  floor?: string;
  apartment?: string;
  phone?: string;
  phoneName?: string;
  info?: string;
}

export interface IOrderData {
  orderData: {
    phone?: string;
    phoneName?: string;
    parcelType: string;
    weight: string;
    info?: string;
    price: number;
  };
  addresses: IAddress[];
}
