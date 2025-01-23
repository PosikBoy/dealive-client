import type { IAction } from "@/types/order.interface";

import "./Actions.scss";

import Image from "next/image";

import Heading3 from "@/components/ui/Heading3/Heading3";

import { extractTimeFromDate } from "@/utils/date";

import CourierIcon from "@/assets/icons/courier.png";

type Props = {
  actions: IAction[];
};

const Actions = (props: Props) => {
  const actions = props.actions.filter((action) => {
    return action.actionType === "GO_TO" || action.actionType === "ARRIVED_AT";
  });

  return (
    <div className="actions">
      <div className="actions__heading">
        <Heading3 className="actions__heading-title" color="black">
          Отслеживание курьера
        </Heading3>
      </div>
      <ul className="actions__list">
        {actions.map((action) => {
          const isActive = action.isCompleted ? "action--active" : "";
          return (
            <li
              className={`actions__action ${isActive} action`}
              key={action.id}
            >
              <div className="action__block">
                <div className="action__icon">
                  <Image
                    src={CourierIcon} // Используем иконку из orderStatusMap
                    alt="Иконка курьера"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="action__description">{action.description}</div>
              </div>
              {action.isCompleted && (
                <div className="action__completed-at">
                  {extractTimeFromDate(action.completedAt)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <span className="actions__heading-subtitle">
        Синим отмечены выполненные действия курьера, а серым – невыполненные.
        Справа указано время, когда действие было выполнено
      </span>
    </div>
  );
};

export default Actions;
