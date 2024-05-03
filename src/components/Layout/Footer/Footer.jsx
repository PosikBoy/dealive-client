import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__body">
            <div className="footer__logo">
              <Link href="/" className="footer__logo-link">
                DEALIVE
              </Link>
              <p className="footer__education-aim">
                Создано в образовательных целях
              </p>
            </div>
            <div className="footer__row">
              <ul className="footer__columns">
                <li className="footer__column-container">
                  <ul className="footer__column">
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Новости
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        О нас
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Отзывы
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="footer__column-container">
                  <ul className="footer__column">
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Оставить заказ
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Оставить предложение
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Авторизоваться
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Стать курьером
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="footer__column-container">
                  <ul className="footer__column">
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Вопросы и ответы
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link className="footer__link" href="/">
                        Правила
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
