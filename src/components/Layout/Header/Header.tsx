"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import AuthForm from "@/components/Ui/AuthForm/AuthForm";
import Brightness from "@/components/Ui/Brightness/Brightness";

import { useTypedSelector } from "@/hooks/redux.hooks";
import { IClient } from "@/types/client.interface";

import styles from "./header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [client, setClient] = useState<null | IClient>(null);
  const storageClient = useTypedSelector((state) => state.auth.client);
  const isOpenedClassName = isOpen ? " " + styles.open : " " + styles.closed;

  const onLinkHandler = () => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsAuthModalOpen(false);
    setClient(storageClient);
  }, [storageClient]);

  return (
    <header className={styles.header}>
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
            {client?.userId ? (
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
    </header>
  );
};

export default Header;
