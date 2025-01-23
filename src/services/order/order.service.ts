import instance from "@/api/api.interceptor";
import { ORDERS_URL, ORDER_URL } from "@/constants/URLS";
import {
  IOrderCreateDto,
  IOrder,
  ITrackingInfo,
} from "@/types/order.interface";

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
      if (response.data) {
        this.saveTrackingInfo(response.data);
      }
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
  async getByTrackNumberAndCode(trackNumber: string, code: string) {
    try {
      const response = await instance.get<IOrder>(`${ORDER_URL}/track`, {
        params: {
          trackNumber,
          code,
        },
      });
      return response.data;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  }
  async trackOrders() {
    const trackingInfo = this.getTrackingInfo();
    if (!trackingInfo) {
      return;
    }
    try {
      const promises = trackingInfo.map(async (orderTrackingInfo) => {
        const response = await instance.get<IOrder>(ORDER_URL + "/track", {
          params: {
            trackNumber: orderTrackingInfo.trackNumber,
            code: orderTrackingInfo.code,
          },
        });
        return response.data;
      });
      const result = await Promise.all(promises);
      return result;
    } catch (error: any) {
      console.log(error);
      throw Error(error.response.data.message);
    }
  }
  saveTrackingInfo(order: IOrder) {
    const previousTrackNumbers = JSON.parse(
      localStorage.getItem("trackingInfo") || "[]",
    ) as ITrackingInfo[] | null;
    if (previousTrackNumbers) {
      localStorage.setItem(
        "trackingInfo",
        JSON.stringify([
          ...previousTrackNumbers,
          {
            id: order.id,
            trackNumber: order.trackNumber,
            code: order.code,
          },
        ]),
      );
    } else {
      localStorage.setItem(
        "trackingInfo",
        JSON.stringify([
          {
            id: order.id,
            trackNumber: order.trackNumber,
            code: order.code,
          },
        ]),
      );
    }
  }
  getTrackingInfo() {
    return JSON.parse(localStorage.getItem("trackingInfo") || "[]") as
      | ITrackingInfo[]
      | null;
  }
  removeFromTrackList(id: number) {
    const previousTrackNumbers = JSON.parse(
      localStorage.getItem("trackingInfo") || "[]",
    ) as ITrackingInfo[] | null;
    if (previousTrackNumbers) {
      localStorage.setItem(
        "trackingInfo",
        JSON.stringify(previousTrackNumbers.filter((item) => item.id !== id)),
      );
    }
  }
  isInTrackList(id: number) {
    const previousTrackNumbers = JSON.parse(
      localStorage.getItem("trackingInfo") || "[]",
    ) as ITrackingInfo[] | null;
    if (previousTrackNumbers) {
      return previousTrackNumbers.some((item) => item.id === id);
    }
    return false;
  }
}

const orderService = new OrderService();
export default orderService;
