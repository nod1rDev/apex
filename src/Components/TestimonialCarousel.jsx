import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card3D from './Card3D';

const testimonials = [
  {
    id: 1,
    text: "ApexBart Solutions transformed our voice recording process. Their attention to detail and multilingual expertise made our project a huge success.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "Global Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5
  },
  {
    id: 2,
    text: "The AI solutions provided by ApexBart have significantly improved our customer service efficiency. Highly recommended for any AI integration project.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "InnovateAI",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5
  },
  {
    id: 3,
    text: "Working with ApexBart on our data collection project was seamless. Their project management and quality control processes are exceptional.",
    author: "Emily Watson",
    role: "Research Director",
    company: "DataTech Research",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5
  },
  {
    id: 4,
    text: "The team's expertise in multiple languages and cultures was invaluable for our global expansion project. They delivered beyond our expectations.",
    author: "David Kim",
    role: "Operations Manager",
    company: "Global Ventures",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-4xl px-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <Card3D className="w-full" depth={40}>
                <div className="bg-gray-800 p-8 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <StarRating rating={testimonials[currentIndex].rating} />
                      <p className="mt-4 text-lg text-gray-300 italic">
                        "{testimonials[currentIndex].text}"
                      </p>
                      <div className="mt-4">
                        <p className="font-semibold text-white">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center space-x-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Autoplay Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        {isAutoPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TestimonialCarousel; 