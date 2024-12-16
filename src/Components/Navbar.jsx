import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon3D from './Icon3D';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Services', path: '/services', icon: 'ai' },
    { name: 'Blog', path: '/blog', icon: 'blog' },
    { name: 'Case Studies', path: '/case-studies', icon: 'case-study' },
    { name: 'Contact', path: '/contact', icon: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <Icon3D type="ai" size="small" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ApexBart
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  <motion.div
                    animate={{
                      backgroundColor: location.pathname === item.path
                        ? 'rgba(59, 130, 246, 0.2)'
                        : 'transparent',
                    }}
                    className="absolute inset-0 rounded-md -z-10"
                  />
                  <div className="flex items-center space-x-2">
                    <Icon3D type={item.icon} size="small" />
                    <span className={`${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={false}
                    animate={{
                      width: location.pathname === item.path ? '100%' : '0%',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-blue-600/20 text-white'
                        : 'text-gray-300 hover:bg-blue-600/10 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon3D type={item.icon} size="small" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 