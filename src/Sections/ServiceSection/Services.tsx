import NodeJS from "../../assets/node-js-2.png";
import Next from "../../assets/next.svg";
import { useTheme } from "../../contexts/useTheme";

const Services = () => {
  const { isDarkMode } = useTheme();
  return (
    <section id="services" className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="services container">
        <div className="service-top">
          <h1 className="section-title hidden right">
            Ski<span>ll</span>s
          </h1>
        </div>
        <div className="service-bottom ">
          <div className="service-item special-need logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/color/344/html-5--v1.png"
                alt="HTML"
              />
            </div>
            <p>HTML</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img src="https://img.icons8.com/color/344/css3.png" alt="CSS" />
            </div>
            <p>CSS</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/color/344/javascript--v1.png"
                alt="JavaScript"
              />
            </div>
            <p>JavaScript</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/fluency/512/typescript--v1.png"
                alt="TypeScript"
              />
            </div>
            <p>TypeScript</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src={
                  isDarkMode
                    ? "https://img.icons8.com/?size=100&id=N3G7bBnphi53&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=35989&format=png&color=000000"
                }
                alt="React Native"
              />
            </div>
            <p>React Native</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/office/344/react.png"
                alt="React"
              />
            </div>
            <p>React</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img src={NodeJS} alt="Node.js" />
            </div>
            <p>Node.js</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                alt="Python"
              />
            </div>
            <p>Python</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src={
                  isDarkMode
                    ? Next
                    : "https://cdn.worldvectorlogo.com/logos/next-js.svg"
                }
                alt="Next.js"
              />
            </div>
            <p>Next.js</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                alt="Git"
              />
            </div>
            <p>Git</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                alt="postgreSQL"
              />
            </div>
            <p>postgreSQL</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"
                alt="MySQL"
              />
            </div>
            <p>MySQL</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                alt="MongoDB"
              />
            </div>
            <p>MongoDB</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
                alt="fireBase"
              />
            </div>
            <p>fireBase</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
                alt="Docker"
              />
            </div>
            <p>Docker</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000"
                alt="Redux"
              />
            </div>
            <p>Redux</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=KRA1PoZgRrca&format=png&color=000000"
                alt="GraphQL"
              />
            </div>
            <p>GraphQL</p>
          </div>
          <div className="service-item logo hidden">
            <div className="icon">
              <img
                src="https://img.icons8.com/?size=100&id=55497&format=png&color=000000"
                alt="REST API"
              />
            </div>
            <p>REST API</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
