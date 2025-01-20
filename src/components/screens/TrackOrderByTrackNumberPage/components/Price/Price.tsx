import "./Price.scss";

type Props = {
  price: number;
};

const Price = (props: Props) => {
  return (
    <div className="price">
      <div className="price__heading">
        <span className="price__heading-title">Стоимость доставки</span>
        <span className="price__heading-subtitle">Наличными курьеру</span>
      </div>
      <div className="price__info">
        <div className="price__row">
          <span className="price__detail">Услуга доставки</span>
          <span className="price__value">{props.price * 0.85} ₽</span>
        </div>
        <div className="price__row">
          <span className="price__detail">Комиссия сервиса</span>
          <span className="price__value">{props.price * 0.15} ₽</span>
        </div>
        <div className="price__row">
          <span className="price__detail price__detail--black">Итого</span>
          <span className="price__value price__value--black">
            {props.price} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default Price;
