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
      name: "AI Engineer for Data Scientists Associate",
      issuer: "DataCamp",
      date: "Feb 22, 2026",
      type: "Certificate",
      credlyUrl: "https://drive.google.com/file/d/1XiXxy-deigk4pZg7-xLdBhLaMTcNU3HE/view?usp=sharing",
    },
    {
      id: 2,
      name: "Associate AI Engineer",
      issuer: "DataCamp",
      date: "Aug 31, 2025",
      type: "Certificate",
      credlyUrl: "https://drive.google.com/file/d/11nUubUDk8a7ak82V9ULxX53IVqhGX0i2/view?usp=drive_link",
    },
    {
      id: 3,
      name: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      date: "Aug 8, 2025",
      type: "Credly Badge",
      credlyUrl: "https://www.credly.com/badges/c165baac-5af1-4a8a-a48b-33d57a717cad/public_url",
    },
    {
      id: 4,
      name: "AWS Generative AI Training",
      issuer: "Amazon Web Services",
      date: "Jul 25, 2025",
      type: "Credly Badge",
      credlyUrl: "https://www.credly.com/badges/4c36dacd-2612-4653-96bf-40f4b11f7903/public_url",
    },
    {
      id: 5,
      name: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "June 16, 2025",
      type: "Certificate",
      credlyUrl: "https://drive.google.com/file/d/1rdp8ogouCW2xShclJyNwTU1P41X_Rghq/view?usp=drive_link",
    },
    {
      id: 6,
      name: "Intro to Machine Learning",
      issuer: "NPTEL",
      date: "Nov 20, 2024",
      type: "Certificate",
      credlyUrl: "https://drive.google.com/file/d/1vG3S3lWNcEwEiNn8lkpLdrZBDnmjceqp/view?usp=drive_link",
    },
    {
      id: 7,
      name: "AI/ML Geo-Data Analysis",
      issuer: "ISRO",
      date: "Sept 6, 2024",
      type: "Certificate",
      credlyUrl: "https://drive.google.com/file/d/1TD7Ko1mKrnXFtVtWjlCHvwZqYEm3m2wu/view?usp=drive_link",
    }
  ];

  const additionalLearningLinks = [
    {
      id: 1,
      label: 'All Course Certificates (Google Drive Folder)',
      url: 'https://drive.google.com/drive/folders/1NqzBA5lVG8g5b_wVSBuGYdf1Wpgzihaa?usp=sharing',
    },
    {
      id: 2,
      label: 'Google Cloud Skills Boost Profile',
      url: 'https://www.skills.google/public_profiles/3e877606-415f-4e74-8e5b-a99578ff3223',
      logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
      logoAlt: 'Google Cloud logo',
    },
  ];

  return (
    <section id="certificates" className="py-14" style={{ backgroundColor: themeColors.background }}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-poppins" style={{ color: themeColors.headingText }}>
            Certifications
          </h2>
          <p className="text-base font-poppins" style={{ color: themeColors.subtleText }}>
            A history of my professional development and training.
          </p>
        </motion.div>

        {/* Compact Certificate List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
              className="group p-3 rounded-lg border flex items-start justify-between gap-3 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: themeColors.cardBackground,
                borderColor: '#4A4D4A',
              }}
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="mt-0.5 p-1.5 rounded-md" style={{ backgroundColor: '#242423' }}>
                  {cert.type === 'Credly Badge' ? (
                    <Award className="w-4 h-4" style={{ color: themeColors.primary }} />
                  ) : (
                    <FileText className="w-4 h-4" style={{ color: themeColors.primary }} />
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="text-base font-semibold truncate" style={{ color: themeColors.cardHeadingText }}>
                    {cert.name}
                  </h4>
                  <div className="flex items-center gap-1.5 min-w-0">
                    {cert.issuer === 'Google Cloud' && (
                      <img
                        src="https://cdn.simpleicons.org/googlecloud/4285F4"
                        alt="Google Cloud logo"
                        className="w-3.5 h-3.5 flex-shrink-0"
                      />
                    )}
                    <p className="text-sm truncate" style={{ color: themeColors.cardBodyText }}>
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm font-medium" style={{ color: themeColors.primary }}>
                <span className="hidden sm:inline">View</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Learning Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 p-3.5 rounded-lg border"
          style={{ backgroundColor: '#D9E3DE', borderColor: '#A9A9A9' }}
        >
          <h3 className="text-lg font-bold mb-1" style={{ color: themeColors.headingText }}>
            Additional Learning Links
          </h3>
          <p className="text-xs mb-3" style={{ color: themeColors.subtleText }}>
            Ongoing learning records and course completion links.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {additionalLearningLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-2 text-sm font-medium p-2 rounded-md border transition-colors duration-200"
                style={{ color: themeColors.primary, borderColor: '#A9A9A9', backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
              >
                <span className="inline-flex items-center gap-2 min-w-0">
                  {link.logo && (
                    <img src={link.logo} alt={link.logoAlt ?? 'Logo'} className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span className="truncate">{link.label}</span>
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;