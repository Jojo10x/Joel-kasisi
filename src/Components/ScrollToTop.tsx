import React, { useEffect, useState } from 'react';
import styles from '../Components/ScrollToTop.module.scss';
interface ScrollToTopProps {
  size?: number;
  color?: string;
  hoverColor?: string;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  size = 46,
  color = 'white',
  hoverColor = '#F13E51',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / scrollHeight;

      setProgress(scrollProgress);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const radius = 49;
  const circumference = 2 * Math.PI * radius;
  const validProgress = !isNaN(progress) ? Math.max(0, Math.min(1, progress)) : 0;

  const strokeDashoffset = !isNaN(circumference * (1 - validProgress))
    ? circumference * (1 - validProgress)
    : 0;

  return (
    <div 
      className={`${styles.progressWrap} ${isVisible ? styles.active : ''}`} 
      onClick={scrollToTop}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        boxShadow: `inset 0 0 0 2px ${color}`,
      }}
    >
      <svg
        className="progress-circle"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            stroke: hoverColor,
            strokeWidth: 2, 
            fill: 'none', 
          }}
        />
      </svg>
    </div>
  );
};

export default ScrollToTop;
