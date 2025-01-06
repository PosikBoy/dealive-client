import Heading2 from "@/components/Ui/Heading2/Heading2";
import "./HowToUse.scss";
import Link from "next/link";
import Heading3 from "@/components/Ui/Heading3/Heading3";

const HowToUse = () => {
  return (
    <section className="htu">
      <div className="container">
        <div className="htu__content">
          <div className="htu__row">
            <div className="htu__column htu__column_1">
              <Heading2> Как воспользоваться нашими услугами?</Heading2>
              <div className="htu__description">
                Наша цель — сделать доставку максимально простой и удобной для
                вас. Следите за всеми этапами процесса, от оформления заказа до
                его завершения, и будьте уверены: всё под контролем. Мы ценим
                ваше время и всегда готовы помочь!
              </div>
            </div>
            <div className="htu__column_2">
              <div className="htu__step">
                <Heading3>Заполните форму 💻</Heading3>
                <p>
                  Вы можете заполнить форму на{" "}
                  <Link href="/order" className="htu__link">
                    этой странице
                  </Link>{" "}
                  и нажать кнопку «Отправить заказ». После этого ваш заказ
                  попадет в нашу систему и станет доступен курьерам.
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Поиск курьера 🔎</Heading3>
                <p>
                  Мы уже ищем для вас курьера! Обычно это занимает не более 20
                  минут, но если хотите ускорить процесс, предложите немного
                  больше за заказ — и ваш курьер найдется быстрее! 🚀
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Выполнение заказа 🚗</Heading3>
                <p>
                  Ваш заказ в процессе выполнения! Курьер уже забирает посылку и
                  доставляет её по указанному адресу. Вы всегда можете
                  отслеживать его маршрут в режиме реального времени, общаться
                  через чат и быть уверены, что всё под контролем.
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Заказ выполнен ✅</Heading3>
                <p>
                  Ваш заказ успешно завершён! Мы сделали всё, чтобы доставка
                  прошла быстро и удобно: курьер вовремя забрал посылку и
                  доставил её по назначению. Когда вам снова понадобится
                  доставка — мы всегда готовы помочь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
