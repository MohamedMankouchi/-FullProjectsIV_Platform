import React, { useState } from "react";
import Arrow from "../icon/arrow-dropright.png";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Wat is de Final Show?",
      answer:
        "De Final Show is een jaarlijkse evenement dat plaatsvindt op het campus Kaai van Erasmus Hogeschool Brussel. Dit is een show dat gemaakt, van A tot Z, door de tweedejaars studenten van de opleiding Multimedia & Creative Technologie. Beste projecten, informatie over de categorieën evenals toffe activiteiten zullen komen hier aan bod .",
    },
    {
      question:
        "Zijn er praktijkgerichte activiteiten of workshops op de Final Show?",
      answer:
        "Er wordt een expo georganiseerd waar je projecten, gemaakt door studenten, in een VR headset kan bekijken. Deze zullen jouw in een andere dimensie brengen, dankzij die nieuwe technologieën. Projecten van de winnaars zullen gedemonstreerd worden.",
    },
    {
      question: "Waar en wanneer vind de Expo plaats van de Final Show?",
      answer:
        "Dit jaar vindt de expo van de Final Show plaats in het MediaLab, gelegen in het Erasmus Hogeschool Campus Kaai te Brussel, op vrijdag 23 juni 2023 van 17u tot 21u en op zaterdag 24juni 2023 van 10u30 tot 15u.",
    },
    {
      question: "Kunnen ouders en familieleden de Final Show bijwonen?",
      answer:
        "Ouders en familieleden zijn altijd welkom. Ze kunnen op onderstaande link klikken om hun plaats te reserveren. Deze zijn gratis, maar wel beperkt. Pak zo snel mogelijk jouw ticket online. https://www.eventbrite.com/e/tickets-final-show-2023-648852223467",
    },
    // Voeg hier nog vier andere vragen en antwoorden toe
  ];

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faqContainer">
      <h2>FAQ</h2>
      {faqData.map((item, index) => (
        <div
          className={`faqItem ${activeIndex === index ? "active_faq" : ""}`}
          key={index}
          onClick={() => toggleQuestion(index)}
        >
          <span className="arrow">
            <img src={Arrow} alt="" />
          </span>
          <h3>{item.question}</h3>
          <p className={`answer ${activeIndex === index ? "show" : ""}`}>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export { Faq };
