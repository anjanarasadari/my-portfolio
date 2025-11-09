import React, { useState } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 88 },
      { name: "SQL", level: 92 },
      { name: "JavaScript", level: 85 }
    ],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Angular", level: 75 }
    ],
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Frameworks & Libraries",
    icon: "🔧",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Spring MVC", level: 90 },
      { name: "Hibernate", level: 88 },
      { name: "scikit-learn", level: 82 },
      { name: "pandas", level: 85 },
      { name: "Matplotlib", level: 80 }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Database Systems",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 82 },
      { name: "NoSQL", level: 78 }
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 87 },
      { name: "GitHub", level: 92 }
    ],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Development Tools",
    icon: "🛠️",
    skills: [
      { name: "IntelliJ IDEA", level: 95 },
      { name: "Eclipse", level: 85 },
      { name: "Visual Studio", level: 80 },
      { name: "Postman", level: 90 },
      { name: "Git", level: 95 }
    ],
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Testing & Quality",
    icon: "🧪",
    skills: [
      { name: "JUnit", level: 92 },
      { name: "Mockito", level: 88 },
      { name: "Cucumber", level: 82 },
      { name: "Unit Testing", level: 95 },
      { name: "Integration Testing", level: 90 }
    ],
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Project Management",
    icon: "📊",
    skills: [
      { name: "Agile Methodologies", level: 95 },
      { name: "Scrum", level: 92 },
      { name: "Team Leadership", level: 88 },
      { name: "Mentoring", level: 90 },
      { name: "Code Reviews", level: 95 }
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-introduction">
        <p className="skills-intro-text">
          With over 5 years of hands-on experience in software development, I've mastered a comprehensive 
          tech stack spanning from backend architectures to cloud deployments. Here's my technical expertise:
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`skill-category-card ${activeCategory === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="skill-category-header">
              <div className="skill-category-icon">
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-count-badge">
                {category.skills.length} skills
              </div>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill"
                      style={{ 
                        width: activeCategory === index ? `${skill.level}%` : '0%',
                        transitionDelay: `${i * 100}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-category-footer">
              <div className="proficiency-indicator">
                <span className="proficiency-label">Avg. Proficiency:</span>
                <span className="proficiency-value">
                  {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="skills-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">90%</div>
            <div className="stat-label">Avg. Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
}