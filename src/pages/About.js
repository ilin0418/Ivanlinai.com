import './About.css';
import { useEffect, useState } from 'react';

export default function About() {
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
    <div className={`about ${showComponent ? 'show' : ''}`}>
      <div className='about-wrapper'>
        <div className='description'>
          <h1>About Me</h1>
          <p>
            Hello there! My name is Ivan Lin and I am a passionate software engineer with a strong interest in backend development. I love working on projects that involve data, ML, and distributed systems.
            I love working on dynamic and challenging projects that have high impact. 
            I am always looking for ways to challenge myself, improve my skills, and stay up-to-date with the latest trends in emerging technologies.
            Aside from coding, I enjoy golfing, reading books, and cooking.
          </p>
        </div>
        <div className='skills'>
          <h1>Programming Languages</h1>
          <ul>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height={50} width={50}/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg" height={50} width={50}/>
          </ul>
        </div>
      </div>
    </div>
  )
}
