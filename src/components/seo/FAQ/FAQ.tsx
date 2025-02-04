"use client";
import React, { FC, useState } from "react";
import styles from "./FAQ.module.scss";
import Heading2 from "@/components/ui/Heading2/Heading2";
import clsx from "clsx";
import faqData from "./FAQData";

interface IFAQItemData {
  id: number;
  question: string;
  answer: string;
  link?: {
    href: string;
    text: string;
  };
}

interface IFAQItemProps extends IFAQItemData {
  active: boolean;
  onClick: () => void;
}

const FAQ: FC = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<null | number>(
    0
  );

  const onClick = (id: number) => {
    setActiveQuestionIndex((prev) => (prev === id ? null : id));
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
                  key={item.id}
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

const FAQItem = ({
  question,
  answer,
  link,
  active,
  onClick,
}: IFAQItemProps) => {
  return (
    <li className={styles.faqItem}>
      <button className={styles.faqItemQuestion} onClick={onClick}>
        <span className={styles.faqItemQuestionText}>{question}</span>
        <span
          className={clsx(styles.faqItemQuestionPlus, active && styles.active)}
        >
          +
        </span>
      </button>
      <div className={clsx(styles.faqItemAnswer, active && styles.active)}>
        <span>{answer}</span>
        {link && (
          <div>
            <a
              href={link.href}
              className={styles.faqItemLink}
              target="_blank"
              rel="nofollow"
            >
              {link.text}
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default FAQ;
