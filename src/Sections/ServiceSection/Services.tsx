import NodeJS from "../../assets/node-js-2.png"
import GitLogo from "../../assets/icons8-git-48.png"
import { useTheme } from "../../contexts/ThemeContext";

const Services = () => {
  const { isDarkMode } = useTheme();
    return (
        <section id="services" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title hidden right">
              Ski<span>ll</span>s
            </h1>
          </div>
          <div className="service-bottom ">
            <div className="service-item special-need logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/color/344/html-5--v1.png" />
              </div>
              <p>
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/color/344/css3.png" />
              </div>
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/color/344/javascript--v1.png" />
              </div>
              <p>
                JavaScript is a programming language used for web development.It renders in interactive and
                dynamic fashion.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/fluency/512/typescript--v1.png" />
              </div>
              <p>
                TypeScript is a syntactic superset of JavaScript. It means that
                TypeScript adds syntax on top of JavaScript. It adds a type system.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/office/344/react.png" />
              </div>
              <p>
                React is a JavaScript library. Its aim is
                to allow developers to easily create fast user interfaces for
                websites and applications alike.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/?size=100&id=35989&format=png&color=000000" />
              </div>
              <p>
              React Native is an open-source UI software framework used to develop applications for Android and iOS using the React framework.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src={NodeJS} />
              </div>
              <p>
                Node.js is a cross-platform, open-source JavaScript runtime
                environment. Developers use it for server-side scripting.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src={GitLogo} />
              </div>
              <p>
                Git is a distributed version control system.Its goals include
                speed, data integrity, and support for distributed, non-linear
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;