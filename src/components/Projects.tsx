import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, FolderOpen, Github } from 'lucide-react';
import inkpersonaLogo from '../assets/inkpersona-logo.jpg';
import studySqueezeLogo from '../assets/studysqueeze-logo.png';
import plotSmithLogo from '../assets/plotsmith-logo.png';
import resaleRadarLogo from '../assets/resaleradar-logo.png';
import blushBotLogo from '../assets/blushbot-logo.png';
import awsNextworkLogo from '../assets/vpcaws.png';

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
      title: 'AWS Cloud Guided Projects',
      category: 'Cloud / AWS (NextWork)',
      date: 'Mar 2026',
      logo: awsNextworkLogo,
      description: 'Completed hands-on AWS guided projects covering secure account setup (MFA), VPC networking, S3 static website hosting, and IAM-based EC2 access control.',
      technologies: ['AWS', 'IAM', 'VPC', 'S3', 'EC2', 'Cloud Security'],
      keySkills: [],
      links: [
        {
          label: 'Account Setup',
          url: 'https://learn.nextwork.org/happy_azure_swift_duck/docs/aws-account-setup',
        },
        {
          label: 'S3 Hosting',
          url: 'https://learn.nextwork.org/happy_azure_swift_duck/docs/aws-host-a-website-on-s3',
        },
        {
          label: 'IAM Security',
          url: 'https://learn.nextwork.org/happy_azure_swift_duck/docs/aws-security-iam',
        },
        {
          label: 'VPC Networking',
          url: 'https://learn.nextwork.org/happy_azure_swift_duck/docs/aws-networks-vpc',
        },
      ],
    },
    {
      id: 2,
      title: 'InkPersona',
      category: 'Personalized Handwriting Generation',
      date: 'May 2025 – Oct 2025',
      logo: inkpersonaLogo,
      description: 'One-shot handwriting generation system that replicates user writing style using the Emuru model pipeline, with FastAPI orchestration, voice-to-text support, and optimized local CPU/GPU inference.',
      technologies: ['FastAPI', 'React', 'Emuru', 'VAE Encoder/Decoder', 'Autoregressive Transformer', 'Voice-to-Text'],
      keySkills: [],
      githubUrl: 'https://github.com/agamyaaa14/InkPersona',
      liveUrl: 'https://drive.google.com/file/d/1pFbzIbFyslklBdE0e6OwHBzZmXVE5nvV/view?usp=sharing',
      links: [
        { label: 'GitHub', url: 'https://github.com/agamyaaa14/InkPersona' },
        { label: 'Demo', url: 'https://drive.google.com/file/d/1pFbzIbFyslklBdE0e6OwHBzZmXVE5nvV/view?usp=sharing' },
      ],
    },
    {
      id: 3,
      title: 'StudySqueeze',
      category: 'AI Study Assistant',
      date: 'Aug 2025',
      logo: studySqueezeLogo,
      description: 'AI study assistant that summarizes PDFs, PPTs, and DOCX into structured, exam-ready notes with mnemonic generation using Gemini API.',
      technologies: ['Python', 'Streamlit', 'ChromaDB', 'Llama 3', 'OpenRouter'],
      keySkills: [],
      githubUrl: 'https://github.com/agamyaaa14/StudySqueeze',
      liveUrl: 'https://www.loom.com/share/79ff286b4f3d4973b10c95a8b08c424a?sid=68687e01-4630-4c88-b9c3-0ba6c1b8bc2a',
      links: [
        { label: 'GitHub', url: 'https://github.com/agamyaaa14/StudySqueeze' },
        { label: 'Demo', url: 'https://www.loom.com/share/79ff286b4f3d4973b10c95a8b08c424a?sid=68687e01-4630-4c88-b9c3-0ba6c1b8bc2a' },
      ],
    },
    {
      id: 4,
      title: 'PlotSmith',
      category: 'AI Story Generator',
      date: 'Apr 2025 – May 2025',
      logo: plotSmithLogo, 
      description: 'AI-powered story generator using Microsoft phi-4 model via Hugging Face API with genre-specific content and animated real-time outputs.',
      technologies: ['Python', 'Streamlit', 'Hugging Face', 'phi-4 Model', 'NLP'],
      keySkills: [],
      githubUrl: 'https://github.com/agamyaaa14/PlotSmith',
      liveUrl: 'https://plotsmith.streamlit.app/',
      links: [
        { label: 'GitHub', url: 'https://github.com/agamyaaa14/PlotSmith' },
        { label: 'Live App', url: 'https://plotsmith.streamlit.app/' },
      ],
    },
    {
      id: 5,
      title: 'ResaleRadar',
      category: 'Used Car Price Predictor',
      date: 'Feb 2025',
      logo: resaleRadarLogo, 
      description: 'Used car price prediction web app using CatBoost regression model with 91.8% R² score, featuring interactive visualizations and user-friendly interface.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'CatBoost', 'Optuna'],
      keySkills: [],
      githubUrl: 'https://github.com/agamyaaa14/ResaleRadar',
      liveUrl: 'https://resaleradar.streamlit.app/',
      links: [
        { label: 'GitHub', url: 'https://github.com/agamyaaa14/ResaleRadar' },
        { label: 'Live App', url: 'https://resaleradar.streamlit.app/' },
      ],
    },
    {
      id: 6,
      title: 'BlushBot',
      category: 'ML Recommendation System',
      date: 'Nov 2024 – Jan 2025',
      logo: blushBotLogo,
      description: 'Personalized skincare recommendation system using content-based filtering with TF-IDF and Cosine Similarity, achieving 88% precision.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'TF-IDF', 'Cosine Similarity'],
      keySkills: [],
      githubUrl: 'https://github.com/agamyaaa14/BlushBot',
      liveUrl: 'https://blushbot.streamlit.app/',
      links: [
        { label: 'GitHub', url: 'https://github.com/agamyaaa14/BlushBot' },
        { label: 'Live App', url: 'https://blushbot.streamlit.app/' },
      ],
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
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: `${projectColors.primary}20`, color: projectColors.primary }}
                    >
                      IP
                    </div>
                  )}
                </motion.div>
                {project.id !== 1 && (project.githubUrl || project.liveUrl) && (
                  <div className="flex gap-2">
                    {project.githubUrl && (
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
                    )}
                    {project.liveUrl && (
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
                    )}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-1 font-poppins" style={{ color: projectColors.cardHeadingText }}>
                {project.title}
              </h3>
              <p className="text-sm font-medium mb-2" style={{ color: projectColors.primary }}>
                {project.category}
              </p>

              <p className="text-sm mb-4 font-medium" style={{ color: projectColors.subtleText }}>
                {project.date}
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

              <p className="mt-4 font-poppins leading-relaxed text-sm" style={{ color: projectColors.cardBodyText }}>
                {project.description}
              </p>

              {project.id === 1 && project.links && project.links.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs mb-2 font-medium" style={{ color: projectColors.cardBodyText }}>
                    Open the docs below for step-by-step AWS project work.
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {project.links.map((doc) => (
                    <a
                      key={doc.url}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full font-poppins transition-all duration-300 border"
                      style={{
                        backgroundColor: '#2A2C2A',
                        color: '#F4F1E8',
                        borderColor: '#5A5D5A',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#343734';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.borderColor = `${projectColors.primary}88`;
                        e.currentTarget.style.boxShadow = `0 0 8px ${projectColors.primary}44`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A2C2A';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = '#5A5D5A';
                        e.currentTarget.style.boxShadow = '';
                      }}
                    >
                      {doc.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                  </div>
                </div>
              )}
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