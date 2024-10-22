import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Alice Johnson', role: 'CTO, TechCorp', content: 'Neuraq Technologies delivered an outstanding AI solution that transformed our business processes. Their expertise and professionalism are unmatched.' },
    { name: 'Bob Smith', role: 'Founder, EduTech', content: 'The team at Neuraq went above and beyond in developing our e-learning platform. Their innovative approach and attention to detail were impressive.' },
    { name: 'Carol Davis', role: 'Director, HealthCare Solutions', content: 'Working with Neuraq on our healthcare management system was a game-changer. Their deep understanding of the industry and technical prowess resulted in a top-notch product.' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto"
          >
            <p className="text-xl mb-4 text-gray-300">{testimonials[currentIndex].content}</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;