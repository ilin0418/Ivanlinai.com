import './Projects.css'
import minsweeper from '../assets/minesweeper.jpg'
import nn from '../assets/gradientboosted-nn.png'
import fitness from '../assets/fitness.jpg'
import brickhack from '../assets/brickhack.jpg'
import dining from '../assets/rit-dining.jpeg'
import wordle from '../assets/wordle.png'
import costco from '../assets/costco-wholesale.png'
import stm32 from '../assets/stm32.png'
import homelytics from '../assets/homelytics.jpg'
import weather from '../assets/weather.png'
import { useEffect, useState } from 'react'


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
          <a href='blank' target='blank'>
            <img src={nn} alt='nn model'/>
          </a>
          <p>Currently working on optimizing a gradient boosted neural network model based on 350k data points</p>
        </div>
        <div class="grid-item">
          <h1>Wordle Together</h1>
          <a href='https://github.com/Ivanlin0418/wordle-together' target='blank'>
            <img src={wordle} alt='Worlde'/>
          </a>
          <p>Webapp built with Golang where 20+ users can play World via a single TCP/IP</p>
        </div>
        <div class="grid-item">
          <h1>MIDIfy</h1>
          <a href='blank' target='blank'>
            <img src={stm32} alt='Embedded project'/></a>
          <p>Developed a fully-fuctioning MIDI player (plays music) with a STM32 board and embedded programming</p>
        </div>
        <div class="grid-item">
          <h1>Homelytics</h1>
          <a href='https://github.com/Ivanlin0418/Homelytics' target='blank'>
            <img src={homelytics} alt='Homelytics project'/></a>
          <p>Fullstack React-based application that webscrapes Trulia and uses statistics to find best value homes </p>
        </div>
        <div class="grid-item">
          <h1>Costco Gas Price</h1>
          <a href="blank" target='blank'>
            <img src={costco} alt='quantly'/></a>
          <p>Script that fetches the regular gas price at nearest Costco given a zipcode</p>
        </div>
        <div class="grid-item">
          <h1>RIT Visiting Chef Menu</h1>
          <a href='https://github.com/Ivanlin0418/RIT-Visiting-Chef-Menu' target='blank'>
            <img src={dining} alt='quantly'/></a>
          <p>Script that fetches a list of chefs visiting RIT, their location, and their avaliability</p>
        </div>
        <div class="grid-item">
          <h1>StyleSavings</h1>
          <a href='https://github.com/Ivanlin0418/StyleSavings' target='blank'><img src={brickhack} alt='quantly'/></a>
          <p>Fullstack application for finding cheap clothing, built with swift, python, and postgresql for database</p>
        </div>
        <div class="grid-item">
          <h1>Fitness Flow</h1>
          <a href='https://github.com/Ivanlin0418/FitnessFlow' target='blank'>
            <img src={fitness}alt='spot me project'/></a>
          <p>Fullstack Angular application that allow users to sign up and purchase gym membership passes.</p>
        </div>
        <div class="grid-item">
          <h1>Weathering With Me</h1>
          <a href='https://github.com/Ivanlin0418/WeatheringWithMe' target='blank'>
            <img src={weather} alt='tetris ai project'/></a>
          <p>Webapp that gives weather forecast for the next 5 days of a specified location in real time</p>
        </div>
        <div class="grid-item">
          <h1>Minesweeper</h1>
          <a href='https://github.com/Ivanlin0418/Minesweeper' target='blank'>
            <img src={minsweeper} alt='webscraper project'/></a>
          <p>CLI-basd program that allows to play Minesweeper via JavaFX with addition features like backtracking</p>
        </div>
      </div>
    </div>
  )
}
