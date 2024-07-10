import instance from "@/api/api.interceptor";
import { IOrder, IOrderResponse } from "@/types/order.interface";
import { ORDERS_URL, ORDER_URL } from "@/constants/URLS";

class OrderService {
  async getAll() {
    try {
      const response = await instance.get<IOrderResponse[]>(ORDERS_URL);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async send(data: IOrder) {
    try {
      const response = await instance.post<IOrderResponse>(ORDER_URL, data);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async getById(id: number) {
    try {
      console.log(id);
      const response = await instance.get<IOrderResponse>(`${ORDER_URL}/${id}`);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const orderService = new OrderService();
export default orderService;
