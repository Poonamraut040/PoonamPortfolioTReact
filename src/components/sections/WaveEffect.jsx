// src/components/FloatingEffect.js
import React, { useRef } from 'react';
import './waveeffect.css';

const WaveEffect = ({ children }) => {
  const elementRef = useRef(null);

  const handleMouseMove = (event) => {
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
  };

  const handleMouseLeave = () => {
    const element = elementRef.current;
    element.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      className="floating-container"
      ref={elementRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default WaveEffect;
