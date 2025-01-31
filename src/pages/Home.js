import React, { useState, useEffect } from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect';
import whoConfig from '../config/whoConfig'
import { Icon } from '@iconify/react';
import resume from '../assets/Ivan_Lin_Resume.pdf'
import headshot from '../assets/golfing.png'


export default function Home() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className={`content ${showComponent ? 'show' : ''}`}>
      <a href="https://www.google.com/search?q=big+oak+driving+range+rochester+ny&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
        <img src={headshot} alt="Headshot" style={{width: '350px', height : '350px'}} />
      </a>   
      <div className='info'>
        <h1>Hi, I'm Ivan Lin</h1>
        <h2>I'm a <span className='typewriter'><Typewriter options={whoConfig}/></span></h2>
        <ul>
          <li> based in New York, NY USA</li>
          <li> 💻 4th Year student at RIT</li>
          <li> 📧 ivanlin0418@gmail.com</li>
        </ul>
        <div className='socials'>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:resume" width="32" height="32" />
        </a>
        <a href='https://www.linkedin.com/in/ivanlin0418/' target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands:linkedin-in" width="32" height="32" />
        </a>
        <a href='https://github.com/ivanlin0418' target="_blank" rel="noopener noreferrer">
            <Icon icon="fa-brands:github" width="32" height="32" />
        </a>
        <a href="https://leetcode.com/u/naXVI/" target="_blank" rel="noopener noreferrer">
            <Icon icon="simple-icons:leetcode" width="32" height="32" />
        </a>

        </div>
      </div>
    </div>
  )
}
