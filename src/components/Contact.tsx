import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // 🎨 COLOR CUSTOMIZATION for a light theme
  const themeColors = {
    background: '#CFDBD5',
    cardBackground: '#333533',
    headingText: '#242423',
    subtleText: '#333533',
    cardText: '#CFDBD5',
    primary: '#FF006E',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      setError("Contact form is currently unavailable.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'agu.david1410@gmail.com', href: 'mailto:agu.david1410@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+91-8317403407', href: 'tel:+918317403407' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Bengaluru, India', href: '#' },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20" style={{ backgroundColor: themeColors.background }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-lg"
            style={{ backgroundColor: themeColors.cardBackground }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: themeColors.primary }} />
            <h3 className="text-3xl font-bold mb-4 font-poppins" style={{ color: themeColors.cardText }}>
              Thank You!
            </h3>
            <p className="text-lg font-poppins mb-6" style={{ color: themeColors.subtleText }}>
              Your message has been sent. I'll get back to you soon!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 rounded-lg font-semibold font-poppins transition-all duration-300"
              style={{ backgroundColor: themeColors.primary, color: 'white' }}
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: themeColors.background }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins" style={{ color: themeColors.headingText }}>
            Get In Touch
          </h2>
          <p className="text-lg font-poppins" style={{ color: themeColors.subtleText }}>
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-poppins" style={{ color: themeColors.headingText }}>
              Let's Connect
            </h3>
            <p className="mb-8 font-poppins leading-relaxed" style={{ color: themeColors.subtleText }}>
              I'm always interested in hearing about new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            {/* UPDATED: Replaced card layout with a cleaner list design and faster hover effect */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-center gap-4 transition-all duration-300"
                >
                  <div 
                    className="p-3 border-2 rounded-full transition-colors duration-300"
                    style={{ borderColor: themeColors.subtleText }}
                  >
                    <div className="text-gray-600 transition-colors duration-300 group-hover:text-[#FF006E]" style={{color: themeColors.subtleText}}>
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold transition-colors duration-300 group-hover:text-[#FF006E]" style={{ color: themeColors.headingText }}>{info.label}</p>
                    <p className="font-semibold transition-colors duration-300 group-hover:underline" style={{ color: themeColors.subtleText }}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2 font-poppins" style={{ color: themeColors.headingText }}>Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 font-poppins" style={{ backgroundColor: themeColors.cardBackground, borderColor: '#4a4a4a', color: themeColors.cardText }} placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-2 font-poppins" style={{ color: themeColors.headingText }}>Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 font-poppins" style={{ backgroundColor: themeColors.cardBackground, borderColor: '#4a4a4a', color: themeColors.cardText }} placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-2 font-poppins" style={{ color: themeColors.headingText }}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 font-poppins resize-none" style={{ backgroundColor: themeColors.cardBackground, borderColor: '#4a4a4a', color: themeColors.cardText }} placeholder="Tell me about your project..." />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-8 py-3 rounded-lg font-semibold font-poppins transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2" style={{ backgroundColor: themeColors.primary, color: 'white' }}>
                {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
              </motion.button>
              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;