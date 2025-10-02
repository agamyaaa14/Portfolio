import React from 'react';
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
    subtleText: '#A9A9A9',
    primary: '#FF006E',
  };

  // UPDATED: Replaced all problematic logo links with stable, theme-appropriate versions.
  const allSkills = [
    { name: "Python", logo: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000" },
    { name: "NumPy", logo: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000" },
    { name: "Pandas", logo: "https://pandas.pydata.org//static/img/favicon_white.ico" },
    { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" },
    { name: "Matplotlib", logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/matplotlib-icon-f7mzorjcj05050u32rdqcyy.png/matplotlib-icon-iodufaod59i61pudzd92.png?_a=DATAg1AAZAA0" },
    { name: "Seaborn", logo: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg" },
    { name: "TensorFlow", logo: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
    { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Streamlit", logo: "https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=000000" },
    { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
    { name: "CatBoost", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6OUcuhCagkvi4liseIW1jZeb7BzqcZ6VhZA&s" },
    { name: "Git", logo: "https://cdn.iconscout.com/icon/free/png-256/free-git-icon-svg-download-png-1175218.png" },
    { name: "JavaScript", logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
    { name: "MERN Stack", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "SQL", logo: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" },
    { name: "AWS", logo:"https://svgmix.com/uploads/skillicons/29026e-aws-dark.svg"}
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
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.05) }}
              className="group relative flex flex-col items-center justify-center text-center p-4 rounded-xl transition-all duration-300"
              style={{ 
                backgroundColor: themeColors.cardBackground,
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-90">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`} 
                    className="max-h-10 max-w-full"
                  />
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-[#242423] text-white text-xs font-semibold px-2 py-1 rounded-md">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
