import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: import.meta.env.VITE_GITHUB_URL,
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: import.meta.env.VITE_LINKEDIN_URL,
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: import.meta.env.VITE_EMAIL_URL,
      label: 'Email',
    },
    {
      icon: <img src="https://img.icons8.com/androidL/512/FFFFFF/tableau-software.png" alt="Tableau logo" className="w-5 h-5" />,
      url: import.meta.env.VITE_TABLEAU_URL,
      label: 'Tableau',
    }
  ];

  return (
    <footer className="bg-secondary-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-primary-text mb-6 font-poppins"
          >
            Agamya David
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-2 text-secondary-text hover:text-accent transition-all duration-300 hover:shadow-[0_0_10px_#FF006E] rounded-full"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </motion.a >
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-accent/50 pt-8"
          >
            <p className="text-sm text-secondary-text/70 font-poppins">
              © {new Date().getFullYear()} Agamya David. All rights reserved.
            </p>

          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
