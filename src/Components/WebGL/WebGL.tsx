import React, { useRef, useEffect, useState } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import styles from "./WebGL.module.scss";
import { useTheme } from "../../contexts/useTheme";
import { FluidSimConfig } from "types/fluidSim";
interface FluidSimulation {
  onMouseMove: (x: number, y: number) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

type FluidProps = {
  children: React.ReactNode;
};

const WebGL: React.FC<FluidProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [simulation, setSimulation] = useState<FluidSimulation | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (canvasRef.current) {
      const config: FluidSimConfig = {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: 0.2,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        INITIAL: true,
        SPLAT_AMOUNT: 5,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 6000,
        COLOR_PALETTE: [],
        SPLAT_KEY: "Space",
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 5,
        HOVER: true,
        BACK_COLOR: isDarkMode ? "#000000" : "#ffffff",
        TRANSPARENT: false,
        BRIGHTNESS: 0.05,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.8,
        BLOOM_THRESHOLD: 0.6,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: true,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1.0,
      };

      const sim = webGLFluidEnhanced.simulation(canvasRef.current, config) as unknown as FluidSimulation;
      setSimulation(sim);
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (simulation && canvasRef.current) {
      const canvas = canvasRef.current;
      
      const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        if (e instanceof MouseEvent) {
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          simulation.onMouseMove(x, y);
        } else if (e instanceof TouchEvent) {
          const rect = canvas.getBoundingClientRect();
          const touch = e.touches[0];
          const x = touch.clientX - rect.left;
          const y = touch.clientY - rect.top;
          simulation.onMouseMove(x, y);
        }
      };

      const handleMouseDown = () => {
        simulation.onMouseDown();
      };

      const handleMouseUp = () => {
        simulation.onMouseUp();
      };

      const handleTouchStart = (e: TouchEvent) => {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        simulation.onMouseMove(x, y);
        simulation.onMouseDown();
      };

      const handleTouchEnd = () => {
        simulation.onMouseUp();
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMouseMove);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleMouseMove);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [simulation]);

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default WebGL;