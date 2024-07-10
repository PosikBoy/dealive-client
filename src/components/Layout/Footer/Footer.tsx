"use client";

import Image from "next/image";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Heading2 from "@/components/Ui/Heading2/Heading2";
import vkLogo from "@/assets/icons/vk-logo.png";
import tgLogo from "@/assets/icons/tg-logo.png";
import phone from "@/assets/icons/phone.png";
import mail from "@/assets/icons/mail.png";
import { useForm } from "react-hook-form";
import InputField from "@/components/Ui/InputField/InputField";
import Button from "@/components/Ui/Button/Button";

interface HelpFormData {
  name: string;
  contact: string;
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HelpFormData>({
    mode: "onChange",
  });

  const handleSubmitForm = () => {};

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
                <span>PROD BY YOUNGG</span>
                <span>©DEALIVE.RU 2024</span>
              </div>
              <div className={styles.footer__headingColumn2}>
                <Heading2 className={styles.footer__headingTitle}>
                  Срочная доставка в Москве и области
                </Heading2>
                <a
                  href="https://t.me/dealivesupport "
                  className={styles.footer__headingTitle}
                >
                  Техподдержка
                </a>
                <a
                  href="tel:+79937017264"
                  className={styles.footer__headingTitle}
                  title="Номер компании"
                >
                  +7 (993) 701-72-64
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
            </div>{" "}
            <div className={styles.footer__bodyColumn}>
              <form
                className={styles.footer__bodyForm}
                onSubmit={handleSubmit(handleSubmitForm)}
              >
                <span className={styles.footer__bodyColumnTitle}>
                  Нужна помощь?
                </span>
                <InputField
                  color="white"
                  placeholder="Ваше имя"
                  type="text"
                  required
                  disabled
                  error={errors.name}
                  {...register("name")}
                />
                <InputField
                  color="white"
                  placeholder="Почта или номер"
                  type="text"
                  required
                  disabled
                  error={errors.contact}
                  {...register("contact")}
                />
                <Button type="submit" color="white">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
