"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Heading2 from "@/components/ui/Heading2/Heading2";
import clsx from "clsx";
import faqData from "./FAQData";

interface IFAQItem {
  id: number;
  question: string;
  answer: string;
  link?: {
    href: string;
    text: string;
  };
  active: boolean;
  onClick: () => void;
}

const FAQ = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<null | number>(
    0
  );

  const onClick = (id: number) => {
    if (activeQuestionIndex !== id) setActiveQuestionIndex(id);
    else setActiveQuestionIndex(null);
  };
  return (
    <div className={styles.faq}>
      <div className="container">
        <div className={styles.faqBody}>
          <div className={styles.faqHeading}>
            <span className={styles.faqLegend}>Вопросы и ответы</span>
            <Heading2 color="black">Часто задаваемые вопросы</Heading2>
          </div>

          <ul className={styles.faqList}>
            {faqData.map((item, index) => {
              return (
                <FAQItem
                  key={index}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  link={item.link}
                  active={index === activeQuestionIndex}
                  onClick={() => onClick(index)}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer, link, active, onClick }: IFAQItem) => {
  return (
    <li className={styles.faqItem}>
      <div className={styles.faqItemQuestion} onClick={onClick}>
        <span className={styles.faqItemQuestionText}>{question}</span>
        <span
          className={clsx(styles.faqItemQuestionPlus, active && styles.active)}
        >
          +
        </span>
      </div>
      <div className={clsx(styles.faqItemAnswer, active && styles.active)}>
        <span>{answer}</span>
        {link && (
          <div>
            <a href={link.href} className={styles.faqItemLink}>
              {link.text}
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default FAQ;
