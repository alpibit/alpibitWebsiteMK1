import React from 'react';
import Hero from "./components/about/Hero";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

import styles from "./App.module.css";
// import LazyLoad from 'react-lazyload';


const App = () => {

  return (
    <main>
      <Navbar/>
      <div className={styles.wrap}>
        <Hero />
        <Skills />
        {/* <LazyLoad height={300} offset={100}> */}
        <Portfolio />
        {/* </LazyLoad> */}
        <Contact />
      </div>
    </main>
  );
};

export default App;
