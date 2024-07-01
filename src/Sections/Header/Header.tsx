import ScrollToTop from "../../Components/ScrollToTop";
import ToggleButton from "../../Components/ToggleButton";

const Header = () => {
    return (
        <header id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>
                  <span>J</span>oel <span>K</span>asisi
                </h1>
              </a>
            </div>
            <div className="btn_container">
              <ToggleButton />
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li>
                  <a href="#hero" data-after="Home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" data-after="Skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" data-after="Projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#about" data-after="About">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" data-after="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </header>
    );
  };
  
  export default Header;