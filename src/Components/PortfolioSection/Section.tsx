import { DeviceFrameset } from "react-device-frameset";


interface SectionProps {
    text1: string;
    text2: string;
    url: string;
  }
  
const Section  = ({text1,text2, url}: SectionProps) => {
    return (
        <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">
              <a href={url} target="_blank">
                {text1}<span>{text2}</span>
              </a>
            </h1>
          </div>
          <div className="">
            <div className="test">
              <DeviceFrameset device="MacBook Pro">
                <iframe
                  src={url}
                  title="Beauty Time"
                  width="104%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </DeviceFrameset>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  export default Section;