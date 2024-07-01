import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const goToPortfolio = () => {
    navigate("/portfolio");
  };
    return (
        <section id="hero">
        <div className="hero container">
          <div>
            <h1>
              Welcome, <span></span>
            </h1>
            <h1>
              My Name is <span></span>
            </h1>
            <h1>
              Joel Kasisi <span></span>
            </h1>
            {/* <a onClick={goToPortfolio}  type="button" className="cta">
              Portfolio
            </a> */}
            <button onClick={goToPortfolio} className="cta">Portfolio</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;