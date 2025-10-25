import ShootingStarAnimation from "../../Components/ShootingStarAnimation";
import Telegram from "../../assets/icons8-telegram-app-48.png"
import Linkedin from "../../assets/icons8-linkedin-48.png"
import Insta from "../../assets/icons8-instagram-48.png"
import { useTheme } from "../../contexts/useTheme";

const Footer = () => {
  const { isDarkMode } = useTheme();
    return (
        <footer id="footer" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="footer container" >
        <ShootingStarAnimation />
          {/* <div className="brand">
            <h1>
              <span>J</span>oel <span>K</span>asisi
            </h1>
          </div> */}
          <h2></h2>
          <div className="social-icon">
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/joel-kasisi-008949215/"
                target="blank"
              >
                <img
                  src={Linkedin}
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://t.me/Joeyzaaki"
                target="blank"
              >
                <img
                  src={Telegram}
                  alt="Telegram"
                />
              </a>
            </div>
                        <div className="social-item">
              <a href="https://vk.com/joeyzaaki" target="blank">
                <img
                  src="https://img.icons8.com/color/452/vk-circled.png"
                  alt="VK"
                />
              </a>
            </div>
                        <div className="social-item">
              <a href="https://www.instagram.com/joeyzaaki" target="blank">
                <img
                  src={Insta}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <p>
            <a href="https://pixeltochka.netlify.app/" target="blank">Powered by PT</a>  
            {/* <span id="date"></span> */}
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;