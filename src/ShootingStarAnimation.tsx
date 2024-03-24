import { FC, ReactNode } from 'react';
import './style.scss'; 

interface ShootingStarProps {
  className?: string;
  children?: ReactNode;
}

const ShootingStarAnimation: FC<ShootingStarProps> = () => {
    return (
      <>
        <div className="sky">
          {Array.from({ length: 11 }).map((_, index) => (
            <div key={index} className="star"></div>
          ))}
        </div>
      </>
    );
  };

export default ShootingStarAnimation;
