import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Share2 } from 'lucide-react';

const KDC: React.FC = () => {
  const features = [
    { icon: Users, title: 'Collaborative Network', description: 'Connect with top developers in Kerala' },
    { icon: Code, title: 'Knowledge Sharing', description: 'Learn and grow through workshops and meetups' },
    { icon: Share2, title: 'Open Source Projects', description: 'Contribute to impactful community projects' },
  ];

  return (
    <section id="kdc" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kerala Developers Community (KDC)
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our thriving tech community and be part of the innovation revolution in Kerala.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon size={48} className="text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KDC;