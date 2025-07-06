import React from 'react';
import '../styles/main.css';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Uber Data Analysis using Hadoop',
    year: 2024,
    description: `To improve ride allocation and operational efficiency for a ride-sharing platform, I worked on analyzing Uber ride data using big data technologies. I collected and processed large volumes of ride-related data using Hadoop Distributed File System (HDFS), and implemented MapReduce programs to extract meaningful insights such as peak demand times, high-traffic zones, and trip frequency patterns. By leveraging Hadoop's parallel processing capabilities, I was able to reduce processing time significantly and provide actionable insights. The analysis helped in understanding trends and optimizing fleet deployment strategies.`,
    tech: ['Hadoop', 'HDFS', 'MapReduce'],
    github: 'https://github.com/your-username/uber-hadoop-analysis',
  },
  {
    title: 'Fake Review Detection System',
    year: 2025,
    description: `With the increasing threat of manipulated reviews online, I developed a machine learning-based system to identify fake product reviews. I collected a dataset containing both genuine and fraudulent reviews, and performed preprocessing such as tokenization and TF-IDF vectorization. I built and evaluated multiple models including Support Vector Machines, Random Forest, and Logistic Regression, and combined them into an ensemble model for higher accuracy. The model achieved over 90% precision and recall. I deployed the system on Microsoft Azure, enabling real-time detection of suspicious reviews for product platforms.`,
    tech: ['Python', 'SVM', 'Random Forest', 'Logistic Regression', 'Azure'],
    github: 'https://github.com/your-username/fake-review-detector',
  },
  {
    title: 'Secure QR Code Scanner',
    year: 2025,
    description: `As phishing attacks through QR codes became more common, I built a secure scanner that checks for malicious links. I gathered and labeled a dataset of legitimate and phishing URLs embedded in QR codes. I trained a Linear SVM classifier using features like domain reputation, length, and presence of suspicious tokens. The application includes a user interface where scanned links are automatically analyzed and flagged. The final model achieved 97% accuracy and is designed to alert users before accessing risky websites, improving digital safety and awareness.`,
    tech: ['Python', 'Tkinter', 'SVM', 'URL Features'],
    github: 'https://github.com/your-username/secure-qr-scanner',
  },
  {
    title: 'English-to-Python Code Converter',
    year: 2024,
    description: `To assist beginners in programming, I created a tool that translates natural language algorithm descriptions into Python code. The system uses natural language processing (spaCy) for parsing instructions and syntax-directed translation (SDT) rules to generate equivalent Python logic. I implemented a Flask-based interface where users can input plain-English steps like "sort the list in descending order" and receive the Python implementation in real time. This project simplifies the learning curve and promotes code literacy, especially for students and non-technical users.`,
    tech: ['Python', 'spaCy', 'Flask', 'Syntax-Directed Translation'],
    github: 'https://github.com/your-username/nl-to-python-converter',
  },
  {
    title: 'EV Ride-Sharing App (Kathothon)',
    year: 2024,
    description: `As part of Kathothon, my team and I developed a secure and eco-friendly ride-sharing app specifically designed for college-going girls. The app promotes electric vehicle usage while ensuring safety through location tracking, emergency buttons, and trusted contacts integration. I contributed to the app's development using React Native and focused on designing the UI/UX for intuitive use. The project emphasized environmental sustainability and women’s safety, and was recognized at the hackathon for its impactful theme and implementation feasibility.`,
    tech: ['React Native', 'Expo', 'Google Maps API'],
    github: 'https://github.com/your-username/ev-ride-sharing-app',
  },
  {
    title: 'Summarization using GenAI',
    year: 2024,
    description: `To make content more digestible for readers and researchers, I built a generative AI-based summarizer. I explored various NLP models and prompt engineering strategies to extract concise summaries from long-form articles and research papers. I fine-tuned the prompts for better coherence and accuracy using trial-and-error on diverse document types. The project demonstrates the potential of GenAI in text understanding and was especially effective for summarizing technical and academic content in a fraction of the time.`,
    tech: ['Python', 'OpenAI API', 'Prompt Engineering', 'NLP'],
    github: 'https://github.com/your-username/genai-text-summarizer',
  },
];

const Projects = () => {
  return (
    <section className="projects-timeline-container">
      <h2 className="section-title">🛠️ My Projects</h2>

      <ul className="timeline">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-year">{project.year}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack-label">Tech Stack:</div>
              <div className="tech-tags">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="github-link-btn">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> View on GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
