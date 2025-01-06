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
              <Heading2>Как оформить заказ на доставку документов?</Heading2>
              <div className="htu__description">
                Мы специализируемся на быстрой доставке документов, чтобы они
                попадали к вам или вашим клиентам в самые сжатые сроки. Наши
                курьеры всегда готовы выполнить заказ быстро и без задержек,
                чтобы вы не теряли время и могли сосредоточиться на важном.
              </div>
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
                  В поле "Что везем?" укажите документы. Далее заполните все
                  данные и нажмите "Оформить заказ".
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Мы ищем курьера для срочной доставки 🔎</Heading3>
                <p>
                  Мы начинаем поиск курьера для вашего заказа. Это обычно
                  занимает не более 20 минут. Если вы хотите, чтобы курьер
                  выбрал ваш заказ быстрее, предложите немного большую сумму за
                  заказ — и курьер найдется быстрее! 🚀
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Выполнение заказа 🚗</Heading3>
                <p>
                  Ваш заказ в процессе! Курьер уже забирает документы и
                  доставляет её по адресу. Вы можете отслеживать его маршрут в
                  режиме реального времени или общаться с ним через чат. Важные
                  документы будут у получателя уже совсем скоро!
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Заказ успешно выполнен ✅</Heading3>
                <p>
                  Ваш заказ завершён! Курьер вовремя забрал и доставил
                  документы. Мы уверены, что доставка прошла быстро и безопасно.
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
