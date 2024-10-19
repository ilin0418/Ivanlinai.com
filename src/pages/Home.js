import './Home.css'
import Typewriter from 'typewriter-effect';
import whoConfig from '../config/whoConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faReddit } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/Ivan_Lin_Resume.pdf'
import { useState, useEffect } from 'react';
import headshot from '../assets/headshot.jpg'

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
      <a href="https://www.google.com/search?q=niagara+falls&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
        <img src={headshot} alt="Headshot" />
      </a>   
      <div className='info'>
        <h1>Hi, I'm Ivan Lin</h1>
        <h2>I'm a <span className='typewriter'><Typewriter options={whoConfig}/></span></h2>
        <ul>
          <li> based in New York, NY USA</li>
          <li> 💫 4th Year student at RIT</li>
          <li> 📧 il9082@rit.edu</li>
        </ul>
        <div className='socials'>
          <a href={resume} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faFilePdf} size='2xl'/>
          </a>
          <a href='https://www.linkedin.com/in/ivanlin0418/' target='blank'>
          <FontAwesomeIcon icon={faLinkedinIn} size='2xl'/>
          </a>
          <a href='https://github.com/ivanlin0418' target='blank'>
          <FontAwesomeIcon icon={faGithub} size='2xl'/>
          </a>
          <a href='https://www.reddit.com/user/Vibrantluster/' target='blank'>
          <FontAwesomeIcon icon={faReddit} size='2xl'/>
          </a>
        </div>
      </div>
    </div>
  )
}
