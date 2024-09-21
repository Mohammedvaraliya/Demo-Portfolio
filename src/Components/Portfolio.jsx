/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SmartDesk-djangoApp",
    description:
      "SmartDesk is a web application developed using the Django framework. It provides user authentication and enables users to create and join rooms where they can interact with other users who share similar interests in technology. This project aims to create a platform that fosters collaboration and knowledge sharing within the student community.",
    url: "https://github.com/Mohammedvaraliya/SmartDesk-djangoApp",
  },
  {
    title: "AllYouNeedNoteBook-ReactApp",
    description:
      "AllYouNeedNoteBook-ReactApp is a notebook app that allows users to create an account, add notes, and manage their notes. This application is built using React and Node.js, and it uses MongoDB Atlas to store all user accounts and notes.",
    url: "https://github.com/Mohammedvaraliya/AllYouNeedNoteBook-ReactApp",
  },
  {
    title: "AI-Amplify-Hackathon",
    description:
      "This repository contains the solutions to three problem statements completed during the hackathon. Each problem statement is categorized based on its difficulty level: Easy, Moderate, and Hard.",
    url: "https://github.com/Mohammedvaraliya/AI-Amplify-Hackathon",
  },
  {
    title: "GoogSoft-ReactApp",
    description:
      "GoogSoft is a web application that mimics the functionality of Google Search, allowing users to search for web pages, images, news articles, and videos. The application is built using ReactJS and integrates with several RapidAPIs to provide real-time search results.",
    url: "https://github.com/Mohammedvaraliya/GoogSoft-ReactApp",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding"
      id="portfolio"
      style={{
        background: "rgba(159,197,232,0.75)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "90%",
              borderRadius: "16px",
              backgroundColor: "#FFD966",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-2px",
                bottom: "-2px",
                left: "-2px",
                right: "-2px",
                backgroundImage:
                  "linear-gradient(45deg, rgba(255, 217, 102, 1) 0%, rgba(255, 255, 255, 0) 70%)",
                zIndex: "-1",
                borderRadius: "18px",
              }}
            />
            <img
              src={image}
              alt={imageAltText}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 40px 80px rgba(255, 217, 102, 0.5)",
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                background: "rgba(207,226,243,0.75)",
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
