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

  const user = useTypedSelector((state) => state.auth.user);
  const isOpenedClassName = isOpen ? " " + styles.open : " " + styles.closed;
  const onLinkHandler = () => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsAuthModalOpen(false);
  }, [user]);
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
            document.body.classList.remove("modal-open");
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
              title="Оставить заказ на доставку"
              onClick={() => {
                document.body.classList.remove("modal-open");
                setIsOpen(false);
              }}
            >
              DEALIVE
            </Link>
          </div>
          <div className={styles.header__phone}>
            <a href="tel:+79937017264" title="Номер компании">
              +7 (993) 701-72-64
            </a>
          </div>
          <div
            className={styles.header__burger + isOpenedClassName}
            onClick={onLinkHandler}
          >
            <span></span>
          </div>
          <nav className={styles.header__mobileNav + isOpenedClassName}>
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
              href="/about"
              className={styles.header__mobileLink}
              onClick={onLinkHandler}
            >
              О нас
            </Link>
            {user?.id ? (
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
