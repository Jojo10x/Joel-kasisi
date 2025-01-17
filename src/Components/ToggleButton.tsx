import React, { useEffect, useState } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
import { palettes } from '../types/palettes';
import { useTheme } from '../contexts/useTheme';
import '@fortawesome/fontawesome-free/css/all.min.css';
interface ToggleButtonProps {
}
const ToggleBtn: React.FC<ToggleButtonProps> = () => {
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

  return (
    <div className="toggle-wrapper">
      <div className="toggle-container">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={isOn}
          onChange={() => {
            handleClick();
            toggleDarkMode();
          }}
        />
        <label htmlFor="checkbox" className="checkbox-label">        
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleBtn;