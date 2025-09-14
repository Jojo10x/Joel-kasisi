import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Sections/Projects/Projects";
const About = lazy(() => import("./Sections/About/About"));
const Contact = lazy(() => import("./Sections/Contact/Contact"));
const Footer = lazy(() => import("./Sections/Footer/Footer"));
import Services from "./Sections/ServiceSection/Services";
import Hero from "./Sections/Hero/Hero";
import Header from "./Sections/Header/Header";
import Portfolio from "./Pages/Portfolio";
import ProjectsPage from "./Pages/Projects";
import WebGL from "./Components/WebGL/WebGL";
import TextCarousel from "./Sections/TextCarousel/TextCarousel";
import Loader from "./Components/Loader/Loader";

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

  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    "#dc143c"
  );
  document.documentElement.style.setProperty(
    "--scrollbar-track-color",
    "#e0e0e0"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Header />
      <Hero />
      <WebGL>
        <Services />
        <TextCarousel />
        <Projects />
        <About />
        <Contact />
      </WebGL>
      <Footer />
    </Suspense>
  </>
);

export default App;
