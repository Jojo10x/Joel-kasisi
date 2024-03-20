import React, { useState } from 'react';
import './App.css'

interface ToggleButtonProps {
}

const ToggleButton: React.FC<ToggleButtonProps> = () => {
  const [isOn, setIsOn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = (): void => {
    setIsOn(!isOn);
    toggleMode();
  };
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const getBoxShadow = (): string => {
    return isOn
      ? '5px 5px 500px rgb(255, 255, 0) inset, 0.5px 0.5px 50px yellow'
      : '10px 10px 15px rgba(0, 0, 0, 0.312), -10px -10px 10px rgba(30, 30, 30, 0.696), 10px 0px  rgb(255, 255, 255) inset, -2px 5px 10px rgba(23, 23, 23, 0.986) inset';
  };

  const getBorderColor = (): string => {
    return isOn ? '1px solid rgb(255, 255, 255)' : '1px solid rgba(28, 28, 28, 0)';
  };

  const getBackgroundColor = (): string => {
    return isOn ? 'orange' : 'rgb(23, 23, 23)';
  };

  return (
    <div className="toggle-container" id="container">
      <div className="toggle-border" id="border">
        <div
          className="toggle"
          id="toggle"
          style={{
            boxShadow: getBoxShadow(),
            border: getBorderColor(),
            backgroundColor: getBackgroundColor(),
            animation: isOn ? 'roll 1.5s forwards' : 'rollback 1.5s forwards',
          }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ToggleButton;


