import instance from "@/api/api.interceptor";

interface IOrderData {
  phone: string;
  phoneName: string;
  parcelType: string;
  weight: string;
  status: string;
  info: string;
  price: number;
  addresses: IAddress[];
}

interface IAddress {
  city?: string;
  street?: string;
  houseNumber?: string;
  floor?: string;
  apartment?: string;
  phone?: string;
  phoneName?: string;
  info?: string;
}

class OrderService {
  async getOrders() {
    return instance.get(process.env.SERVER_URL + "/orders");
  }
  async sendOrder(data: IOrderData) {
    return instance.post(process.env.SERVER_URL + "/orders", data);
  }
}

const orderService = new OrderService();
export default orderService;
