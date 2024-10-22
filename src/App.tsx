import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import KDC from './components/KDC';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-blue-400">Neuraq Technologies</h1>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {['About', 'Expertise', 'Portfolio', 'KDC', 'Team', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-gray-800 z-40 md:hidden"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['About', 'Expertise', 'Portfolio', 'KDC', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <KDC />
      <Team />
      <Testimonials />
      <Contact />

      <footer className="bg-gray-800 py-8 text-center">
        <p>&copy; 2024 Neuraq Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;