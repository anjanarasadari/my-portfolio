import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }));

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const sectionId = href.substring(1);
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <ul>
        {navItems.map(({ name, href }) => (
          <li key={name}>
            <a
              href={href}
              className={activeSection === href.substring(1) ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(href);
              }}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;