import orderService from "@/services/order/order.service";
import { IOrderCreateDto } from "@/types/dto/order.dto";
import { IOrderPrices } from "@/types/models/order";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

type UsePricesProps = Pick<IOrderCreateDto, "weight" | "parcelType"> & {
  addresses: {
    address: string;
  }[];
};

const usePrices = (data: UsePricesProps) => {
  const { weight, parcelType, addresses } = data;

  const debouncedWeight = useDebounce(weight, 500);
  const debouncedParcelType = useDebounce(parcelType, 500);
  const debouncedAddresses = useDebounce(addresses, 500);

  const [prices, setPrices] = useState<IOrderPrices>({
    basePrice: "От 250 ₽",
    options: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPrices = async () => {
      const hasFilledAddresses = debouncedAddresses.every(
        (a) => a.address && a.address.trim() !== ""
      );

      console.log("Проверка", debouncedAddresses, hasFilledAddresses);

      if (!debouncedWeight || !debouncedParcelType || !hasFilledAddresses) {
        return;
      }

      setLoading(true);

      try {
        const prices = await orderService.getPrice({
          weight: debouncedWeight,
          parcelType: debouncedParcelType,
          addresses: debouncedAddresses,
        });

        setPrices(prices);
      } catch (e: unknown) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [debouncedWeight, debouncedParcelType, debouncedAddresses]);

  const clearPrices = () => setPrices({ basePrice: "От 250 ₽", options: [] });

  return { clearPrices, prices, loading };
};

export default usePrices;
