import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // FIX: Dynamically get all section IDs to ensure none are missed.
      const sections = navItems.map(item => item.id);
      
      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Set active section if its top is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
          backgroundColor: 'rgba(36, 36, 36, 0.8)',
          borderColor: 'rgba(255, 0, 110, 0.2)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-20 items-center">
          {/* FIX: Simplified the layout for a cleaner structure */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                    // FIX: Set active state on click for instant feedback
                    setActiveSection(item.id); 
                    scrollToSection(item.id);
                }}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 font-poppins"
                style={{
                    color: activeSection === item.id ? '#CFDBD5' : '#A9A9A9'
                }}
              >
                {item.label}
                {/* FIX: Simplified underline animation for smoother transitions */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ 
                        backgroundColor: '#FF006E',
                        boxShadow: '0 0 15px #FF006E'
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;