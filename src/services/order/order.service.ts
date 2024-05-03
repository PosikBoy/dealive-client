import instance from "@/api/api.interceptor";
import { IOrderData } from "../types/order.interface";
import { ORDER_URL } from "@/constants/URLS";

class OrderService {
  async getOrders() {
    try {
      const response = await instance.get<IOrderData>(ORDER_URL);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async sendOrder(data: IOrderData) {
    try {
      console.log(data);
      const response = await instance.post(ORDER_URL, data);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const orderService = new OrderService();
export default orderService;
