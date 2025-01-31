import './Projects.css'
import minsweeper from '../assets/minesweeper.jpg'
import fitness from '../assets/fitness.jpg'
import brickhack from '../assets/brickhack.jpg'

import stm32 from '../assets/stm32.png'
import homelytics from '../assets/homelytics.jpg'
import weather from '../assets/weather.png'
import ivanlinai from '../assets/ivanlinai.png'
import yc from '../assets/yc.png'
import { useEffect, useState } from 'react'
import { getTechnologyIcon } from '../hooks/getIconElement'

const projects = [
  {
    title: "YCombinatrix",
    link: "https://github.com/Ivanlin0418/YC_Analytics",
    image: yc,
    description: "Side-project application for insightful analysis of companies that have participated in the YCombinator accelerator program.",
    technologies: ["Python", "Pandas", "Kafka", "Docker", "Spark", "Plotly"]
  },
  {
    title: "Maestro",
    image: stm32,
    link: "https://github.com/Ivanlin0418/MIDIfy",
    description: "Developed a fully-functioning MIDI player (plays music) with a STM32 board and embedded programming with interrupts, DAC, and ADC",
    technologies: ["Embedded C"]
  },
  {
    title: "Ivanlinai.com",
    image: ivanlinai,
    link: "https://github.com/Ivanlin0418/Ivanlinai.com.git",
    description: "This exact website you are viewing right now, fully built with React and deployed with Firebase!",
    technologies: ["React", "Firebase"]
  },
  {
    title: "BlackPebble",
    link: "https://github.com/Ivanlin0418/Homelytics",
    image: homelytics,
    description: "Fullstack React-based application that webscrapes Trulia and uses statistics to find best value homes ",
    technologies: ["React", "Python", "scikit-learn", "BeautifulSoup", "Uvicorn", "FastAPI", "Pandas", "Matplotlib"]
  },
  {
    title: "StyleSavings",
    image: brickhack,
    description: "Fullstack application for finding cheap clothing, built with Swift, Python, and PostgreSQL for database",
    technologies: ["Python", "BeautifulSoup", "Swift", "REST APIs", "PostgreSQL"]
  },
  {
    title: "FitTrack",
    link: "https://github.com/Ivanlin0418/FitnessFlow",
    image: fitness,
    description: "Fullstack Angular application developed with Agile Scrum that allows users to sign up and purchase gym membership passes",
    technologies: ["Java", "Angular", "Maven", "SonarQube"]
  },
  {
    title: "Weathering With Me",
    link: "https://github.com/Ivanlin0418/WeatheringWithMe",
    image: weather,
    description: "Webapp that gives weather forecast for the next 5 days of a specified location in real time",
    technologies: ["React", "Docker"]
  },
  {
    title: "Minesweeper",
    link: "https://github.com/Ivanlin0418/Minesweeper",
    image: minsweeper,
    description: "CLI-based program that allows playing Minesweeper via JavaFX with additional features like backtracking",
    technologies: ["Java"]
  }
]

function Project({ title, link, image, description, technologies }) {
  const handleClick = () => {
    if (link && link !== "blank") {
      window.open(link, "_blank", "noopener, noreferrer");
    }
  };

  return (
    <div className="grid-item" onClick={handleClick} style={{ cursor: link && link !== "blank" ? 'pointer' : 'default' }}>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>{description}</p>
      <h4>{technologies.map((tech, index) => (
        <span key={index} style={{ margin: '0 5px' }}>
          {getTechnologyIcon(tech)}
        </span>
      ))}</h4>
    </div>
  );
}

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
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
