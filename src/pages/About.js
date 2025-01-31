import './About.css';
import { useEffect, useState } from 'react';
import linkedin from '../assets/linkedin-image.png';


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
          <img src={linkedin} alt="linkedin" style={{width: '300px', height: '300px', border : '1px solid rgba(255, 255, 255, 0.2)'}} />
          <h3>
            Hello there! My name is Ivan Lin and I'm a fourth year Software Engineering student at Rochester Institute of Technology.
            I'm a first generation college student and I'm from Brooklyn, NY.
          </h3>

          <h2><em>Why I got into software engineering?</em></h2>
          <h4>
            My journey into software engineering began with a simple fascination: the power to create meaningful change through technology. 
            As a child, my curiosity was sparked when I first got my hands on my sister's iPhone 3GS. Despite the relatively simple apps 
            of that era, I was captivated by how software could transform a piece of hardware into something magical. That early 
            experience showed me that technology wasn't just about gadgets—it was about creating solutions that could make a real 
            difference in people's lives.
          </h4>
          <h4>
            Fast forward to today and two internships later, I've had the opportunity to work on numerous projects that have allowed me to exercise my passion for using technology to solve complex problems.
            I've worked on fullstack web applications, data pipelines, low-level system programming, and machine learning models.
            I love working on dynamic and challenging projects that have high impact. Particulary, I am interested in projects that have involve distributed systems, cloud computing, ML and data analytics.
            I am always looking for ways to simplify tasks through automation, challenge myself, and stay up-to-date with the latest trends in emerging technologies.
            Aside from coding, I enjoy golfing, 3D printing, driving my car, reading news articles, and cooking.         
          </h4>
        </div>
        <br>
        </br>
      </div>
    </div>
  )
}
