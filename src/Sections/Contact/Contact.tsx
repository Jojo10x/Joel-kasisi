const Contact = () => {
    return (
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
    );
  };
  
  export default Contact;