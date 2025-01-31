import React, { createContext, useContext } from 'react';

const ParticlesContext = createContext();

const particlesConfig = {
  background: {
    color: { value: '#000000' }
  },
  fpsLimit: 144,
  particles: {
    number: {
      value: 50,
      limit : 100,
      density: { enable: true, area: 800 }
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 4 },
      random: true
    },
    opacity: { value: 0.8 },
    move: {
      enable: true,
      speed: { min: 3, max: 10 },
      direction: 'bottom-left',
      outModes: 'out',
      straight: true,
      trail: {
        enable: true,
        length: 10,
        fillColor: '#000000',
      }
    }
  },
  detectRetina: true
};

export const ParticlesProvider = ({ children }) => {
  return (
    <ParticlesContext.Provider value={particlesConfig}>
      {children}
    </ParticlesContext.Provider>
  );
};

export const useParticles = () => useContext(ParticlesContext);

export default particlesConfig;