import React from 'react';
import Hero from "./components/about/Hero";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";


const App = () => {

  return (
    <main>
      <Navbar />
      <div className={styles.wrap}>
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

    </main>
  );
};

export default App;
