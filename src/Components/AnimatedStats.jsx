import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Icon3D from './Icon3D';

const CountUp = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        const percentage = Math.min(progress / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(end * easeOutQuart));
        
        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView]);
  
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const AnimatedStats = ({ stats, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Background Card with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl transform rotate-3 scale-[1.02]" />
            <div className="relative bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <Icon3D type={stat.icon} size="small" />
                <h3 className="text-lg font-medium text-gray-300">
                  {stat.label}
                </h3>
              </div>
              
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
                {stat.change && (
                  <span className={`text-sm font-medium ${
                    stat.change > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change > 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
                  </span>
                )}
              </div>
              
              {stat.description && (
                <p className="mt-2 text-sm text-gray-400">
                  {stat.description}
                </p>
              )}

              {/* Progress Bar */}
              {stat.progress !== undefined && (
                <div className="mt-4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-400">
                    <span>Progress</span>
                    <span>{stat.progress}%</span>
                  </div>
                </div>
              )}

              {/* Sparkline or Mini Chart */}
              {stat.trend && (
                <div className="mt-4 h-12">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      d={`M 0,${40 - stat.trend[0]} ${stat.trend.map((value, i) => 
                        `L ${(i + 1) * (100 / (stat.trend.length - 1))},${40 - value}`
                      ).join(' ')}`}
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#A855F7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedStats; 