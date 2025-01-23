import React from "react";
import "./TrackLink.scss";

import Button from "@/components/ui/Button/Button";
import Heading3 from "@/components/ui/Heading3/Heading3";
import InputField from "@/components/ui/InputField/InputField";
type Props = {
  trackNumber: string;
  code: string;
};

const TrackLink = (props: Props) => {
  return (
    <div className="track-link">
      <Heading3 className="track-link__title" color="black">
        Сссылка на отслеживание
      </Heading3>
      <div className="track-link__row">
        <InputField
          placeholder="Ссылка"
          value={`https://dealive.ru/track/${props.trackNumber}?code=${props.code}`}
        />
        <div className="track-link__button">
          <Button
            onClick={() =>
              navigator.clipboard.writeText(
                `https://dealive.ru/track/${props.trackNumber}?code=${props.code}`
              )
            }
          >
            Скопировать
          </Button>
        </div>
      </div>
      <span className="track-link__subtitle">
        Вы можете отправить эту ссылку получателю или отправителю, чтобы они
        тоже могли отследить доставку. Для того чтобы удалить или добавить
        доставку в отслеживамые, нажмите кнопку ниже. После этого, вы сможете
        увидеть перейти к треку через главную страницу.
      </span>
    </div>
  );
};

export default TrackLink;
