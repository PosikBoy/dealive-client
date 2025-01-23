import Image from "next/image";
import Link from "next/link";
import "./AboutPage.scss";

import Button from "@/components/ui/Button/Button";
import Card from "@/components/shared/Card/Card";
import Heading from "@/components/ui/Heading/Heading";
import Heading2 from "@/components/ui/Heading2/Heading2";

import PresentImage from "@/assets/images/present.png";
import RosesImage from "@/assets/images/roses.png";
import RoutingImage from "@/assets/images/routing.png";
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
          <div className="about__content">
            <Heading> Приветствуем вас на странице нашей компании!</Heading>
            <div className="about__features">
              <div className="about__row about__row_1">
                <div className="about__column">
                  <Heading2> Срочная доставка на ваших условиях!</Heading2>
                  <p className="about__text">
                    Ищете надежный и быстрый способ доставить посылку в Москве?
                    Мы — молодой и амбициозный сервис срочной доставки, который
                    делает процесс простым, удобным и честным для всех
                    участников.
                  </p>
                  <Heading2> Что нас отличает?</Heading2>
                  <div className="about__feature feature">
                    <div className="feature__number">1</div>
                    <div className="feature__text">
                      Вы назначаете цену: пользователи сами определяют стоимость
                      доставки, а курьеры выбирают заказы, которые им подходят
                    </div>
                  </div>
                  <div className="about__feature feature">
                    <div className="feature__number">2</div>
                    <div className="feature__text">
                      Честные условия для курьеров: мы берем фиксированную и
                      пониженную комиссию, чтобы каждый исполнитель зарабатывал
                      больше
                    </div>
                  </div>
                </div>
                <div className="about__image about__image_1">
                  <Image src={PresentImage} alt="Картинка подарка" />
                </div>
              </div>
              <div className="about__row about__row_2">
                <div className="about__image about__image_2">
                  <Image src={RoutingImage} alt="Картинка маршрута" />
                </div>
                <div className="about__column about__column_2">
                  <div className="about__feature feature">
                    <div className="feature__number">3</div>
                    <div className="feature__text">
                      Умные технологии для быстрой доставки: мы используем
                      системы оптимизации маршрутов и рекомендаций заказов, что
                      помогает нашим курьерам доставлять заказы быстрее и с
                      минимальными задержками.
                    </div>
                  </div>
                  <div className="about__feature feature">
                    <div className="feature__number">4</div>
                    <div className="feature__text">
                      Удобство для всех: простой интерфейс для заказчиков и
                      быстрый доступ к заявкам для курьеров.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card
              alt="Картинка роз"
              img={RosesImage}
              title="Доставляем что угодно и выполняем почти любые поручения!"
              subtitle="Мы делаем всё, чтобы ваш заказ был выполнен максимально удобно и точно в соответствии с вашими требованиями. Нужна доставка подарка, документов или особое поручение? Мы готовы помочь! Наш сервис позволяет не только выбрать параметры доставки, но и обсудить с курьером ваши индивидуальные запросы.
Каждый заказ уникален, и мы стараемся учесть все детали, чтобы вы остались довольны. Ваш комфорт и удовлетворённость — наш главный приоритет!"
              imageDescription="На фото то, что мы перевозим"
              transparent={true}
              reversed
            />
            <div className="about__mission">
              <Heading2> Наша миссия</Heading2>
              <p className="about__text">
                Мы стремимся сделать срочную доставку доступной, удобной и
                прозрачной для каждого. Наша цель — создать сервис, который
                объединяет заказчиков и курьеров, предоставляя честные условия
                для всех участников. Мы верим, что:
              </p>
              <p className="about__mission-text">
                Клиенты должны иметь свободу выбора условий доставки, которые им
                подходят
              </p>
              <p className="about__mission-text">
                Курьеры заслуживают справедливой оплаты за свой труд
              </p>
              <p className="about__mission-text">
                Современные технологии позволяют сделать доставку быстрее и
                эффективнее
              </p>
              <p className="about__text">
                Мы ежедневно работаем над тем, чтобы каждый заказ выполнялся
                максимально быстро и без лишних сложностей, а наш сервис
                становился синонимом надежности и комфорта.
              </p>
              <p className="about__text">С нами доставка — это просто! 🚀</p>
            </div>
            <div className="about__indicators-container">
              <Heading2> Наши показатели</Heading2>
              <div className="about__indicators indicators">
                <div className="indicators__indicator">
                  <div className="indicators__indicator-value">30</div>
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
                  <div className="indicators__indicator-title">
                    Ищем курьеров
                  </div>
                </div>
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
                <Button color="white"> Оставьте заказ на этой странице</Button>
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
