import React from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from 'react-tooltip';

const technologyIconMap = {
'Python': 'devicon:python',
'Pandas': 'devicon:pandas',
'Kafka': 'devicon:apachekafka',
'Docker': 'devicon:docker',
'CUDA': 'vscode-icons:file-type-cuda',
'Spark' : 'devicon:apachespark',
'PyTorch': 'devicon:pytorch',
'Golang': 'devicon:go',
'TCP/IP': 'devicon:network',
'Embedded C': 'devicon:embeddedc',
'React': 'devicon:react',
'BeautifulSoup': 'logos:beautifulsoup',
'REST APIs': 'devicon:rest',
'Uvicorn': 'devicon:uvicorn',
'FastAPI': 'devicon:fastapi',
'Selenium': 'devicon:selenium',
'Discord API': 'devicon:discord',
'Swift': 'devicon:swift',
'PostgreSQL': 'devicon:postgresql',
'Java': 'devicon:java',
'Angular': 'devicon:angular',
'Maven': 'devicon:maven',
'SonarQube': 'devicon:sonarqube',
'JaCoCo': 'devicon:jacoco',
'Agile Scrum': 'devicon:agile',
'UML': 'devicon:uml',
'JavaFX': 'devicon:javafx',
'scikitlearn': 'devicon:scikitlearn',
'C++': 'devicon:cplusplus',
'C#': 'devicon:csharp',
'WPF': 'fa6-brands:wpforms',
'AirFlow': 'devicon:apacheairflow',
'Plotly': 'devicon:plotly',
'Snowflake': 'devicon:snowflake',
'AWS': 'devicon:aws',
'GCP': 'devicon:googlecloud',
'.NET': 'devicon:dotnet',
'Matplotlib': 'devicon:matplotlib',
'Keras': 'devicon:keras',
'TensorFlow': 'devicon:tensorflow',
'WinForms': 'devicon:grommet-icons:document-windows',
'Firebase': 'devicon:firebase',
};

export default function getIconElement(technology) {
    const iconIdentifier = technologyIconMap[technology];
    if (iconIdentifier) {
        return <Icon icon={iconIdentifier} width={50} height={50} />;
    } else {
        console.warn(`Icon not found for technology: ${technology}`);
        return technology;
    }
}

export function getTechnologyIcon(technology) {
    const iconIdentifier = technologyIconMap[technology];
    const tooltipId = `tooltip-${technology.replace(/\s+/g, '-').toLowerCase()}`;
    
    return iconIdentifier ? (
        <>
            <span data-tooltip-id={tooltipId}>
                <Icon icon={iconIdentifier} width={40} height={40} />  {/* Increased size */}
            </span>
            <Tooltip id={tooltipId} place="top">
                {technology}
            </Tooltip>
        </>
    ) : technology;
}
