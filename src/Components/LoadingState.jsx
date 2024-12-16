import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingState = ({
  type = 'spinner',
  color = 'blue',
  size = 'default',
  text = 'Loading...',
  progress,
  showProgress = false
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (type === 'dots') {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.');
      }, 500);
      return () => clearInterval(interval);
    }
  }, [type]);

  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const textSizeClasses = {
    small: 'text-sm',
    default: 'text-base',
    large: 'text-lg'
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${progress}%`,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const renderLoadingIndicator = () => {
    switch (type) {
      case 'spinner':
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-gray-200 border-t-${color}-600 rounded-full`}
            variants={spinnerVariants}
            animate="animate"
          />
        );

      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-${color}-600 rounded-full`}
            variants={pulseVariants}
            animate="animate"
          />
        );

      case 'dots':
        return (
          <div className={`flex space-x-2 ${textSizeClasses[size]}`}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 bg-${color}-600 rounded-full`}
                animate={{
                  y: ["0%", "-50%", "0%"],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 bg-${color}-600 rounded-full`}
                animate={{
                  height: ["16px", "32px", "16px"]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {renderLoadingIndicator()}
      
      {text && (
        <motion.p
          className={`${textSizeClasses[size]} text-gray-600 font-medium`}
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          {text}{type === 'dots' ? dots : ''}
        </motion.p>
      )}

      {showProgress && typeof progress === 'number' && (
        <div className="w-full max-w-xs">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-${color}-600`}
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="mt-1 text-right text-sm text-gray-500">
            {Math.round(progress)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingState; 