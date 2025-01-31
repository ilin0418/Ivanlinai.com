import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ParticlesProvider } from './config/particlesConfig';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ParticlesProvider>
    <App />
  </ParticlesProvider>
);