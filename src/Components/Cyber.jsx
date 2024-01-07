import React from "react";
import Card from "./Card";
import Cyber1 from "../assets/cyber1.webp";
import Cyber2 from "../assets/cyber2.webp";
import Cyber3 from "../assets/cyber3.gif";
function Cyber() {
  const cardsData = [
    {
      image: Cyber1,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences ",
      text: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    },
    {
      image: Cyber2,
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      text: "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    },
    {
      image: Cyber3,
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      text: "Look around today, you will witness that we are more reliant on technology and devices",
    },
  ];
  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default Cyber;
