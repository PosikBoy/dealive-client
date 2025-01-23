"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import AuthForm from "@/components/features/AuthForm/AuthForm";

import { useTypedSelector } from "@/hooks/redux.hooks";
import { IClient } from "@/types/client.interface";

import styles from "./header.module.scss";
import ModalWindow from "@/components/shared/ModalWindow/ModalWindow";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [client, setClient] = useState<null | IClient>(null);
  const storageClient = useTypedSelector((state) => state.auth.client);
  const isOpenedClassName = isOpen ? " " + styles.opened : " " + styles.closed;

  const onLinkHandler = () => {
    document.body.classList.toggle("modal-open");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsAuthModalOpen(false);
    setClient(storageClient);
  }, [storageClient]);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerBody}>
            <div className={styles.headerLogo}>
              <Link
                href="/"
                className={styles.headerLink}
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
              className={styles.headerBurger + isOpenedClassName}
              onClick={onLinkHandler}
            >
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <nav
        className={styles.nav + isOpenedClassName}
        onClick={() => {
          if (isOpen) {
            document.body.classList.remove("modal-open");
            setIsOpen(false);
          }
        }}
      >
        <div
          className={styles.navBody + isOpenedClassName}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={styles.navLogo}
                onClick={() => {
                  document.body.classList.remove("modal-open");
                  setIsOpen(false);
                }}
              >
                DEALIVE
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/order"
                className={styles.navLink}
                onClick={onLinkHandler}
              >
                Оставить заказ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/about"
                className={styles.navLink}
                onClick={onLinkHandler}
              >
                О нас
              </Link>
            </li>
            <li className={styles.navItem}>
              {client?.userId ? (
                <Link
                  href="/profile"
                  onClick={onLinkHandler}
                  className={styles.navLink}
                >
                  Профиль
                </Link>
              ) : (
                <button
                  className={styles.navLink}
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsOpen(!isOpen);
                    document.body.classList.add("modal-open");
                  }}
                >
                  Вход
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {isAuthModalOpen && (
        <ModalWindow
          title="Вход в личный кабинет"
          callback={() => {
            setIsAuthModalOpen(false);
            document.body.classList.remove("modal-open");
          }}
        >
          <AuthForm />
        </ModalWindow>
      )}
    </>
  );
};

export default Header;
