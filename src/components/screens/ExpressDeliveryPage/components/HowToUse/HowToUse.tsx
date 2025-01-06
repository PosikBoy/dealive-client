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
              <Heading2>Как оформить заказ на экспресс-доставку?</Heading2>
              <div className="htu__description">
                Мы специализируемся на экспресс-доставке, чтобы ваши заказы
                приходили как можно быстрее! Наши курьеры готовы выполнить заказ
                с максимальной скоростью, чтобы вы не теряли время. Мы ценим
                ваше время и гарантируем, что доставка будет выполнена без
                задержек!
              </div>
              <Link href="/order" className="htu__button">
                Заполнить форму{" "}
              </Link>
            </div>
            <div className="htu__column_2">
              <div className="htu__step">
                <Heading3>Заполните форму для экспресс-доставки 💻</Heading3>
                <p>
                  Оформите заказ на{" "}
                  <Link href="/order" className="htu__link">
                    этой странице
                  </Link>{" "}
                  и нажмите кнопку «Отправить заказ». Ваш заказ поступит в
                  систему, и мы немедленно приступим к поиску курьера.
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Мы ищем курьера для срочной доставки 🔎</Heading3>
                <p>
                  Мы начинаем поиск курьера для выполнения вашего заказа. Это
                  обычно занимает не более 20 минут. Если вы хотите, чтобы
                  курьер пришел быстрее, предложите немного большую сумму за
                  заказ — и курьер найдется быстрее! 🚀
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Выполнение заказа в рекордные сроки 🚗</Heading3>
                <p>
                  Ваш заказ в процессе! Курьер уже забирает посылку и доставляет
                  её по адресу. Вы можете отслеживать его маршрут в режиме
                  реального времени или общаться с ним через чат. Ваш заказ
                  будет в надежных руках!
                </p>
              </div>
              <div className="htu__step">
                <Heading3>Заказ успешно выполнен ✅</Heading3>
                <p>
                  Ваш заказ завершён! Курьер вовремя забрал посылку и доставил
                  её по указанному адресу. Мы гарантируем, что экспресс-доставка
                  прошла быстро и удобно. Когда вам снова понадобится срочная
                  доставка — мы всегда готовы помочь!
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
