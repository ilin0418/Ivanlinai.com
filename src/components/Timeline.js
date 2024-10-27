import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Timeline.css'
import gtriLogo from '../assets/gtri-logo.png';
import iasLogo from '../assets/ias-logo.png';
import csLogo from '../assets/cs-logo.png';
import { Tooltip } from 'react-tooltip';
import { getTechnologyIcon } from '../hooks/getIconElement'; 

const experiences = [
    {
        date: "August 2024 - Present",
        company: "Center for Computational Relativity and Gravity",
        location: "(Rochester, NY)",
        position: "Machine Learning Research Assistant",
        icon: <img src={csLogo} alt="CS Logo" className="icon-image"/>, 
        color: "#ADD8E6",       
        description: "Currently working with Prof. Weijie Zhao on optimizing machine unlearning on gradient boosted neural network models.",
        technologies: ["Python", "PyTorch", "scikitlearn", "CUDA"]
    },
    {
        date: "May 2024 - August 2024",
        company: "Georgia Tech Research Institute",
        location: "(Orlando, FL)",
        position: "Software Engineer Intern",
        color: "#B3A369",
        icon: (
            <div className="icon-container">
                <a href="https://gtri.gatech.edu/" target="_blank" rel="noopener noreferrer">
                    <img src={gtriLogo} alt="GTRI Logo" className="icon-image" data-tooltip-id="gtri-tooltip"/>
                </a>
                <Tooltip id="gtri-tooltip" place="top">
                    To Matt LeBlanc and Campbell, you guys are awesome :D!
                </Tooltip>
            </div>
        ),    
        description: "Worked closesly with ASL researchers to developed software tools and optimizations for Firefly, ABE, and VECTS training safety systems. Notably, I worked on designing tools on the UH60 Black Hawk platform as well as threat table parsers for the US Army and DoD.",
        technologies: ["C++", "Python", "C#", "WPF", ".NET", "WinForms"]
    },
    {
        date: "August 2024 - December 2024",
        company: "Computational Biomedicine Lab",
        location: "(Rochester, NY)",
        position: "Data Science Research Assistant",
        color: "#ADD8E6",
        icon: <img src={csLogo} alt="CS Logo" className="icon-image"/>,        

        description: "Collaborated on a capstone paper research the correlation between substance usage and domestic abuse with Deep Forest, Random Forest, and Gradient Boosted model",
        technologies: ["Python", "Pandas", "PyTorch", "scikitlearn"]
    },
    {
        date: "June 2024 - August 2024",
        company: "Integral Ad Science",
        location: "(New York, NY)",
        position: "Data Engineer Intern",
        "color" : "#39FF14",
        icon:
        (
        <div className="icon-container">
            <img src={iasLogo} alt="IAS Logo" className="icon-image" />
            <div 
            className="icon-overlay" 
            onClick={() => window.open("https://integralads.com/", "_blank", "noopener, noreferrer")}
            />
        </div>
        ),       
        description: "Worked with the walled gradens team to design solutions to improve data quality. On the 10 weeks internship, I developed a containarized application for automated anomaly detection and constructed new DAG in EC2 AirFlow instance for alerts on trends and irregularities.",
        technologies: ["Python", "Docker", "AirFlow", "AWS", "GCP", "Spark", "Snowflake", "Pandas", "Plotly", "Docker"]
    },
]

const Timeline = () => {
    return (
        <VerticalTimeline className="timeline">
            {experiences.map(experience => (
                <VerticalTimelineElement
                    key={experience.company}
                    date={experience.date + " " + experience.location}
                    iconStyle={{ background: "#FAF9F6", color: "#000" }}
                    contentStyle={{ background: "rgb(0,0,0,0.59)", color: "#ffffff", backdropFilter: "blur(5px)"}}
                    dateClassName="date"
                    icon={
                        <div data-tip={experience.company} className="icon-container">
                            {experience.icon}
                        </div>
                    }
                    iconClassName="timeline-icon">
                    <h3 className="vertical-timeline-element-title" style={{color : experience.color}}>{experience.company + "\n" }</h3>
                    <h4>{experience.position} </h4>
                    <p>{experience.description}</p>
                    <div className="tech-icons">
                        {experience.technologies.map((tech, index) => (
                            <span key={index} style={{ padding: "5px" }}>{getTechnologyIcon(tech)}</span>
                        ))}
                    </div>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline
