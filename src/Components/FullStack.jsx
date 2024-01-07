import React from "react";
import Card from "./Card";
import image1 from "../assets/fullstack1.webp";
import image2 from "../assets/fullstack2.webp";
import image3 from "../assets/fullstack3.webp";
import image5 from "../assets/fullstack5.webp";
import image6 from "../assets/fullstack6.jpg";

function FullStack() {
  const cardsData = [
    {
      image: image1,
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      text: "When you’re hiring a full-stack developer, what are the most important things you look for?",
    },
    {
      image: image2,
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      text: "A Full Stack Developer is a tech all-rounder. They work on both the front and",
    },
    {
      image: image3,
      title: "7 Best Full-Stack Development Online Courses [2024]",
      text: "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
    },
    {
      image: image5,
      title: "Best Books to Learn Full-Stack Development",
      text: "Are you interested in becoming a full-stack developer but not sure where to start? In",
    },
    {
      image: image6,
      title: "Top 10 Tools Every Full-Stack Developer Should Master in 2024",
      text: "‍As a full-stack developer, having the right set of tools is crucial for your success.",
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

export default FullStack;
