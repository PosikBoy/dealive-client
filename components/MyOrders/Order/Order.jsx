import "./order.css";
export default function Order(props) {
  const order = props.order;
  return (
    <div className="order">
      <div className="order__header">
        <div className="order__title">Заказ №{order.id}</div>
        <div className="order__status">Статус: {order.status}</div>
      </div>
      <div className="order__pickup-address">
        <p>Где забрать</p>
        <div className="order__pickup-address-info">{order.address1}</div>
      </div>
      <div className="order__destination-address">
        <p>Где отдать</p>
        <div className="order__destination-address-info">
          {order.address2}
        </div>
      </div>
      <div className="order__price">Цена заказа: {order.price}</div>
    </div>
  );
}
