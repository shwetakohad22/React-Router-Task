import React from "react";
import Card from "./Card";
import datasci1 from "../assets/Datascience1.webp";
import datasci2 from "../assets/datascience2.webp";
import datasci3 from "../assets/datascience4.webp";
function DataScience() {
  const cardsData = [
    {
      image: datasci1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024  ",
      text: "Are you someone who’s not interested in coding, but wants to get placed in tech",
    },
    {
      image: datasci2,
      title: "Top Product-Based Companies for Data Science Freshers",
      text: "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    },

    {
      image: datasci3,
      title:
        "What is the Difference between Data Science and Data Engineering?",
      text: "India has been making some serious waves in the world of data. Just like the",
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

export default DataScience;
