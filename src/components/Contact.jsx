import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="card contact-card">
        <div className="contact-intro">
          <p className="contact-intro-text">
            Interested in collaborating on innovative software solutions or discussing opportunities in 
            Java development and cloud computing? I'm always open to new challenges, partnerships, 
            and meaningful conversations about technology and software engineering.
          </p>
        </div>

        <div className="contact-methods">
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-details">
              <h4>Email</h4>
              <a
                href="mailto:anjanarasadari21@gmail.com"
                className="contact-link"
              >
                anjanarasadari21@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-details">
              <h4>Phone</h4>
              <span className="contact-text">+94 70203 21 64</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h4>Location</h4>
              <span className="contact-text">Matara, Sri Lanka</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">💼</div>
            <div className="contact-details">
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/anjana-rasadari-73536a137/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-footer">
          <div className="education-badge">
            <span className="education-icon">🎓</span>
            <div className="education-text">
              <p className="education-status">Currently pursuing MSc. in Computer Science</p>
              <p className="education-university">University of Colombo School of Computing</p>
            </div>
          </div>

          <div className="availability-status">
            <div className="status-indicator"></div>
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}