import React from 'react';
import '../styles/main.css';

const skillsData = [
  {
    title: '💻 Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'Unix Shell Programming', 'Scala', 'R Programming', 'MATLAB'],
  },
  {
    title: '🖥️ Operating Systems',
    skills: ['Windows', 'Linux (Ubuntu, Kali)', 'Command-line Operations', 'Security Tools'],
  },
  {
    title: '🌐 Web Technologies',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Flask', 'Angular', 'Spring Boot (Basics)', 'React Native', 'Node.js'],
  },
  {
    title: '🧰 Tools & Platforms',
    skills: ['Git', 'Power BI', 'Kali Linux', 'Hydra', 'Figma', 'Wireshark', 'Nmap', 'Nessus', 'Snort', 'Burp Suite', 'Metasploit'],
  },
  {
    title: '🛡️ Cybersecurity',
    skills: ['Cloud Security', 'Cryptography', 'Attack & Defense Strategies', 'Secure Coding', 'Vulnerability Assessment'],
  },
  {
    title: '🌐 Networking',
    skills: ['OSI Model', 'TCP/IP', 'Subnetting', 'DNS', 'Routing', 'Packet Analysis (Wireshark)', 'Network Scanning'],
  },
  {
    title: '📊 Data Technologies',
    skills: ['SQL', 'Apache Hadoop', 'Apache Spark', 'Hive', 'HiveQL', 'Pig', 'MapReduce', 'Big Data Analytics'],
  },
  {
    title: '☁️ Cloud & AI',
    skills: ['Google Cloud', 'AWS', 'Artificial Intelligence', 'Machine Learning'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-card-grid">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <ul className="skill-bullets">
              {category.skills.map((skill, idx) => (
                <li key={idx}> {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
