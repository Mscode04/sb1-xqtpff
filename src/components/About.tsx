import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8 text-center text-blue-400">
            About Neuraq Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl mb-12 text-center text-gray-300">
            We deliver top-tier web, mobile, and custom software solutions that drive innovation and transform businesses.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Code size={48} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-300">Comprehensive web and mobile solutions tailored to your needs.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Cpu size={48} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300">Cutting-edge AI solutions to automate and optimize your processes.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <Globe size={48} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving clients worldwide with innovative tech solutions.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;