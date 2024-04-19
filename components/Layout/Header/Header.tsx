"use client";
import React, { useEffect } from "react";

import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useTypedSelector } from "@/hooks/redux.hooks";
import Brightness from "@/components/Ui/Brightness/Brightness";
import AuthForm from "@/components/Ui/AuthForm/AuthForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const userId = useTypedSelector((state) => state.auth.userId);

  const onLinkHandler = () => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      {isOpen && (
        <Brightness
          onClick={() => {
            document.body.classList.toggle("modal-open");
            setIsOpen(!isOpen);
          }}
        />
      )}
      {isAuthModalOpen && (
        <Brightness
          onClick={() => {
            document.body.classList.toggle("modal-open");
            setIsAuthModalOpen(!isAuthModalOpen);
          }}
        />
      )}
      {isAuthModalOpen && (
        <div className={styles.authForm}>
          <AuthForm />
        </div>
      )}
      <div className="container">
        <div className={styles.header__body}>
          <div className={styles.header__logo}>
            <Link
              href="/"
              className={styles.header__link}
              onClick={() => {
                document.body.classList.remove("modal-open");
                setIsOpen(false);
              }}
            >
              DEALIVE
            </Link>
          </div>
          <div className={styles.header__phone}>
            <a href="tel:+79897281597" title="Номер компании">
              +7 (989) 728-15-97
            </a>
          </div>
          <div
            className={
              styles.header__burger +
              " " +
              (isOpen ? styles.open : styles.closed)
            }
            onClick={onLinkHandler}
          >
            <span></span>
          </div>
          <nav
            className={
              styles.header__mobileNav +
              " " +
              (isOpen ? styles.open : styles.closed)
            }
          >
            <Link
              href="/"
              className={styles.header__mobileLogo}
              onClick={() => {
                document.body.classList.remove("modal-open");
                setIsOpen(false);
              }}
            >
              DEALIVE
            </Link>
            <Link
              href="/order"
              className={styles.header__mobileLink}
              onClick={onLinkHandler}
            >
              Оставить заказ
            </Link>
            <Link
              href="/reviews"
              className={styles.header__mobileLink}
              onClick={onLinkHandler}
            >
              Отзывы
            </Link>
            <Link
              href="/about"
              className={styles.header__mobileLink}
              onClick={onLinkHandler}
            >
              О нас
            </Link>
            {userId ? (
              <Link
                href="/profile"
                onClick={onLinkHandler}
                className={styles.header__mobileLink}
              >
                Профиль
              </Link>
            ) : (
              <button
                className={styles.header__mobileLink}
                onClick={() => {
                  onLinkHandler();
                  setIsAuthModalOpen(true);
                }}
              >
                Вход
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
