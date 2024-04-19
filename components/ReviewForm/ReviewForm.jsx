import { useStores } from "@/stores/root-store-context";
import { observer } from "mobx-react-lite";
import "./ReviewForm.css";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
const ReviewForm = observer(() => {
  const { reviewForm } = useStores();
  const [modalWindow, setModalWindow] = useState(false);
  const [errorModalWindow, setErrorModalWindow] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "rating":
        if ((value >= 1 && value <= 5) || value == "") {
          reviewForm.setRating(value);
        }
        break;
      case "title":
        if (value.length < 250) {
          reviewForm.setTitle(value);
        }

        break;
      case "advantages":
        if (value.length < 250) {
          reviewForm.setAdvantages(value);
        }
        break;
      case "disadvantages":
        if (value.length < 250) {
          reviewForm.setDisadvantages(value);
        }

        break;
      case "description":
        if (value.length < 250) {
          reviewForm.setDescription(value);
        }
        break;
      default:
        break;
    }
  };

  const sendReview = async (e) => {
    e.preventDefault();
    if (reviewForm.rating != "") {
      try {
        console.log("Try to send review");
        const token = localStorage.getItem("token");
        const result = await fetch("http://localhost:5000/sendreview", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: reviewForm.rating,
            advantages: reviewForm.advantages,
            disadvantages: reviewForm.disadvantages,
            description: reviewForm.description,
          }),
        });
        if (result.ok) {
          setModalWindow(true);
          reviewForm.clearStore();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
      setErrorModalWindow(true);
    }
  };
  return (
    <div className="review">
      <div className="container">
        <div className="review__body">
          <div className="review__title">Оставьте отзыв!</div>
          <div className="review__subtitle">
            Нам важно услышать ваше мнение!
          </div>
          <div className="review__review">
            <div className="review__review-rating">
              <p>Ваша оценка от 1 до 5*</p>
              <input
                type="text"
                min="1"
                max="5"
                name="rating"
                className="review__review-rating-field"
                value={reviewForm.rating}
                onChange={handleInputChange}
              />
            </div>
            <div className="review__review-advantages">
              <p>Опишите преимущества сервиса (до 250 символов)</p>
              <textarea
                className="review__review-advantages-field review-field"
                name="advantages"
                value={reviewForm.advantages}
                onChange={handleInputChange}
              />
            </div>
            <div className="review__review-disadvantages">
              <p>Опишите недостатки сервиса (до 250 символов)</p>
              <textarea
                name="disadvantages"
                className="review__review-disadvantages-field review-field"
                value={reviewForm.disadvantages}
                onChange={handleInputChange}
              />
            </div>
            <div className="review__review-description">
              <p>Если есть что сказать еще (до 250 символов)</p>
              <textarea
                className="review__review-description-field review-field"
                value={reviewForm.description}
                name="description"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button className="review__review-button" onClick={sendReview}>
            Отправить отзыв
          </button>
        </div>
      </div>
      {modalWindow && (
        <ModalWindow
          message="Спасибо за отзыв!"
          textButton="Закрыть окно"
          description="Мы ответим вам на почту(если вы ее указали)"
          onClick={() => setModalWindow(false)}
        />
      )}
      {errorModalWindow && (
        <ModalWindow
          message="Заполните все обязательные поля"
          textButton="Закрыть окно"
          description="Они отмечены звездочкой"
          onClick={() => setErrorModalWindow(false)}
        />
      )}
    </div>
  );
});

export default ReviewForm;
