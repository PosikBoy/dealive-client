import instance from "@/api/api.interceptor";
import { IOrder, IOrderResponse } from "@/types/order.interface";
import { ORDER_URL } from "@/constants/URLS";

class OrderService {
  async getOrders() {
    try {
      const response = await instance.get<IOrder>(ORDER_URL);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async sendOrder(data: IOrder) {
    try {
      const response = await instance.post(ORDER_URL, data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw Error(error.response.data.message);
    }
  }
  async getOrder(id: number) {
    try {
      console.log(id);
      const response = await instance.get<IOrderResponse>(`${ORDER_URL}/${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw Error(error.response.data.message);
    }
  }
}

const orderService = new OrderService();
export default orderService;
