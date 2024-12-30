"use client";
import { useEffect, useState } from "react";
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
    localStorage.setItem("allowCookie", JSON.stringify(true));
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className={styles.cookieAgreementContainer}>
          <div className={styles.cookieAgreement}>
            <div className={styles.text}>
              Сайт использует файлы cookies, продолжая использовать dealive.ru,
              вы соглашаетесь с
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
        </div>
      )}
    </>
  );
};

export default CookieAgreement;
