import { useEffect, useState, useRef } from "react";
import JoMoscow from "../../assets/PXL_20220330_092544474_Original.jpeg"
import { useTheme } from "../../contexts/useTheme";

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { isDarkMode } = useTheme();
  const imageRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        observer.disconnect();
      }
    }, options);

    const imageElement = imageRef.current;
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section id="about" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="about container">
        <div className="col-left">
          <div 
            ref={imageRef}
            className={`about-img ${hasAnimated ? "visible" : ""}`}
          >
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
            href="https://drive.google.com/file/d/1_iIzymdjeK6YwN6rSINzgYBOctLF07Z7/view?usp=sharing"
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