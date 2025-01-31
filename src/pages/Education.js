import React from 'react';
import ritLogo from '../assets/ritlogo.png';
import './Education.css';

export default function Education() {
    const courses = [
        { code: "SWEN-343", name: "Engineering of Enterprise Software Systems", color: "blue"},
        { code: "SWEN-514", name: "Engineering Cloud Software Systems", color: "blue" },
        { code: "CSCI-352", name: "Operating Systems", color: "green"},
        { code: "CSCI-331", name: "Introduction to Artificial Intelligence", color: "green"},
        { code: "CSCI-320", name: "Principles of Data Management", color: "green"},
        { code: "CSCI-261", name: "Analysis of Algorithms", color: "green"},
        { code: "CSCI-243", name: "The Mechanics of Programming", color : "green"},
        { code: "SWEN-444", name: "Human-Centered Requirements and Design", color : "green"},
        { code: "SWEN-440", name: "Software System Requirements and Architecture", color : "green"},
        { code: "SWEN-350", name: "Software Process and Product Quality", color : "green"},
        { code: "SWEN-344", name: "Engineering of Web Based Software Systems", color : "green"},
        { code: "SWEN-340", name: "Software Design for Computing Systems", color : "green"},
        { code: "SWEN-331", name: "Engineering Secure Software", color : "green"},
        { code: "SWEN-262", name: "Engineering of Software Subsystems", color : "green"},
        { code: "SWEN-261", name: "Introduction to Software Engineering", color : "green"},
        { code: "SWEN-256", name: "Software Process and Project Management", color : "green"},
        { code: "SWEN-250", name: "Personal Software Engineering", color : "green"},
        { code: "GCIS-124", name: "Software Development and Problem Solving II", color : "green"},
        { code: "GCIS-123", name: "Software Development and Problem Solving I", color : "green"},
    ];

    return (
        <div className="education-container">
            <div className="education-header">
                <img src={ritLogo} alt="RIT Logo" className="rit-logo" />
                <div className="education-content">
                    <h2>Rochester Institute of Technology</h2>
                    <h3>B.S. in Software Engineering, Minor in Computer Science</h3>
                    <h4>Expected Graduation: May 2026</h4>
                </div>
            </div>
            <div className="courses-table">
                <table className="table w-full">
                    <thead>
                        <tr className="prose">
                            <th className="text-base-content md:text-base-content">Course Code</th>
                            <th>Course Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr className="prose" key={index}>
                                <td className={`text-${course.color}`}>{course.code}</td>
                                <td className={`text-${course.color}`}>{course.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}