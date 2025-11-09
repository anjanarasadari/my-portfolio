import React from "react";

const projects = [
  {
    id: 1,
    name: "Machine Learning-Based Algorithmic Approach to Detect Dormant Merchants",
    stack: ["Python", "scikit-learn", "pandas", "seaborn", "Matplotlib", "ML Algorithms"],
    description: "Research aimed at developing an automated method to accurately identify dormant merchants in the PAYable system. This project involved algorithm development, data analysis, and system integration to improve merchant management and business intelligence.",
    role: "Lead Researcher & Developer",
    type: "Academic Research Project",
    category: "Machine Learning",
    githubLink: "https://github.com/anjanarasadari/Dormant-Merchants-Detection.git",
    status: "Completed",
    icon: "🤖",
    highlights: [
      "Developed ML models for merchant behavior analysis",
      "Integrated with PAYable payment system",
      "Improved merchant management efficiency",
      "Published research findings"
    ]
  },
  // You can add more projects here in the future
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <div className="project-icon-wrapper">
                <span className="project-icon">{project.icon}</span>
              </div>
              <div className="project-badges">
                <span className="project-type-badge">{project.type}</span>
                <span className={`project-status-badge status-${project.status.toLowerCase()}`}>
                  {project.status}
                </span>
              </div>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              
              <div className="project-meta">
                <div className="project-role">
                  <span className="meta-label">Role:</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="project-category">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value">{project.category}</span>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4 className="highlights-title">Key Achievements:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">
                      <span className="highlight-bullet">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-stack">
                <h4 className="tech-stack-title">Tech Stack:</h4>
                <div className="tech-tags">
                  {project.stack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary-link"
              >
                <span className="link-icon">🔗</span>
                View Research
              </a>
              <button className="project-link secondary-link" disabled>
                <span className="link-icon">📄</span>
                Documentation
                <span className="coming-soon">Coming Soon</span>
              </button>
            </div>
          </div>
        ))}

        {/* Add more projects placeholder */}
        <div className="add-project-card">
          <div className="add-project-content">
            <div className="add-project-icon">➕</div>
            <h3 className="add-project-title">More Projects Coming Soon</h3>
            <p className="add-project-text">
              I'm constantly working on new and exciting projects. 
              Stay tuned for updates on my latest work!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}