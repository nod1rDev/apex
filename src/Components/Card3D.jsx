import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const ParticleEffect = ({ isHovered }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isHovered) {
      const newParticles = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, scale: 0, opacity: 0 }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 20 - 10)}%`
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + (Math.random() * 20 - 10)}%`
            ],
            scale: [particle.scale, 0],
            opacity: [particle.opacity, 0]
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

const Card3D = ({
  children,
  className = '',
  depth = 0.8,
  glareIntensity = 0.4,
  parallaxIntensity = 1,
  interactive = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    interactive ? ["17.5deg", "-17.5deg"] : ["0deg", "0deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    interactive ? ["-17.5deg", "17.5deg"] : ["0deg", "0deg"]
  );

  const parallaxX = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    interactive ? [`${-10 * parallaxIntensity}px`, `${10 * parallaxIntensity}px`] : ["0px", "0px"]
  );
  const parallaxY = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    interactive ? [`${-10 * parallaxIntensity}px`, `${10 * parallaxIntensity}px`] : ["0px", "0px"]
  );

  const handleMouseMove = (e) => {
    if (!interactive) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Ambient Shadow */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: 0.95,
        }}
        animate={{
          scale: isHovered ? 1 : 0.95,
          filter: isHovered ? 'blur(20px)' : 'blur(15px)'
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="absolute inset-0 bg-black/20 -z-10 rounded-xl"
      />

      {/* Dynamic Shadow */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
          rotateX,
          rotateY,
        }}
        animate={{
          opacity: isHovered ? 0.4 : 0.2
        }}
        className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent -z-10 rounded-xl blur-xl"
      />

      {/* Card Content with Parallax */}
      <motion.div
        style={{
          x: parallaxX,
          y: parallaxY,
          transform: `translateZ(${depth}px)`,
        }}
        animate={{
          scale: isHovered && interactive ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="relative"
      >
        {children}
      </motion.div>

      {/* Particle Effect */}
      <ParticleEffect isHovered={isHovered && interactive} />

      {/* Enhanced Glare Effect */}
      {isHovered && interactive && (
        <motion.div
          style={{
            background: `linear-gradient(105deg, 
              transparent 20%, 
              rgba(255, 255, 255, ${glareIntensity}) 40%,
              rgba(255, 255, 255, ${glareIntensity}) 60%,
              transparent 80%)`,
            transform: `translateZ(${depth + 1}px)`,
          }}
          animate={{
            opacity: [0, 1, 0],
            x: ['0%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 rounded-xl pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default Card3D; 