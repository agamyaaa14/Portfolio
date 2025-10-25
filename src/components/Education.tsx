import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION for a minimalist LIGHT theme
  const themeColors = {
    background: '#CFDBD5',      // Light grey background
    headingText: '#242423',     // Dark text for headings
    subtleText: '#333533',      // Darker grey for subtitles
    bodyText: '#333533',
    primary: '#FF006E',
  };

  const educationHistory = [
    {
      institution: 'Global Academy of Technology, Bengaluru, Karnataka',
      degree: 'B.E in Information Science & Engineering',
      duration: '2022 – 2026',
      gpa: 'CGPA: 9.55 / 10.0',
    },
    {
      institution: 'Mount Carmel PU College',
      degree: 'Pre-University Course (PUC)',
      duration: '2020 – 2022',
      gpa: 'Percentage: 95.8%', 
    },
  ];

  return (
    <section id="education" className="py-20" style={{ backgroundColor: themeColors.background }}>
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins" style={{ color: themeColors.headingText }}>
            Education
          </h2>
          <p className="text-lg font-poppins" style={{ color: themeColors.subtleText }}>
            My academic background and qualifications.
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-12">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pl-8"
            >
              <div
                className="absolute left-0 top-1 w-2 h-2 rounded-full"
                style={{ backgroundColor: themeColors.primary }}
              />
              <div
                className="absolute left-[3px] top-1 h-full w-0.5"
                style={{ backgroundColor: themeColors.subtleText, opacity: 0.3 }}
              />
              
              <h3 className="text-2xl font-bold" style={{ color: themeColors.headingText }}>
                {edu.institution}
              </h3>
              <p className="text-lg font-medium mt-1" style={{ color: themeColors.primary }}>
                {edu.degree}
              </p>
              <div className="mt-2 text-md" style={{ color: themeColors.subtleText }}>
                <span>{edu.duration}</span>
                {edu.gpa && <span> · {edu.gpa}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
