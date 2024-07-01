import { useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import './Section.scss'


interface SectionProps {
    text1: string;
    text2: string;
    paragraph?: string;
    url: string;
  }
  interface DeviceProps {
    url: string;
  }


  const MacBookProFrame = ({ url }:DeviceProps) => (
    <DeviceFrameset device="MacBook Pro">
      <iframe
        src={url}
        title="Beauty Time"
        width="104%"
        height="100%"
        style={{ border: 'none' ,
        transform: 'scale(0.9615)',
        transformOrigin: '0 0' }}
      />
    </DeviceFrameset>
  );
  
  const IPhoneXFrame = ({ url }:DeviceProps) => (
    <DeviceFrameset device="iPhone 5s" color="black">
      <iframe
        src={url}
        title="Beauty Time"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </DeviceFrameset>
  );
  
  const IPadMiniFrame = ({ url }:DeviceProps) => (
    <DeviceFrameset device="iPad Mini" color="black">
      <iframe
        src={url}
        title="Beauty Time"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </DeviceFrameset>
  );
  
const Section  = ({text1,text2,paragraph, url}: SectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    return (
      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">
              <a
                href={url}
                target="_blank"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {text1}
                <span>{text2}</span>
              </a>
              {isHovered && <p>{paragraph}</p>}
            </h1>
          </div>
          <div className="device-frame">
          <div className="desktop-only">
            <MacBookProFrame url={url} />
          </div>
          <div className="tablet-only">
            <IPadMiniFrame url={url} />
          </div>
          <div className="mobile-only">
            <IPhoneXFrame url={url} />
          </div>
        </div>
        </div>
      </section>
    );
  };
  
  
  
  export default Section;