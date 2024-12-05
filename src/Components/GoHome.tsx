import React, { useEffect, useState } from 'react';
import styles from './GoHome.module.scss';
import { useNavigate } from 'react-router-dom';
import { Home,  Undo2 } from 'lucide-react';

interface GoHomeProps {
  size?: number;
  color?: string;
  hoverColor?: string;
  scrollThreshold?: number;
}

const GoHome: React.FC<GoHomeProps> = ({
  size = 46,
  color = 'black',
  hoverColor = 'rgb(69, 67, 67)',
  scrollThreshold = 50
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      navigate("/");
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return (
    <div 
      className={`${styles.progressWrap} ${isVisible ? styles.active : ''}`}
      onClick={goToHome}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        boxShadow: `inset 0 0 0 2px ${color}`,
      }}
    >

      {isHovered ? (
        <Undo2 
          size={size * 0.6} 
          color={hoverColor} 
          className={styles.icon}
        />
      ) : (
        <Home 
          size={size * 0.6} 
          color={color} 
          className={styles.icon}
        />
      )}
    </div>
  );
};

export default GoHome;