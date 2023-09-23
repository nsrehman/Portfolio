import { useState } from "react";
import "./App.css";
import ProjectList from "./Components/ProjectComponents/ProjectList";
import About from "./Components/AboutComponents/About";
import Header from "./Components/NavComponents/Header";
import ExperienceList from "./Components/ExperienceComponents/ExperienceList";
import Introduction from "./Components/AboutComponents/Introduction";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Components/FooterComponent/Footer";
import Contact from "./Components/ContactComponents/Contact";

library.add(fab);

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <About />
      <ProjectList />
      <ExperienceList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
