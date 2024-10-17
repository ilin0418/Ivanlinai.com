import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
  const [message, setMessage] = useState('Made with ❤️ by Ivan Lin');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage((prevMessage) =>
        prevMessage === 'Made with ❤️ by Ivan Lin' ? 'Stay Comfy ☕' : 'Made with ❤️ by Ivan Lin'
      );
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <footer style={{ color: 'white' }}>
      {message}
    </footer>
  );
}