import Link from "next/link";
import "./AboutPage.scss";
import Heading from "@/components/Ui/Heading/Heading";
import Image from "next/image";
import Button from "@/components/Ui/Button/Button";

import starImage from "@/assets/icons/star.png";
import deliveryGuy2 from "@/assets/images/courier.jpg";

import Card from "@/components/Ui/Card/Card";
import cardImage7 from "@/assets/images/cardImage7.png";

const AboutPage = () => {
  return (
    <>
      <nav className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb__list">
            <li className="breadcrumb__link">
              <Link href="/">Главная</Link>
            </li>
            <li className="breadcrumb__link">О компании</li>
          </ul>
        </div>
      </nav>
      <div className="about">
        <div className="container">
          <div className="about__wrapper">
            <Heading className="about__title">
              <span>Приветствуем вас на странице о нашей компании!</span>
            </Heading>
            <div className="about__paragraph about__paragraph_1">
              <p>
                DEALIVE – больше, чем просто сервис доставки. Это срочная и
                надежная служба поручений с индивидуальным подходом к каждому
                клиенту. Мы ценим время наших клиентов и гарантируем
                оперативность выполнения заказов. Благодаря многолетнему опыту
                работы в сфере логистики, нам удается находить наиболее
                эффективные решения даже для самых сложных поручений.
              </p>
              <div className="about__paragraph-picture about__paragraph-picture_1">
                <Image src={starImage} alt="Фотография курьера dealive.ru" />
              </div>
            </div>
            <div className="about__paragraph about__paragraph_2">
              <p>
                Наши главные приоритеты – высокое качество услуг и комфорт
                клиентов. А довольные исполнители - это залог довольных
                клиентов. Курьеры в нашей компании платят фиксированную комиссию
                всего 15% за любой заказ. Мы набираем только курьеров с опытом
                работы и обучаем их для работы в нашей компании. Заказывая у
                нас, вы можете быть уверены, что к вам приедет курьер, знающий
                русский язык.
              </p>
            </div>
            <div className="about__paragraph about__paragraph_3">
              <p>
                Благодаря такому подходу, мы смогли обеспечить высокую скорость
                доставки и низкий процент отмененных заказов. Наши курьеры
                всегда рады выполнять заявки клиентов, зная, что большая часть
                их заработка остается у них.
              </p>
              <div className="about__paragraph-picture about__paragraph-picture_3">
                <Image
                  src={deliveryGuy2}
                  alt="Фотография курьера dealive.ru"
                  quality={60}
                  fill={true}
                />
              </div>
            </div>
            <div className="about__paragraph about__paragraph_4">
              <p>
                Доверьте свои задачи команде DEALIVE и убедитесь в том, что мы
                умеем работать быстро, аккуратно и с максимальной
                ответственностью. Наши курьеры, организаторы мероприятий и
                другие специалисты всегда готовы прийти на помощь в любой
                ситуации. Свяжитесь с нами прямо сейчас и убедитесь в этом
                лично!
              </p>
            </div>
            <div className="about__paragraph about__paragraph_5">
              <Card
                title="Наша миссия - сделать удобный и качественный сервис поручений в Москве."
                subtitle="Мы можем доставить товар из магазина, собрать товары с пунктов выдачи заказов, забрать вашу посылку, выкупить цветы или продукты, получить доверенность или найти исполнителя для нетипичного заказа. Все, что от вас требуется - сделать заявку, а мы возьмем на себя все организационные хлопоты."
                imageDescription="Фотография курьера dealive.ru"
                img={cardImage7}
                alt="Фотография курьера dealive.ru"
              />
            </div>
            <div className="about__indicators indicators">
              <div className="indicators__indicator">
                <div className="indicators__indicator-value">135</div>
                <div className="indicators__indicator-title">
                  Курьеров онлайн
                </div>
              </div>
              <div className="indicators__indicator">
                <div className="indicators__indicator-value">1300+</div>
                <div className="indicators__indicator-title">
                  Довольных клиентов
                </div>
              </div>
              <div className="indicators__indicator">
                <div className="indicators__indicator-value">24/7</div>
                <div className="indicators__indicator-title">Ищем курьеров</div>
              </div>
            </div>
            <nav className="about__footer-nav footer-nav">
              <Link href="/" title="Главная" className="footer-nav__link">
                <button
                  type="button"
                  className="footer-nav__button footer-nav__button_back"
                ></button>
              </Link>
              <Link href="/order" title="Главная" className="footer-nav__link">
                <Button color="white"> Оставить заказ</Button>
              </Link>
              <Link href="order" title="Главная" className="footer-nav__link">
                <button
                  type="button"
                  className="footer-nav__button footer-nav__button_forward"
                ></button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
