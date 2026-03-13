import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION for the new theme
  const themeColors = {
    background: '#242423',
    cardBackground: 'rgba(51, 53, 51, 0.6)', // Semi-transparent card
    headingText: '#CFDBD5',
    bodyText: '#CFDBD5',
    subtleText: '#CFDBD5',
    primary: '#FF006E',
  };

  const skillCategories = [
    {
      heading: 'Languages',
      skills: ['Python', 'C', 'JavaScript', 'SQL'],
    },
    {
      heading: 'ML & DS',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Feature Engineering', 'Model Evaluation', 'CatBoost'],
    },
    {
      heading: 'Deep Learning / GenAI',
      skills: ['TensorFlow', 'Hugging Face Transformers', 'OpenAI API', 'Prompt Engineering'],
    },
    {
      heading: 'Visualization',
      skills: ['Power BI (DAX, Query Merging)', 'Tableau', 'Looker Studio', 'Matplotlib', 'Seaborn'],
    },
    {
      heading: 'Tools & Platforms',
      skills: ['Git', 'Jupyter Notebook', 'Google Colab', 'VS Code', 'Excel (VBA)', 'FastAPI', 'Streamlit', 'MERN Stack'],
    },
    {
      heading: 'Cloud',
      skills: ['AWS', 'Google Cloud Vertex AI'],
    },
  ];

  
  return (
    <section 
      id="skills" 
      className="py-20" 
      style={{ 
        backgroundColor: themeColors.background,
        backgroundImage: `radial-gradient(${themeColors.subtleText} 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px',
      }}
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins" style={{ color: themeColors.headingText }}>
              Tech Stack
            </h2>
            <div className="h-1 w-2/3 mt-2" style={{ backgroundColor: themeColors.primary }}></div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group p-6 rounded-2xl border transition-all duration-300"
              style={{ 
                backgroundColor: themeColors.cardBackground,
                backdropFilter: 'blur(10px)',
                borderColor: themeColors.subtleText,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: themeColors.headingText }}>
                {category.heading}
              </h3>
              <div className="h-0.5 w-10 mb-5 transition-all duration-300 group-hover:w-20" style={{ backgroundColor: themeColors.primary }} />
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ y: -2, scale: 1.04 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm px-3 py-1.5 rounded-full border transition-colors duration-200"
                    style={{
                      color: themeColors.bodyText,
                      borderColor: themeColors.subtleText,
                      backgroundColor: 'rgba(207, 219, 213, 0.08)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = themeColors.subtleText;
                      e.currentTarget.style.backgroundColor = 'rgba(207, 219, 213, 0.08)';
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
