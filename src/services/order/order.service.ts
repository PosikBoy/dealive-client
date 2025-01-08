import instance from "@/api/api.interceptor";
import { IOrderCreateDto, IOrder } from "@/types/order.interface";
import { ORDERS_URL, ORDER_URL } from "@/constants/URLS";

class OrderService {
  async getAll() {
    try {
      const response = await instance.get<IOrder[]>(ORDERS_URL);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async send(data: IOrderCreateDto) {
    try {
      const response = await instance.post<IOrder>(ORDER_URL + "/create", data);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async getById(id: number) {
    try {
      const response = await instance.get<IOrder>(`${ORDER_URL}/${id}`);
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
}

const orderService = new OrderService();
export default orderService;
