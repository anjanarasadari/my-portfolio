import React from "react";

const experiences = [
  {
    company: "PAYable",
    location: "Colombo, Sri Lanka",
    role: "Senior Software Engineer",
    duration: "March 2025 - Present",
    domain: "FinTech, Payment Gateway",
    description:
      "Leading the design and development of SettleIn property management solution. Architecting REST-based Java applications using Spring Boot and managing AWS deployments. Mentoring team members and driving technological innovation.",
    icon: "🚀"
  },
  {
    company: "PAYable",
    location: "Colombo, Sri Lanka",
    role: "Software Engineer | Associate Software Engineer",
    duration: "March 2021 - March 2025",
    domain: "FinTech, Payment Systems",
    description:
      "Developed critical payment gateway systems including IPG, bulk SMS services, and NFC payment applications. Managed end-to-end project delivery from database design to AWS deployment. Led agile ceremonies and implemented CI/CD pipelines.",
    icon: "💳"
  },
  {
    company: "N-able Pvt Ltd",
    location: "Colombo, Sri Lanka",
    role: "Associate Software Engineer | Software Engineer Intern",
    duration: "August 2019 - December 2020",
    domain: "Banking, Digital Solutions",
    description:
      "Designed specialized banking architecture for Sampath Bank's corporate users using Spring Boot RESTful services. Integrated KIOSK/ATM systems for digital banking solutions, facilitating high-volume transactions tailored to corporate needs.",
    icon: "🏦"
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Professional Journey</h2>
      
      {/* Timeline Section */}
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item-wrapper">
            <div className="timeline-marker">
              <span className="timeline-icon">{exp.icon}</span>
            </div>
            
            <div className="experience-card">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="company-location">{exp.location}</p>
                </div>
                <div className="duration-badge">{exp.duration}</div>
              </div>
              
              <div className="role-info">
                <h4 className="job-title">{exp.role}</h4>
                <span className="domain-tag">{exp.domain}</span>
              </div>
              
              <p className="job-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}