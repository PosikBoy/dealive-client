import type { IAddress } from "@/types/order.interface";

import { FC, useState } from "react";

import "./Address.scss";
import InputField from "@/components/ui/InputField/InputField";
import TextArea from "@/components/ui/TextArea/TextArea";

interface IAddressProps {
  address: IAddress;
  index: number;
}

const Address: FC<IAddressProps> = ({ index, address }) => {
  const [isAdditionalShown, setIsAdditionalShown] = useState(false);

  const isAdditionalShownClassName = isAdditionalShown ? "active" : "";
  const addressString =
    address.address +
    (address.floor ? ", эт. " + address.floor : "") +
    (address.apartment ? ", кв. " + address.apartment : "");

  return (
    <div className="address">
      <div className="address__index">{index + 1}</div>
      <div className="address__info">
        <div className="address__address">{addressString}</div>
        <div className={`address__additional ${isAdditionalShownClassName}`}>
          <div className="address__additional-row">
            <div className="address__additional-column">
              <div className="address__phone">
                <InputField
                  placeholder="Номер телефона"
                  value={address.phoneNumber}
                  disabled
                />
              </div>
              <div className="address__phoneName">
                <InputField
                  placeholder="Контактное лицо"
                  value={address.phoneName}
                  disabled
                />
              </div>
            </div>
            <div className="address__additional-column address__additional-column_2">
              <TextArea
                placeholder="Комментарий"
                value={address.info}
                disabled
              />
            </div>
          </div>
        </div>
        <div
          className={`address__additional-toggle ${isAdditionalShownClassName}`}
          onClick={() => setIsAdditionalShown(!isAdditionalShown)}
        >
          {isAdditionalShown ? "Скрыть" : "Дополнительно"}
        </div>
      </div>
    </div>
  );
};

export default Address;
