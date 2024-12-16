import { motion } from 'framer-motion';
import { useState } from 'react';

const icons = {
  'voice-recording': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-blue-300 to-purple-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      </div>
    </div>
  ),
  'data': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-green-300 to-teal-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7" />
          <path d="M16 12h-5" />
          <path d="M16 8h-7" />
          <path d="M8 16H6" />
          <circle cx="18" cy="18" r="3" />
          <path d="M18 15v6" />
          <path d="M15 18h6" />
        </svg>
      </div>
    </div>
  ),
  'ai': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-indigo-300 to-purple-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M12 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
          <path d="M20 12a2 2 0 0 1-2-2 2 2 0 0 1-2-2" />
          <path d="M4 12a2 2 0 0 0 2-2 2 2 0 0 0 2-2" />
          <path d="M20 12a2 2 0 0 0-2 2 2 2 0 0 0-2 2" />
          <path d="M4 12a2 2 0 0 1 2 2 2 2 0 0 1 2 2" />
        </svg>
      </div>
    </div>
  ),
  'project': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-pink-300 to-red-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      </div>
    </div>
  ),
  'blog': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-yellow-300 to-orange-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      </div>
    </div>
  ),
  'case-study': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M12 18v-6" />
          <path d="M8 15l4 3 4-3" />
        </svg>
      </div>
    </div>
  ),
  'contact': (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl transform rotate-6 shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl transform -rotate-3 shadow-lg" />
      <div className="relative bg-gradient-to-br from-purple-300 to-pink-400 rounded-xl p-2 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </div>
    </div>
  )
};

const Icon3D = ({ type, size = 'default', className = '', onClick, interactive = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const sizeClasses = {
    small: 'scale-75',
    default: 'scale-100',
    large: 'scale-150'
  };

  const pulseAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const clickAnimation = {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const handleClick = () => {
    if (interactive) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      if (onClick) onClick();
    }
  };

  return (
    <motion.div
      className={`inline-block ${sizeClasses[size]} ${className} ${interactive ? 'cursor-pointer' : ''}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      animate={isClicked ? clickAnimation : isHovered ? {
        scale: interactive ? 1.1 : 1,
        rotate: interactive ? 5 : 0,
      } : {}}
      whileHover={interactive ? {
        filter: "brightness(1.2)",
      } : {}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10
      }}
    >
      <motion.div
        animate={interactive && isHovered ? pulseAnimation : {}}
      >
        {icons[type]}
      </motion.div>
    </motion.div>
  );
};

export default Icon3D; 