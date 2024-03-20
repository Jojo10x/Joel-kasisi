import React, {  useState,useEffect } from 'react';
import './App.css'
import NodeJS from "./assets/node-js-2.png"
import GitLogo from "./assets/icons8-git-48.png"
import JoMoscow from "./assets/PXL_20220330_092544474_Original.jpeg"
import RotatingText from './RotatingText';
import GitHUb from './assets/github-mark/github-mark.svg'
import ToggleButton from './ToggleButton';


const App: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null, 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const imageElement = document.querySelector('.about-img');
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);
  

  useEffect(() => {
    const dateElement = document.getElementById('date');
    if (dateElement) {
      dateElement.innerHTML = new Date().getFullYear().toString();
    }

    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
    const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    const handleHamburgerClick = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerElement = header as HTMLDivElement | null;
      if (headerElement) {
        headerElement.style.backgroundColor = scrollPosition > 550 ? '#29323c' : 'transparent';
      }
    };

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
          entry.target.classList.add('show')
        } else{
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=>{observer.observe(el)})
    

    hamburger?.addEventListener('click', handleHamburgerClick);
    document.addEventListener('scroll', handleScroll);

    menuItem.forEach((item) => {
      item.addEventListener('click', handleHamburgerClick);
    });

    return () => {
      hamburger?.removeEventListener('click', handleHamburgerClick);
      document.removeEventListener('scroll', handleScroll);
      menuItem.forEach((item) => {
        item.removeEventListener('click', handleHamburgerClick);
      });
    };
  }, []);

  return (
    <div>
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
            <div className='btn_container'>
             <ToggleButton/>

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
      </header>

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
            <a href="#projects" type="button" className="cta">
              Portfolio
            </a>
          </div>
        </div>
      </section>

      <section id="services">
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
                language such as HTML
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/color/344/javascript--v1.png" />
              </div>
              <p>
                JavaScript is a programming language that is one of the core
                technologies of the World Wide Web.It renders in interactive and
                dynamic fashion.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/fluency/512/typescript--v1.png" />
              </div>
              <p>
                TypeScript is a syntactic superset of JavaScript. It means that
                TypeScript adds syntax on top of JavaScript, allowing developers
                to add types.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src="https://img.icons8.com/office/344/react.png" />
              </div>
              <p>
                React is a JavaScript library developed by Facebook. Its aim is
                to allow developers to easily create fast user interfaces for
                websites and applications alike.
              </p>
            </div>
            <div className="service-item logo hidden">
              <div className="icon">
                <img src={NodeJS} />
              </div>
              <p>
                Node.js is a cross-platform, open-source JavaScript runtime
                environment. Developers use it to write command line tools and
                for server-side scripting.
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

      <section id="projects">
        <div className="projects container">
          <div className="projects-header">
            <h1 className="section-title hidden">
              Pro<span>jects</span>
            </h1>
          </div>
          <div className="all-projects">
            {/* <div className="project-item">
              <div className="project-info">
                <a href="https://github.com/Jojo10x" target="blank">
                  <h1 className="section-title ">Available Here</h1>
          
                </a>
              </div>
              <div className="project-img">
                <img src={ProgIMG} alt="img" />
              </div>
            </div> */}
            
          </div>
          <RotatingText text="•GitHub Link •Click Here •Jojo10x" imageUrl={GitHUb}  />
        </div>
      </section>

      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className={`about-img ${isVisible ? "visible" : ""}`}>
              <img src={JoMoscow} alt="img" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title right hidden">
              About <span>me</span>
            </h1>
            <h2 className="right hidden">Front End Developer</h2>
            <p className="right hidden">
              I am 21 years old. Currently studying Software and Information
              Sytems at Plekhanov Russian University of Economics.
            </p>
            <a
              href="https://drive.google.com/file/d/16tWdCWKaviuDc52fmwdNTjgcE06KTiJh/view?usp=sharing"
              target="blank"
              className="cta right hidden"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title hidden right">
              Contact <span>info</span>
            </h1>
          </div>
          <div className="contact-items">
            <div className="logo hidden">
              <div className="contact-item logo hidden">
                <div className="icon">
                  <img src="https://img.icons8.com/ios-filled/344/apple-phone.png" />
                </div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>+7 (977) 855 3123</h2>
                </div>
              </div>
            </div>
            <div className="logo hidden">
              <div className="contact-item logo hidden">
                <div className="icon">
                  <img src="https://img.icons8.com/ios-filled/344/new-post.png" />
                </div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>joelkasisi10@gmail.com</h2>
                </div>
              </div>
            </div>
            <div className="logo hidden">
              <div className="contact-item logo hidden">
                <div className="icon">
                  <img src="https://img.icons8.com/ios-filled/344/marker.png" />
                </div>
                <div className="contact-info">
                  <h1>Address</h1>
                  <h2>Moscow City</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="footer container">
          <div className="brand">
            <h1>
              <span>J</span>oel <span>K</span>asisi
            </h1>
          </div>
          <h2></h2>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://vk.com/joeycutee" target="blank">
                <img
                  src="https://img.icons8.com/color/452/vk-circled.png"
                  alt="VK"
                />
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/joeyzak_/" target="blank">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"
                  alt="Instagram"
                />
              </a>
            </div>
            <div className="social-item">
              <a href="https://github.com/Jojo10x" target="blank">
                <img
                  src="https://img.icons8.com/ios-filled/344/github.png"
                  alt="GitHub"
                />
              </a>
            </div>
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/joel-kasisi-008949215/?originalSubdomain=ru"
                target="blank"
              >
                <img
                  src="https://img.icons8.com/ios-glyphs/344/linkedin-circled--v1.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <p>
            &copy; Joel Kasisi <span id="date"></span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

