import React, { useEffect } from 'react';
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


const App: React.FC = () => {
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
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
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
  }, []);

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
    <Services />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </>
);

export default App;

