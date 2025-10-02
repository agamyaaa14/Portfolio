import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Zap, Database, BarChart3, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION based on the new minimalist dark theme
  const themeColors = {
    background: '#242423',    // Dark background
    headingText: '#CFDBD5',     // Light grey for main headings
    subtleText: '#A9A9A9',     // A dimmer grey for subtitles/durations
    bodyText: '#CFDBD5',
    timelineLine: '#333533',   // A subtle grey for the timeline
    primary: '#FF006E',
    primaryRgb: '255, 0, 110',
  };

  const experiences = [
    {
      id: 1,
      icon: <Zap />,
      company: 'Elevate Labs',
      role: 'AI/ML Intern',
      duration: 'April 2025 – May 2025',
      highlights: [
        'Built production-ready ML models including SVM, K-Means, and Logistic Regression.',
        'Executed advanced feature engineering and rigorous model evaluation techniques.',
        'Focused on robust LLM integration, including sophisticated error handling.',
      ],
    },
    {
      id: 2,
      icon: <Database />,
      company: 'Prasunet Foundation',
      role: 'Data Science Intern',
      duration: 'March 2025 – April 2025',
      highlights: [
        'Developed the ResaleRadar car price predictor from concept to deployment.',
        'Achieved a high-accuracy R² score of 0.918 using a CatBoost regression model.',
        'Designed and deployed an interactive Streamlit application for real-time predictions.',
      ],
    },
    {
      id: 3,
      icon: <BarChart3 />,
      company: 'CoLLearn',
      role: 'Sports Analytics Intern',
      duration: 'January 2025 – March 2025',
      highlights: [
        'Conducted in-depth cricket video and performance analysis to extract key metrics.',
        'Built and maintained comprehensive Tableau dashboards for data visualization.',
        'Performed statistical studies on player performance to drive data-informed insights.',
      ],
    },
    {
      id: 4,
      icon: <TrendingUp />,
      company: 'Excelerate',
      role: 'Data Analyst Associate',
      duration: 'December 2024 – January 2025',
      highlights: [
        'Created and managed insightful dashboards using Google Looker Studio.',
        'Processed and analyzed large datasets with over 20,000 records.',
        'Applied thorough data cleaning and feature engineering to enhance data quality.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: themeColors.background }}>
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins" style={{ color: themeColors.headingText }}>
            Experience
          </h2>
          <p className="text-lg font-poppins" style={{ color: themeColors.subtleText }}>
            My journey in AI/ML and data science.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div 
            className="absolute left-4 sm:left-1/3 top-0 h-full w-px"
            style={{ backgroundColor: themeColors.timelineLine }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="group relative mb-16 pl-12 sm:pl-0"
            >
              {/* Timeline Marker */}
              <div 
                className="absolute top-1 left-4 sm:left-1/3 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-300"
                style={{
                  backgroundColor: themeColors.background,
                  borderColor: themeColors.timelineLine
                }}
              />
               <div 
                className="absolute top-1 left-4 sm:left-1/3 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundColor: themeColors.primary,
                  borderColor: themeColors.primary,
                  boxShadow: `0 0 10px ${themeColors.primary}`
                }}
              />

              <div className="flex flex-col sm:flex-row items-start">
                <div className="w-full sm:w-1/3 sm:text-right sm:pr-12 mb-4 sm:mb-0">
                  <p className="text-md font-medium transition-colors duration-300 group-hover:text-white" style={{ color: themeColors.subtleText }}>
                    {exp.duration}
                  </p>
                </div>
                <div className="w-full sm:w-2/3 sm:pl-12">
                  <div className="transform transition-transform duration-300 group-hover:scale-105">
                    <h3 className="text-2xl font-bold mb-1" style={{ color: themeColors.headingText }}>
                      {exp.role} · <span style={{ color: themeColors.primary }}>{exp.company}</span>
                    </h3>
                    <div className="space-y-2 mt-4">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300"
                            style={{ backgroundColor: themeColors.primary }}
                          />
                          <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: themeColors.bodyText }}>
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;