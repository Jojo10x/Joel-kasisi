import { useNavigate } from "react-router";
import "./portfolio.scss";
import { DeviceFrameset } from "react-device-frameset";
import 'react-device-frameset/styles/marvel-devices.min.css'
import Section from "../components/PortfolioSection/Section";
import SectionBtn from "../components/PortfolioSection/SectionBtn";
import Footer from "../Sections/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";


const Portfolio = () => {
   const navigate = useNavigate();
   const goToHome = () => {
     navigate("/");
   };
    return (
      <>
        <div className="portfolio-header">
          <h1 className="section-title">
            Port<span>folio</span>
          </h1>
          <button className="cta" onClick={goToHome}>
            Home
          </button>
        </div>
        <Section text1="Beauty" text2=" Time"  url="https://vrkr.ru/"/>
        <Section text1="Kos" text2="Mart"  url="https://kos-mart.ru/"/>
        <Section text1="Lux" text2="Wear"  url="https://luxwear.netlify.app/"/>
        <Section text1="Lux" text2="Shoes"  url="https://luxshoes.netlify.app/"/>
        <Section text1="Elite" text2="Cars"  url="https://elitecarss.netlify.app/"/>  
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                <a href="#" target="_blank">
                  Oth<span>ers</span>
                </a>
              </h1>
            </div>
            <div className="section-block">
              <SectionBtn heading="Buy Caribbean Home" url="https://buycaribbeanhome.com/"/>
              <br />
              <SectionBtn heading="NpNgo" url="https://npngo.ru"/>
              <br />
              <SectionBtn heading="VocalizeIQ" url="https://vocalizeiq.netlify.app" text="Thesis - Development of a speech recognition web application for learning a foreign language."/>
              <br />
              <SectionBtn heading="Patterns" url="https://jojo10x.github.io/patternpp"/>
              <br />
              <SectionBtn heading="Countries API" url="https://apiicountries.netlify.app"/>
             
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">
                <a href="https://luxshoes.netlify.app/" target="_blank">
                  Interview<span> Tests</span>
                </a>
              </h1>
            </div>
            <div className="section-block">
              <SectionBtn  url="https://covidstats.netlify.app" heading="Covid States"/>
              <br />
              <SectionBtn  url="https://github.com/Jojo10x/AnimalList" heading="Animal List"/>
              <br />
              <SectionBtn  url="https://github.com/Jojo10x/TestTaskValantis" heading="Valantis"/>
              <br />
              <SectionBtn  url="https://github.com/Jojo10x/GoodsList" heading="Goods List"/>
              <br />
              <SectionBtn  url="https://todos-ten-chi.vercel.app/" heading="TODO"/>  
            </div>
          </div>
        </section>
        <ScrollToTop/>
        <Footer/>
        
      </>
    );
  };
  
  export default Portfolio;

//   https://react-device-frameset.zheeeng.me/