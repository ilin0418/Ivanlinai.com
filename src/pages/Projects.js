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
import yc from '../assets/yc.png'
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
      <div className="grid-container">
        <div className="grid-item">
          <h1>YC Analyzer *WIP*</h1>
          <a href='blank' target='https://github.com/Ivanlin0418/YC_Analytics' rel='noreferrer'>
            <img src={yc} alt='YC project'/>
          </a>
          <p>Side-project application for insightful analysis of companies that have participated in the YCombinator accelerator program. 
          </p>
          <h4>
            Technologies: Python, Pandas, Kafka
          </h4>
        </div>
        <div className="grid-item">
          <h1>UCI Gradient Boosted Neural-Network Model *WIP*</h1>
          <a href='blank' target='_blank' rel='noreferrer'>
            <img src={nn} alt='nn model'/>
          </a>
          <p>
            Currently working on optimizing a gradient boosted neural network model based on a UC Irvine data set (83.7% accuracy so far). 
          </p>
          <h4>
            Technologies: Python, CUDA, Scikit-Learn, PyTorch
          </h4>
        </div>
        <div className="grid-item">
          <h1>Wordle Together</h1>
          <a href='https://github.com/Ivanlin0418/wordle-together' target='_blank' rel='noreferrer'>
            <img src={wordle} alt='Wordle'/>
          </a>
          <p>Webapp built with Golang where 20+ users can play Wordle via a single TCP/IP</p>
          <h4>
            Used: Golang, TCP/IP
          </h4>
        </div>
        <div className="grid-item">
          <h1>MIDIfy</h1>
          <a href='blank' target='_blank' rel='noreferrer'>
            <img src={stm32} alt='Embedded project'/></a>
          <p>Developed a fully-functioning MIDI player (plays music) with a STM32 board and embedded programming</p>
          <h4>
            Used: Embedded C, Interrupts, DAC, ADC, USART
          </h4>
        </div>
        <div className="grid-item">
          <h1>Homelytics</h1>
          <a href='https://github.com/Ivanlin0418/Homelytics' target='_blank' rel='noreferrer'>
            <img src={homelytics} alt='Homelytics project'/></a>
          <p>Fullstack React-based application that webscrapes Trulia and uses statistics to find best value homes </p>
          <h4>
            Used: React, Python, Scikit-Learn, BeautifulSoup, REST APIs, Uvicorn + FastAPI
          </h4>
        </div>
        <div className="grid-item">
          <h1>Costco Gas Price</h1>
          <a href="https://github.com/Ivanlin0418/costco-gas-price" target='_blank' rel='noreferrer'>
            <img src={costco} alt='quantly'/></a>
          <p>Script that fetches the regular gas price at nearest Costco given a zipcode</p>
          <h4>
            Used: Python, Selenium
          </h4>
        </div>
        <div className="grid-item">
          <h1>RIT Visiting Chef Menu</h1>
          <a href='https://github.com/Ivanlin0418/RIT-Visiting-Chef-Menu' target='_blank' rel='noreferrer'>
            <img src={dining} alt='quantly'/></a>
          <p>Script that fetches a list of chefs visiting RIT, their location, and their availability</p>
          <h4>
            Used: Python, BeautifulSoup, Discord API
          </h4>
        </div>
        <div className="grid-item">
          <h1>StyleSavings</h1>
          <a href='https://github.com/Ivanlin0418/StyleSavings' target='_blank' rel='noreferrer'><img src={brickhack} alt='quantly'/></a>
          <p>
            Fullstack application for finding cheap clothing, built with Swift, Python, and PostgreSQL for database
          </p>
          <h4>
            Used: Python, BeautifulSoup, Swift, REST APIs, PostgreSQL
          </h4>
        </div>
        <div className="grid-item">
          <h1>Fitness Flow</h1>
          <a href='https://github.com/Ivanlin0418/FitnessFlow' target='_blank' rel='noreferrer'>
            <img src={fitness} alt='Estore project'/></a>
          <p>Fullstack Angular application that allows users to sign up and purchase gym membership passes</p>
          <h4>
            Used: Java, Angular, Maven, SonarQube, JaCoCo, Agile Scrum, UML + Sequence Diagrams
          </h4>
        </div>
        <div className="grid-item">
          <h1>Weathering With Me</h1>
          <a href='https://github.com/Ivanlin0418/WeatheringWithMe' target='_blank' rel='noreferrer'>
            <img src={weather} alt='weather project'/></a>
          <p>Webapp that gives weather forecast for the next 5 days of a specified location in real time</p>
          <h4>
            Used: React, Docker, Axios
          </h4>
        </div>
        <div className="grid-item">
          <h1>Minesweeper</h1>
          <a href='https://github.com/Ivanlin0418/Minesweeper' target='_blank' rel='noreferrer'>
            <img src={minsweeper} alt='webscraper project'/></a>
          <p>
            CLI-based program that allows playing Minesweeper via JavaFX with additional features like backtracking
            </p>
          <h4>
            Used: Java, JavaFX, Backtracking
          </h4>
        </div>
      </div>
    </div>
  )
}
