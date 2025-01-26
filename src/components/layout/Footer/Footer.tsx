"use client";

import Image from "next/image";
import Link from "next/link";
// import { useForm } from "react-hook-form";

import Heading2 from "@/components/ui/Heading2/Heading2";

import styles from "./Footer.module.scss";

import mail from "@/assets/icons/mail.png";
import phone from "@/assets/icons/phone.png";
import tgLogo from "@/assets/icons/tg-logo.png";
import vkLogo from "@/assets/icons/vk-logo.png";

// interface HelpFormData {
//   name: string;
//   contact: string;
// }

const Footer = () => {
  // const {
  //   formState: { errors },
  // } = useForm<HelpFormData>({
  //   mode: "onChange",
  // });

  return (
    <>
      <div className={styles.footerTop}></div>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__heading}>
            <div className={styles.footer__headingRow}>
              <div className={styles.footer__headingColumn}>
                <Link href="/">
                  <span className={styles.footer__logo}>DEALIVE</span>
                </Link>
                <span>prod. by yungg</span>
                <span>dealive.ru 2024-2025</span>
              </div>
              <div className={styles.footer__headingColumn2}>
                <Heading2 className={styles.footer__headingTitle}>
                  Срочная доставка в Москве и Подмосковье
                </Heading2>
                <a
                  href="https://t.me/dealivesupport "
                  className={styles.footer__headingTitle}
                >
                  Техподдержка
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer__body}>
            <div className={styles.footer__bodyColumn}>
              <span className={styles.footer__bodyColumnTitle}>Информация</span>
              <Link href="/about" className={styles.footer__bodyLink}>
                - О компании
              </Link>
              <Link href="/privacy.docx" className={styles.footer__bodyLink}>
                - Политика конфиденциальности
              </Link>
              {/* <Link href="/help" className={styles.footer__bodyLink}>
                - Руководство пользователя
              </Link> */}
              {/* <Link href="/faq" className={styles.footer__bodyLink}>
                - FAQ
              </Link> */}
            </div>
            <div className={styles.footer__bodyColumn}>
              <span className={styles.footer__bodyColumnTitle}>
                Присоединяйтесь!
              </span>
              <div className={styles.footer__bodySocials}>
                <Link
                  href="https://vk.com/dealive"
                  className={styles.footer__bodySocial}
                  target="_blank"
                >
                  <Image src={vkLogo} alt="Лого вк" width={25} height={25} />
                </Link>
                <Link
                  href="https://t.me/dealiveru"
                  className={styles.footer__bodySocial}
                  target="_blank"
                >
                  <Image src={tgLogo} alt="Лого тг" width={25} height={25} />
                </Link>
              </div>
              <span className={styles.footer__bodyColumnTitle}>Аккаунт</span>
              <Link href="/login" className={styles.footer__bodyLink}>
                - Вход / регистрация
              </Link>
              <Link href="/profile" className={styles.footer__bodyLink}>
                - Мои заказы
              </Link>
              <Link href="/profile" className={styles.footer__bodyLink}>
                - Мой профиль
              </Link>
            </div>
            <div className={styles.footer__bodyColumn}>
              <span className={styles.footer__bodyColumnTitle}>Контакты</span>
              <div className={styles.footer__bodyContactPhone}>
                <Image src={phone} alt="Телефон" width={20} height={20} />
                <a href="tel:+79937017264" className={styles.footer__bodyLink}>
                  +7 (993) 701-72-64
                </a>
              </div>
              {/* <div className={styles.footer__bodyContactPhone}>
                <Image src={phone} alt="Телефон" width={20} height={20} />
                <a href="tel:+79939281597" className={styles.footer__bodyLink}>
                  +7 (993) 928-15-97
                </a>
              </div> */}
              <div className={styles.footer__bodyContactEmail}>
                <Image src={mail} alt="Почта" width={20} height={20} />
                <a
                  href="mailto:dealivehelp@gmail.com"
                  className={styles.footer__bodyLink}
                >
                  dealivehelp@gmail.com
                </a>
              </div>
              <span className={styles.footer__bodyColumnTitle}>
                График работы
              </span>
              <span className={styles.footer__bodyLink}>
                Курьеры видят заказы 24/7
              </span>
              <a
                href="https://t.me/dealivesupport "
                className={styles.footer__bodyLink}
              >
                Стать курьером (кликабельно)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
