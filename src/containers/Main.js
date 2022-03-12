import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
