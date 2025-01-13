import { useTheme } from "../../contexts/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();
    return (
      <section id="contact" className={isDarkMode ? "dark-mode" : "light-mode"}>
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
                  <img src="https://img.icons8.com/ios-filled/344/apple-phone.png" alt="Phone" />
                </div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>+260776100174</h2>
                </div>
              </div>
            </div>
            <div className="logo hidden">
              <div className="contact-item logo hidden">
                <div className="icon">
                  <img src="https://img.icons8.com/ios-filled/344/new-post.png"  alt="Email"/>
                </div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <a href="mailto:joelkasisi10@gmail.com">
                    <h2>joelkasisi10@gmail.com</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="logo hidden">
              <div className="contact-item logo hidden">
                <div className="icon">
                  <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=000000" alt="Whatsapp" />
                </div>
                <div className="contact-info">
                  <h1>Whatsapp</h1>
                  <a href="https://wa.me/+79778553123">
                    <h2>+7 (977) 855 3123</h2>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;