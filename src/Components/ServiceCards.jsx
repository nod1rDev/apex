import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Voice Recording & Data Collection',
    description: 'Professional voice recording services and comprehensive data collection for AI training.',
    icon: '🎙️',
    path: '/services/voice-recording',
    color: 'from-blue-500 to-blue-700'
  },
  {
    title: 'Professional Voice-Over',
    description: 'High-quality voice-over services for various media projects and applications.',
    icon: '🎧',
    path: '/services/voice-over',
    color: 'from-purple-500 to-purple-700'
  },
  {
    title: 'Transcription & Translation',
    description: 'Accurate transcription and translation services in multiple languages.',
    icon: '📝',
    path: '/services/transcription',
    color: 'from-green-500 to-green-700'
  },
  {
    title: 'AI & Automation Solutions',
    description: 'Cutting-edge AI integration and automation solutions for business efficiency.',
    icon: '🤖',
    path: '/services/ai-solutions',
    color: 'from-red-500 to-red-700'
  },
  {
    title: 'Freelancer Services',
    description: 'Access to a global network of skilled professionals for your projects.',
    icon: '👥',
    path: '/services/freelancer',
    color: 'from-yellow-500 to-yellow-700'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project management services for seamless execution.',
    icon: '📊',
    path: '/services/project-management',
    color: 'from-indigo-500 to-indigo-700'
  }
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Link to={service.path}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
              <div className={`p-4 bg-gradient-to-r ${service.color} bg-opacity-10`}>
                <span className="text-white text-sm font-medium">Learn More →</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards; 