"use client";
import { FC, useEffect, useState } from "react";
import styles from "./CookieAgreement.module.scss";

const CookieAgreement = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    // Проверить, есть ли сохраненные настройки в localStorage
    const savedAllowCookies = localStorage.getItem("allowCookie");
    // Показать модальное окно, если настройки не были сохранены
    if (savedAllowCookies === null) {
      setShowModal(true);
    }
  }, []);

  const handleSaveSettings = () => {
    // Сохранить настройки в localStorage
    localStorage.setItem("allowCookie", JSON.stringify(true));
    // Скрыть модальное окно
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className={styles.cookieAgreement}>
          <div className={styles.text}>
            Сайт использует файлы cookies, продолжая использовать dealive.ru, вы
            соглашаетесь с
            <a href="/policy.docx" className={styles.link}>
              {" "}
              политикой обработки персональных данных
            </a>
          </div>
          <button
            type="button"
            onClick={handleSaveSettings}
            className={styles.button}
          >
            Согласен!
          </button>
        </div>
      )}
    </>
  );
};

export default CookieAgreement;
