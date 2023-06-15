import React, { useState } from "react";

const Faq1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Wat is de levertijd van mijn bestelling?",
      answer: "De levertijd van je bestelling bedraagt doorgaans 2-3 werkdagen.",
      
    },{
        question: "Wat is de levertijd van mijn bestelling?",
      answer: "Er zijn vele variaties van passages van Lorem Ipsum beschikbaar maar het merendeel heeft te lijden gehad van wijzigingen in een of andere vorm, door ingevoegde humor of willekeurig gekozen woorden die nog niet half geloofwaardig ogen. Als u een passage uit Lorum Ipsum gaat gebruiken dient u zich ervan te verzekeren dat er niets beschamends midden in de tekst verborgen zit. Alle Lorum Ipsum generators op Internet hebben de eigenschap voorgedefinieerde stukken te herhalen waar nodig zodat dit de eerste echte generator is op internet. Het gebruikt een woordenlijst van 200 latijnse woorden gecombineerd met een handvol zinsstructuur modellen om een Lorum Ipsum te genereren die redelijk overkomt. De gegenereerde Lorum Ipsum is daardoor altijd vrij van herhaling, ingevoegde humor of ongebruikelijke woorden etc.",
    },{
        question: "Wat is de levertijd van mijn bestelling?",
      answer: "De levertijd van je bestelling bedraagt doorgaans 2-3 werkdagen.",
    },{
        question: "Wat is de levertijd van mijn bestelling?",
      answer: "De levertijd van je bestelling bedraagt doorgaans 2-3 werkdagen.",
    }
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
          <span className="arrow">&#x25BC;</span>
          <h3>{item.question}</h3>
          <p className={`answer ${activeIndex === index ? "show" : ""}`}>
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export { Faq1 };
