import React, { useEffect, useState } from 'react';
import '../App.css'
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import { palettes } from '../types/palettes';
import { useTheme } from '../contexts/ThemeContext';
interface ToggleButtonProps {
}

const ToggleButton: React.FC<ToggleButtonProps> = () => {
  const [isOn, setIsOn] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<'light' | 'dark'>('light');
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  const { toggleDarkMode } = useTheme();

  useEffect(() => {
    const storedVariant = localStorage.getItem('variant') || 'light';
    const storedPaletteIndex = localStorage.getItem('colorPalette') || '0';

    setCurrentVariant(storedVariant as 'light' | 'dark');
    setCurrentPaletteIndex(parseInt(storedPaletteIndex, 10));
    updateColors(parseInt(storedPaletteIndex, 10), storedVariant as 'light' | 'dark');
  }, []);

  const handleClick = (): void => {
    setIsOn(!isOn);
    toggleMode();
  };

  const toggleMode = () => {
    const newVariant = currentVariant === 'light' ? 'dark' : 'light';
    setCurrentVariant(newVariant);
    localStorage.setItem('variant', newVariant);
    updateColors(currentPaletteIndex, newVariant);
  };

  const updateColors = (paletteIndex: number, variant: 'light' | 'dark') => {
    const colors = palettes[paletteIndex][variant];

    const root = document.documentElement.style;
    // root.setProperty('--color-text', colors.textColor);
    root.setProperty('--color-background', colors.backgroundColor);
    root.setProperty('--color-primary', colors.primaryColor);
    root.setProperty('--color-secondary', colors.secondaryColor);
    root.setProperty('--color-accent', colors.accentColor);

    const canvas = document.querySelector('canvas');
    if (canvas) {
      webGLFluidEnhanced.simulation(canvas, {
        COLOR_PALETTE: [
          colors.primaryColor,
          colors.secondaryColor,
          colors.accentColor,
        ],
        BACK_COLOR: colors.backgroundColor,
      });
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
          onClick={()=> {handleClick(); toggleDarkMode()}}
        />
      </div>
    </div>
  );
};

export default ToggleButton;