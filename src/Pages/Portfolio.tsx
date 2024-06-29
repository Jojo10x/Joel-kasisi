import { useNavigate } from "react-router";
import "./portfolio.scss";
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
        <Section text1="Beauty" text2=" Time" url="https://vrkr.ru/" paragraph="The aesthetic medicine clinic “Beauty Time” opened its doors in 2011. A cozy space in a historical mansion with an operating room and a hospital, cosmetology rooms and a SPA area is located in the very center of Moscow." />
        <Section text1="Kos" text2="Mart" url="https://kos-mart.ru/" paragraph="over 5 years of experience in cosmetics retail, as well as 3 years of experience in import. Having collected the 'skills' and 'pains' as a retail network, they have developed a unique platform for wholesale of cosmetics." />
        <Section text1="Lux" text2="Wear" url="https://luxwear.netlify.app/" paragraph="LuxWear is a clothing store. The main goal of the project is to develop a clothing store with a modern and stylish design. " />
        <Section
          text1="Lux"
          text2="Shoes"
          url="https://luxshoes.netlify.app/"
          paragraph="LuxShoes is a clothing store. The main goal of the project is to develop a clothing store with a modern and stylish design. "
        />
        <Section
          text1="Elite"
          text2="Cars"
          url="https://elitecarss.netlify.app/"
          paragraph="The Elite Cars is a car brand. The main goal of the project is to sell car brands with a modern and stylish design. "
        />
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
              <SectionBtn
                heading="Buy Caribbean Home"
                url="https://buycaribbeanhome.com/"
                text="BuyCaribbeanHome.com is our web portal that covers the sale of properties at the pre-construction stage in the Caribbean region."
              />

              <SectionBtn heading="NpNgo" url="https://npngo.ru"  text="Website about the National Hematological Society (NHS). It discusses activities, news, and publications of the NHS. The NHS organizes conferences and publishes materials on the field of hematology."/>

              <SectionBtn
                heading="VocalizeIQ"
                url="https://vocalizeiq.netlify.app"
                text="Thesis - Development of a speech recognition web application for learning a foreign language."
              />

              <SectionBtn
                heading="Patterns"
                url="https://jojo10x.github.io/patternpp"
                text="Patterns - A game in which implements design patterns. "
              />

              <SectionBtn
                heading="Countries API"
                url="https://apiicountries.netlify.app"
                text="Countries API - A web application that provides information about countries. "
              />
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
              <SectionBtn
                url="https://covidstats.netlify.app"
                heading="Covid States"
                text="Covid States - A web application that provides information about the Covid-19. "
              />
              <SectionBtn
                url="https://github.com/Jojo10x/AnimalList"
                heading="Animal List"
                text="Animal List - A web application that provides information about animals. "
              />
              <SectionBtn
                url="https://github.com/Jojo10x/TestTaskValantis"
                heading="Valantis"

              />
              <SectionBtn
                url="https://github.com/Jojo10x/GoodsList"
                heading="Goods List"
              />
              <SectionBtn
                url="https://todos-ten-chi.vercel.app/"
                heading="TODO"
                text="ToDo List. "
              />
            </div>
          </div>
        </section>
        <ScrollToTop />
        <Footer />
      </>
    );
  };
  
  export default Portfolio;

//   https://react-device-frameset.zheeeng.me/