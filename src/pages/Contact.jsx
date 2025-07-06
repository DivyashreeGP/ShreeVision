import React from 'react';
import '../styles/main.css';

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="section-title">📬 Contact</h2>

      <div className="contact-card-wrapper">
        {/* Email */}
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:deekshagp14@gmail.com">deekshagp14@gmail.com</a>
        </div>

        

        {/* LinkedIn */}
        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/divyashree-g-p/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/divyashree-g-p
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/divyashree-gp"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/divyashree-gp
          </a>
        </div>{/* Location */}
        <div className="contact-card">
          <h3>Location</h3>
          <p>Bangalore, India</p>
      </div>

        </div>
      <p className="contact-footer">
        I’m always open to meaningful conversations, professional opportunities, or collaboration on impactful projects. Feel free to connect.
      </p>
    </section>
  );
};

export default Contact;
