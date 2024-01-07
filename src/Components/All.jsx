import React from "react";
import "./All.css";
import Card from "./Card";
import image1 from "../assets/fullstack1.webp";
import image2 from "../assets/fullstack2.webp";
import image3 from "../assets/fullstack3.webp";
import image5 from "../assets/fullstack5.webp";
import datasci1 from "../assets/Datascience1.webp";
import datasci2 from "../assets/datascience2.webp";
import datasci3 from "../assets/datascience4.webp";
import Cyber1 from "../assets/cyber1.webp";
import Cyber2 from "../assets/cyber2.webp";
import Cyber3 from "../assets/cyber3.gif";
import career1 from "../assets/career1.webp";
import career2 from "../assets/career2.webp";
import career3 from "../assets/career3.webp";
import career4 from "../assets/career4.webp";
import image6 from "../assets/fullstack6.jpg";
import career5 from "../assets/career5.webp";

function All() {
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
      image: image6,
      title: "Top 10 Tools Every Full-Stack Developer Should Master in 2024",
      text: "‍As a full-stack developer, having the right set of tools is crucial for your success.",
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

export default All;
