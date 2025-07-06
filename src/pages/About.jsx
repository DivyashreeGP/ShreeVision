import React from 'react';
import '../styles/main.css';
import profileFormal from '../assets/images/profile.png';
import resumePDF from '../assets/Divyashree_Resume.pdf';

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-flex">
        {/* 📸 Left: Flip Image + Education + Buttons */}
        <div className="about-image">
          <div className="about-left-column">
            {/* 🔄 Flipping Image */}
            <div className="flip-image">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={profileFormal} alt="Divyashree GP" className="about-img" />
                </div>
                <div className="flip-back">
                  <p>“I once feared technology — now, I secure it.”</p>
                  <p className="small">— Divyashree GP</p>
                </div>
              </div>
            </div>

            {/* 🎓 Education */}
            <div className="education">
              <h3>🎓 Education</h3>
              <p><strong>Ramaiah Institute of Technology</strong></p>
              <p>B.E. in Computer Science & Engineering (Cybersecurity)</p>
              <p>Expected Graduation: 2026</p>
            </div>

            {/* 📄 Resume & GitHub Buttons */}
            <div className="resume-buttons">
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-button">
                🔎 View Resume
              </a>
              <a href={resumePDF} download className="resume-button">
                ⬇️ Download Resume
              </a>
            
            </div>
          </div>
        </div>

        {/* 📝 Right: Text Content */}
        <div className="about-content">
          <p className="about-intro">
            Hello! I’m <strong>Divyashree GP</strong>, a Computer Science and Engineering student at <strong>Ramaiah Institute of Technology</strong>, specializing in <strong>Cybersecurity</strong>. My passion for technology started with curiosity and a desire to understand the systems around me. Over time, that curiosity turned into a mission — to make technology more secure and trustworthy.
            <br /><br />
            I enjoy working at the intersection of <strong>Cybersecurity</strong> and <strong>Artificial Intelligence</strong>, building projects that solve real-world problems. From identifying software vulnerabilities to designing secure applications, I find joy in challenges that require both logic and creativity.
            <br /><br />
            Beyond academics, I actively engage in <strong>hackathons, certifications, and training programs</strong> that sharpen my skills and expand my perspective. I’m a self-motivated learner, dedicated to continuous growth and meaningful contribution.
            <br /><br />
            In the long run, I aspire to become a cybersecurity professional who not only protects systems but also helps people feel safer using technology. Thank you for visiting my portfolio — feel free to explore more and connect!
          </p>

          <div className="traits">
            <h3>💡 What Defines Me</h3>
            <ul>
              <li><strong>Dedicated, hardworking, and conscientious</strong> — I approach everything I do with full effort and care.</li>
              <li>A genuine passion for <strong>Cybersecurity</strong> — I enjoy understanding how systems can be protected and strengthened.</li>
              <li><strong>Self-driven learner</strong> — Programming was once challenging for me, but I’ve improved through consistent practice and patience.</li>
              <li>Driven by a desire to <strong>understand deeply and make things better</strong>, not just for myself but for others too.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
