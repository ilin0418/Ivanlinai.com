import './Projects.css'
import sfoodify from '../assets/sfoodify.png'
import webscraper from '../assets/webscraper.png'
import raft from '../assets/raft.png'
import spotme from '../assets/spotme.png'
import bhacks from '../assets/bhacks.png'
import quantly from '../assets/quantly.png'
import { useEffect, useState } from 'react'
import ai from '../assets/ai.png'


export default function Projects() {
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
    <div className={`project-section ${showComponent ? 'show' : ''}`}>
      <div class="grid-container">
        <div class="grid-item">
          <h1>IMDB Rating ML Model</h1>
          <a href='https://github.com/rongc0723/mr-and-raft' target='blank'><img src={raft} alt='raft project'/></a>
          <p>Currently working on optimizing a gradient boosted neural network model based on 350k data points</p>
        </div>
        <div class="grid-item">
          <h1>Wordle Together</h1>
          <a href='https://learnquantly.com/' target='blank'><img src={quantly} alt='quantly'/></a>
          <p>Webapp built with Golang where 20+ users can play World via a single TCP/IP</p>
        </div>
        <div class="grid-item">
          <h1>MIDIfy</h1>
          <a href='https://bostonhacks.org/' target='blank'><img src={bhacks} alt='boston hacks website'/></a>
          <p>Developed a fully-fuctioning MIDI player (plays music) with a STM32 board and embedded programming</p>
        </div>
        <div class="grid-item">
          <h1>Homelytics</h1>
          <a href='https://github.com/rongc0723/CS411-Project' target='blank'><img src={sfoodify} alt='Homelytics project'/></a>
          <p>Fullstack React-based application that webscrapes Trulia and uses statistics to find best value homes </p>
        </div>
        <div class="grid-item">
          <h1>Fitness Flow</h1>
          <a href='https://github.com/CS392/Spot-Me' target='blank'><img src={spotme} alt='spot me project'/></a>
          <p>Fullstack Angular application that allow users to sign up and purchase gym membership passes.</p>
        </div>
        <div class="grid-item">
          <h1>Weathering With Me</h1>
          <a href='https://github.com/rongc0723/tetris-ai' target='blank'><img src={ai} alt='tetris ai project'/></a>
          <p>Webapp that gives weather forecast for the next 5 days of a specified location in real time</p>
        </div>
        <div class="grid-item">
          <h1>Minesweeper</h1>
          <a href='https://github.com/rongc0723' target='blank'><img src={webscraper} alt='webscraper project'/></a>
          <p>CLI-basd program that allows to play Minesweeper via JavaFX with addition features like backtracking</p>
        </div>
      </div>
    </div>
  )
}
