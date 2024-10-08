import React, { useEffect, useState } from 'react';
import './App.css'
import Projects from './Sections/Projects/Projects';
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';
import Services from './Sections/ServiceSection/Services';
import Hero from './Sections/Hero/Hero';
import Header from './Sections/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Portfolio from './Pages/Portfolio';
import WebGL from './Components/WebGL/WebGL';


const App: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const dateElement = document.getElementById("date");
    if (dateElement) {
      dateElement.innerHTML = new Date().getFullYear().toString();
    }

    const hamburger = document.querySelector(
      ".header .nav-bar .nav-list .hamburger"
    );
    const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
    const menuItem = document.querySelectorAll(
      ".header .nav-bar .nav-list ul li a"
    );
    const header = document.querySelector(".header.container");

    const handleHamburgerClick = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerElement = header as HTMLDivElement | null;

      if (headerElement) {
        headerElement.style.backgroundColor =
          scrollPosition > 550 ? "#29323c" : "transparent";
      }

      setPrevScrollPos(scrollPosition);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const scrollDown = window.scrollY > prevScrollPos;

        if (entry.isIntersecting && scrollDown) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    hamburger?.addEventListener("click", handleHamburgerClick);
    document.addEventListener("scroll", handleScroll);

    menuItem.forEach((item) => {
      item.addEventListener("click", handleHamburgerClick);
    });

    return () => {
      hamburger?.removeEventListener("click", handleHamburgerClick);
      document.removeEventListener("scroll", handleScroll);
      menuItem.forEach((item) => {
        item.removeEventListener("click", handleHamburgerClick);
      });
    };
  }, [prevScrollPos]);

  document.documentElement.style.setProperty('--scrollbar-thumb-color', '#6200ee');
document.documentElement.style.setProperty('--scrollbar-track-color', '#e0e0e0');



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <>
    <Header />
    <Hero />
    <WebGL>
   
    <Services />
    <Projects />
    <About />
    <Contact />
   
    </WebGL>
    <Footer />
   
  </>
);

export default App;

