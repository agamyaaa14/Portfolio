import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import studySqueezeLogo from '../assets/studysqueeze-logo.png';
import plotSmithLogo from '../assets/plotsmith-logo.png';
import resaleRadarLogo from '../assets/resaleradar-logo.png';
import blushBotLogo from '../assets/blushbot-logo.png';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION using the black, pink, and grey palette for a DARK theme
  const projectColors = {
    background: '#242423',      // Dark background
    cardBackground: '#333533',    // Slightly lighter dark for cards
    headingText: '#CFDBD5',      // Light grey for main headings
    subtleText: '#CFDBD5',        // Light grey for main subtitles
    cardHeadingText: '#CFDBD5',   // Light grey for card titles
    cardBodyText: '#CFDBD5',      // Light grey for card body text
    primary: '#FF006E',
    primaryRgb: '255, 0, 110',
    skillPillBg: '#242423',      // Dark pills to match the background
    skillPillBgHover: '#4a4a4a',   // A lighter grey for hover on pills
    skillPillText: '#CFDBD5',      // Light grey text for pills
  };

  const projects = [
    {
      id: 1,
      title: 'StudySqueeze',
      category: 'AI Study Assistant',
      logo: studySqueezeLogo,
      description: 'AI study assistant that summarizes PDFs, PPTs, and DOCX into structured, exam-ready notes with mnemonic generation using Gemini API.',
      technologies: ['Python', 'Streamlit', 'ChromaDB', 'Llama 3', 'OpenRouter'],
      githubUrl: import.meta.env.VITE_STUDYSQUEEZE_GITHUB_URL,
      liveUrl: import.meta.env.VITE_STUDYSQUEEZE_LIVE_URL,
    },
    {
      id: 2,
      title: 'PlotSmith',
      category: 'AI Story Generator',
      logo: plotSmithLogo, 
      description: 'AI-powered story generator using Microsoft phi-4 model via Hugging Face API with genre-specific content and animated real-time outputs.',
      technologies: ['Python', 'Streamlit', 'Hugging Face', 'phi-4 Model', 'NLP'],
      githubUrl: import.meta.env.VITE_PLOTSMITH_GITHUB_URL,
      liveUrl: import.meta.env.VITE_PLOTSMITH_LIVE_URL,
    },
    {
      id: 3,
      title: 'ResaleRadar',
      category: 'Used Car Price Predictor',
      logo: resaleRadarLogo, 
      description: 'Used car price prediction web app using CatBoost regression model with 91.8% R² score, featuring interactive visualizations and user-friendly interface.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'CatBoost', 'Optuna'],
      githubUrl: import.meta.env.VITE_RESALERADAR_GITHUB_URL,
      liveUrl: import.meta.env.VITE_RESALERADAR_LIVE_URL,
    },
    {
      id: 4,
      title: 'BlushBot',
      category: 'ML Recommendation System',
      logo: blushBotLogo,
      description: 'Personalized skincare recommendation system using content-based filtering with TF-IDF and Cosine Similarity, achieving 88% precision.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'TF-IDF', 'Cosine Similarity'],
      githubUrl: import.meta.env.VITE_BLUSHBOT_GITHUB_URL,
      liveUrl: import.meta.env.VITE_BLUSHBOT_LIVE_URL,
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: projectColors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins" style={{ color: projectColors.headingText }}>
            Projects
          </h2>
          <p className="text-lg font-poppins" style={{ color: projectColors.subtleText }}>
            AI/ML applications and full-stack solutions
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-6 rounded-lg border transition-all duration-300 hover:-translate-y-2 relative"
              style={{
                backgroundColor: projectColors.cardBackground,
                borderColor: `${projectColors.primary}20`,
                boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px rgba(${projectColors.primaryRgb}, 0.3)`;
                e.currentTarget.style.borderColor = `${projectColors.primary}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 6px -1px rgba(0, 0, 0, 0.1)`;
                e.currentTarget.style.borderColor = `${projectColors.primary}20`;
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </motion.div>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 rounded-full p-1"
                     style={{ color: projectColors.cardBodyText }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = projectColors.primary;
                      e.currentTarget.style.boxShadow = `0 0 10px ${projectColors.primary}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = projectColors.cardBodyText;
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 rounded-full p-1"
                    style={{ color: projectColors.cardBodyText }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = projectColors.primary;
                      e.currentTarget.style.boxShadow = `0 0 10px ${projectColors.primary}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = projectColors.cardBodyText;
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 font-poppins" style={{ color: projectColors.cardHeadingText }}>
                {project.title}
              </h3>

              <div className="mb-4">
                <span 
                  className="text-sm font-medium px-3 py-1 rounded-full font-poppins"
                  style={{
                    backgroundColor: `${projectColors.primary}20`,
                    color: projectColors.primary
                  }}
                >
                  {project.category}
                </span>
              </div>

              <p className="mb-4 font-poppins leading-relaxed text-sm" style={{ color: projectColors.cardBodyText }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full font-poppins transition-all duration-300"
                    style={{
                      backgroundColor: projectColors.skillPillBg,
                      color: projectColors.skillPillText,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = projectColors.skillPillBgHover;
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = projectColors.skillPillBg;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Mini Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: projects.length * 0.2 }}
            className="group p-6 rounded-lg border-2 border-dashed transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: projectColors.cardBackground,
              borderColor: `${projectColors.primary}40`,
            }}
            onClick={() => window.open('https://github.com/agamyaaa14/DataSphere', '_blank')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = projectColors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${projectColors.primary}40`;
            }}
          >
            <div className="flex flex-col items-center text-center h-full justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 group-hover:animate-bounce"
                style={{ color: projectColors.primary }}
              >
                <FolderOpen className="w-12 h-12" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 font-poppins" style={{ color: projectColors.cardHeadingText }}>
                Mini Projects
              </h3>
              <p className="font-poppins leading-relaxed mb-4 text-sm" style={{ color: projectColors.cardBodyText }}>
                Explore my collection of ML experiments, web apps, and coding challenges on GitHub.
              </p>
              <div 
                className="flex items-center gap-2 font-medium font-poppins group-hover:underline"
                style={{ color: projectColors.primary }}
              >
                View Repository <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;