import React from "react";

function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="card about-content">
        <div className="about-intro">
          <p className="about-paragraph">
            Hey there! I'm <strong className="highlight">Anjana Rasadari</strong> — a highly motivated 
            <strong className="highlight"> Senior Software Engineer</strong> with over 4 years of experience 
            specializing in Java frameworks and cloud computing.
          </p>
          
          <p className="about-paragraph">
            I'm recognized for leading high-impact projects such as the <strong className="highlight">PAYable IPG system</strong> 
            and <strong className="highlight">digital banking solutions</strong>. I excel in collaborative problem-solving, 
            code quality optimization, and driving technological innovation.
          </p>
          
          <p className="about-paragraph">
            My expertise spans across:
          </p>
        </div>

        <div className="expertise-grid">
          <div className="expertise-item">
            <div className="expertise-icon">☕</div>
            <div className="expertise-content">
              <h3>Java Development</h3>
              <p>Designing and developing REST-based Java applications using Spring Boot, Spring MVC, and Hibernate</p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="expertise-icon">☁️</div>
            <div className="expertise-content">
              <h3>Cloud Architecture</h3>
              <p>Architecting and deploying applications on AWS services (EC2, Lambda, S3, RDS)</p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="expertise-icon">🚀</div>
            <div className="expertise-content">
              <h3>Project Leadership</h3>
              <p>Leading end-to-end project delivery from database design to cloud deployment</p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="expertise-icon">⚙️</div>
            <div className="expertise-content">
              <h3>DevOps & CI/CD</h3>
              <p>Implementing CI/CD pipelines and automated testing frameworks</p>
            </div>
          </div>

          <div className="expertise-item">
            <div className="expertise-icon">💳</div>
            <div className="expertise-content">
              <h3>Payment Systems</h3>
              <p>Managing high-volume transaction systems and payment gateway solutions</p>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h3 className="education-title">
            <span className="education-icon">🎓</span>
            Education & Certification
          </h3>
          
          <div className="education-grid">
            <div className="education-item">
              <div className="education-degree">MSc. in Computer Science</div>
              <div className="education-institution">University of Colombo School of Computing</div>
              <div className="education-year">Present</div>
            </div>
            
            <div className="education-item">
              <div className="education-degree">BSc. in Computer Science</div>
              <div className="education-institution">University of Colombo School of Computing</div>
              <div className="education-year">2016-2020</div>
            </div>
            
            <div className="education-item">
              <div className="education-degree">Certified Java Developer</div>
              <div className="education-institution">Comprehensive Master Java Developer (IJSE)</div>
              <div className="education-year">Certified</div>
            </div>
          </div>
        </div>

        <div className="motivation-section">
          <div className="motivation-card">
            <h3 className="motivation-title">What Drives Me? 💡</h3>
            <p className="motivation-text">
              <strong className="highlight">Building scalable, secure systems</strong> that solve real-world problems 
              and delivering high-quality software that makes a meaningful impact in the fintech and banking sectors.
            </p>
          </div>

          <div className="values-card">
            <p className="values-text">
              I thrive in fast-paced environments and enjoy mentoring team members while staying at the forefront 
              of emerging technologies and development best practices.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <p className="cta-text">
            Ready to collaborate on innovative software solutions? 
            <a href="#contact" className="cta-link">Let's connect!</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
