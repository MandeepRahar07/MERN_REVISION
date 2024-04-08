import React, { FunctionComponent, useState } from "react";
import styles from "./FAQCardContainer.module.css";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Can I find suppliers and manufacturers for my designs?",
    answer:
      "We provide a curated marketplace where designers can discover verified suppliers and manufacturers who share their commitment to quality and sustainability."
  },
  {
    question: "How does the community portal on PIIo Hide work?",
    answer: "Explanation about how the community portal works goes here."
  },
  {
    question:
      "How does your platform facilitate communication between designers, suppliers, and manufacturers?",
    answer:
      "Description of how the platform enables communication between different parties."
  },
  {
    question:
      "Can I specify my preferences for collaborations, such as location or specialization?",
    answer:
      "Explanation of whether users can specify preferences for collaborations."
  }
];

const FAQCardContainer: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.fAQCardContainer}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faqCard} ${
            activeIndex === index ? styles.active : ""
          }`}
          onClick={() => toggleActive(index)}
        >
          <div className={styles.title}>
            <h3 className={styles.question}>{faq.question}</h3>
            <img
              className={styles.icon}
              src={activeIndex === index ? "/remove.svg" : "/add.svg"}
              alt=""
            />
          </div>
          {activeIndex === index && (
            <div className={styles.answer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQCardContainer;
