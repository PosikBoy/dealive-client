import "./HowToUse.scss";
import Link from "next/link";

import Heading2 from "@/components/ui/Heading2/Heading2";
import Heading3 from "@/components/ui/Heading3/Heading3";

interface IProps {
  title: string;
  description: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
}

const HowToUse = (props: IProps) => {
  const { title, description, step1, step2, step3, step4 } = props;
  return (
    <section className="htu">
      <div className="container">
        <div className="htu__content">
          <div className="htu__row">
            <div className="htu__column htu__column_1">
              <Heading2>{title}</Heading2>
              <div className="htu__description">{description}</div>
              <Link href="/order" className="htu__button">
                Заполнить форму{" "}
              </Link>
            </div>
            <div className="htu__column_2">
              <div className="htu__step">
                <Heading3>Заполните форму 💻</Heading3>
                <p>
                  Оформите заказ на{" "}
                  <Link href="/order" className="htu__link">
                    этой странице.
                  </Link>{" "}
                  {step1}
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Мы ищем курьера для срочной доставки 🔎</Heading3>
                <p>{step2}</p>
              </div>
              <div className="htu__step">
                <Heading3>Выполнение заказа 🚗</Heading3>
                <p>{step3}</p>
              </div>
              <div className="htu__step">
                <Heading3>Заказ успешно выполнен ✅</Heading3>
                <p>{step4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
