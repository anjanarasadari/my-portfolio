import React from "react";
import profileImg from "../images/profileImg.jpeg";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="profile-image-container">
        <img
          src={profileImg}
          alt="Anjana Rasadari"
          className="profile-image"
        />
      </div>
      
      <h1 className="hero-title">
        Hey, I'm Anjana Rasadari
      </h1>
      
      <p className="hero-description">
        A highly motivated and professional Software Engineer with over 4 years of experience 
        specializing in Java frameworks and cloud computing. Recognized for leading high-impact 
        projects such as the PAYable IPG system and digital banking solutions. Expert in Spring Boot, 
        AWS, and end-to-end project delivery with a passion for building scalable fintech solutions.
      </p>
      
      <div className="hero-links">
        
          href="https://www.linkedin.com/in/anjana-rasadari-73536a137/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link"
        >
          💼 LinkedIn
        </a>
        <a 
          href="mailto:anjanarasadari21@gmail.com" 
          className="hero-link"
        >
          ✉️ Email
        </a>
        
          href="https://github.com/anjanarasadari"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-link"
        >
          🐙 GitHub
        </a>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="floating-elements">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>
    </section>
  );
}

export default Home;
