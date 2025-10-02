import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award, FileText } from 'lucide-react';

const Certificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION for a minimalist LIGHT theme
  const themeColors = {
    background: '#CFDBD5',      // Light grey background
    cardBackground: '#333533',  // Darker grey for cards
    headingText: '#242423',     // Dark text for headings
    subtleText: '#333533',      // Darker grey for subtitles
    cardHeadingText: '#CFDBD5', // Light grey for card titles
    cardBodyText: '#A9A9A9',   // Dimmer grey for issuer/date
    primary: '#FF006E',
  };

  const certificates = [
    {
      id: 1,
      name: "AWS Generative AI Training",
      issuer: "Amazon Web Services",
      date: "Jul 2025",
      type: "Credly Badge",
      credlyUrl: import.meta.env.VITE_AWS_BADGE_URL,
    },
    {
      id: 2,
      name: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      date: "Aug 2025",
      type: "Credly Badge",
      credlyUrl: import.meta.env.VITE_GOOGLE_CLOUD_BADGE_URL,
    },
    {
      id: 3,
      name: "Associate AI Engineer",
      issuer: "DataCamp",
      date: "2025",
      type: "Certificate",
      credlyUrl: import.meta.env.VITE_DATACAMP_CERTIFICATE_URL,
    },
    {
      id: 4,
      name: "AI/ML Geo-Data Analysis",
      issuer: "ISRO",
      date: "2024",
      type: "Certificate",
      credlyUrl: import.meta.env.VITE_ISRO_URL,
    },
    {
      id: 5,
      name: "Intro to Machine Learning",
      issuer: "NPTEL",
      date: "2024",
      type: "Certificate",
      credlyUrl: import.meta.env.VITE_ML_URL,
    },
    {
      id: 6,
      name: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "2024",
      type: "Certificate",
      credlyUrl: import.meta.env.VITE_GENAI_URL,
    }
  ];

  return (
    <section id="certificates" className="py-20" style={{ backgroundColor: themeColors.background }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins" style={{ color: themeColors.headingText }}>
            Certifications
          </h2>
          <p className="text-lg font-poppins" style={{ color: themeColors.subtleText }}>
            A history of my professional development and training.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03, borderColor: themeColors.primary }}
              className="group block p-6 rounded-xl border-2"
              style={{
                backgroundColor: themeColors.cardBackground,
                borderColor: 'transparent',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#242423' }}>
                  {cert.type === 'Credly Badge' ? (
                    <Award className="w-6 h-6" style={{ color: themeColors.primary }} />
                  ) : (
                    <FileText className="w-6 h-6" style={{ color: themeColors.primary }} />
                  )}
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: themeColors.primary }}>
                  <span className="text-sm font-medium">View</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: themeColors.cardHeadingText }}>
                {cert.name}
              </h3>
              <p className="text-md" style={{ color: themeColors.cardBodyText }}>
                {cert.issuer} · {cert.date}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;