import { useEffect, useState } from "react";
import JoMoscow from "../../assets/PXL_20220330_092544474_Original.jpeg"
import { useTheme } from "../../contexts/useTheme";


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const imageElement = document.querySelector(".about-img");
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  return (
    <section id="about" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="about container">
        <div className="col-left">
          <div className={`about-img ${isVisible ? "visible" : ""}`}>
            <img src={JoMoscow} alt="Joel Kasisi Picture" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title right hidden">
            About <span>me</span>
          </h1>
          <h2 className="right hidden">Software Engineer</h2>
          <p className="right hidden">
          Over 2 years of experience, with a bachelor's degree in Software and Information Systems from Plekhanov Russian University of Economics.
          </p>
          <a
            href="https://drive.google.com/file/d/1wwBFMY652czfQrLa7n9r3m1HW2db8sYf/view?usp=sharing"
            target="blank"
            className="cta right hidden"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
