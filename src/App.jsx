/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohammed Varaliya",
  title: "Software Engineer",
  email: "mohammedvaraliya2661392@gmail.com",
  gitHub: "Mohammedvaraliya",
  instagram: "mohammed.varaliya.10",
  linkedIn: "mohammed-varaliya-800632231",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "rgba(11,83,148,0.75)";
const secondaryColor = "rgba(207,226,243,0.75)";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
