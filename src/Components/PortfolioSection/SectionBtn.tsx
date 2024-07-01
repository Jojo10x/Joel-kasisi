import { useState } from "react";

interface SectionProps {
  heading: string;
  text?: string;
  url: string;
}

const SectionBtn = ({ heading,text, url }: SectionProps) => {
    const [isHovered, setIsHovered] = useState(false);  

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
  

  return (
    <>
    <div className="">
      <a
        className="cta"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={url}
        target="_blank"
      >
        {heading}
      </a>
      {isHovered && <p>{text}</p>}
      </div>
    </>
  );
};

export default SectionBtn;
