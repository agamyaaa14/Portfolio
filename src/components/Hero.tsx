import React from 'react';
import { motion } from 'framer-motion';
import { User, Eye } from 'lucide-react';
import profilePhoto from '../assets/profile.png';

const Hero = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL;
  const profilePhotoPlaceholder = profilePhoto;

  const openResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-[#242423] flex items-center pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[max-content,1fr] gap-y-16 lg:gap-x-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#FF006E] shadow-[0_0_40px_#FF006E] animate-pulse-glow">
                <img
                  src={profilePhotoPlaceholder}
                  alt="Agamya David - AI/ML Developer"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                 <div 
                   className="w-full h-full bg-[#333533] flex items-center justify-center absolute inset-0"
                   style={{ display: 'none' }}
                 >
                   <User className="w-32 h-32 text-[#FF006E]" />
                 </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-[#FF006E]/40 opacity-50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-[#CFDBD5] mb-6 font-poppins"
            >
              Agamya David
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl text-[#A9A9A9] mb-6 font-poppins font-light"
            >
              AI/ML Developer & Problem Solver
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-base text-[#A9A9A9] mb-8 max-w-2xl font-poppins leading-relaxed mx-auto lg:mx-0"
            >
              Hi, I'm Agamya. I've always enjoyed solving puzzles, whether it's a Sudoku grid or the challenge of building a machine learning model. As an AI/ML developer, I love turning complex data into clear and effective solutions. My hobby as a baker has taught me that creativity and precision are equally important, and I bring that balance to every project I take on.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={openResume}
                className="group bg-[#FF006E] text-white px-8 py-3 rounded-lg font-semibold font-poppins transition-all duration-300 hover:shadow-[0_0_20px_#FF006E] hover:scale-105 flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;