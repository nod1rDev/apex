import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollProgress = ({ color = 'blue' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showToTop, setShowToTop] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowToTop(scrollPosition > windowHeight * 0.5);
      setReachedEnd(scrollPosition + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50"
        style={{ transformOrigin: '0%' }}
      >
        <motion.div
          className={`h-full bg-${color}-600`}
          style={{ scaleX }}
        />
      </motion.div>

      {/* Scroll Indicators */}
      <div className="fixed right-4 bottom-4 space-y-2 z-50">
        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showToTop ? 1 : 0,
            scale: showToTop ? 1 : 0
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={`p-3 rounded-full bg-${color}-600 text-white shadow-lg hover:bg-${color}-700 transition-colors duration-300`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>

        {/* Scroll to Bottom Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: !reachedEnd && showToTop ? 1 : 0,
            scale: !reachedEnd && showToTop ? 1 : 0
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToBottom}
          className={`p-3 rounded-full bg-${color}-600 text-white shadow-lg hover:bg-${color}-700 transition-colors duration-300`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>

        {/* Reading Progress Indicator */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2"
          style={{ opacity: scrollYProgress }}
        >
          <motion.div
            className={`px-2 py-1 bg-${color}-600 rounded text-white text-sm font-medium`}
          >
            <motion.span style={{ x: scrollYProgress }}>
              {Math.round(scrollYProgress.get() * 100)}%
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ScrollProgress; 