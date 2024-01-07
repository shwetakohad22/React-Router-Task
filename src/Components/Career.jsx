import React from "react";
import Card from "./Card";
import career1 from "../assets/career1.webp";
import career2 from "../assets/career2.webp";
import career3 from "../assets/career3.webp";
import career4 from "../assets/career4.webp";
import career5 from "../assets/career5.webp";

function Career() {
  const cardsData = [
    {
      image: career1,
      title: "Top 5 Product-Based Companies That Don’t Require Coding",
      text: "Every one of us wants to work in top product-based companies, Right? But, Not everyone",
    },
    {
      image: career2,
      title: "9 Best Product-Based Companies for Project Management",
      text: "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
    },
    {
      image: career3,
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      text: "The world is moving towards modernization leading to an increase in the popularity of civil",
    },
    {
      image: career4,
      title: "A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow",
      text: "With the growing concerns of digital security increasing day by day, organizations turn to ethical",
    },
    {
      image: career5,
      title:
        "Mechanical Engineering Resume: 9 Important Things To Look Out For",
      text: "With the development of technology, most of us started forgetting about mechanical engineering which pioneered",
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

export default Career;
