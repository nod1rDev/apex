import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import WaveAnimation from '../components/WaveAnimation';
import SEO from '../components/SEO';

const servicesData = [
  {
    id: 'voice-recording',
    title: 'Multilingual Voice Recording',
    description: 'High-quality voice data collection in multiple languages for AI and ML projects.',
    features: [
      'Native speakers in multiple languages',
      'High-quality audio recording',
      'Cultural context consideration',
      'AI training data preparation'
    ],
    icon: '🎙️',
    color: 'from-blue-500 to-blue-700',
    languages: ['English', 'Russian', 'Chinese', 'Uzbek', 'Khmer', 'Malay']
  },
  {
    id: 'data-collection',
    title: 'Data Collection',
    description: 'Comprehensive image and video data collection from global locations.',
    features: [
      'High-quality image datasets',
      'Video collection services',
      'Global location coverage',
      'Custom data requirements'
    ],
    icon: '📸',
    color: 'from-purple-500 to-purple-700',
    formats: ['Images', 'Videos', 'Audio', 'Text']
  },
  {
    id: 'ai-solutions',
    title: 'AI & Automation',
    description: 'Cutting-edge AI integration and automation solutions for business efficiency.',
    features: [
      'Workflow automation',
      'AI tool integration',
      'Process optimization',
      'Custom AI solutions'
    ],
    icon: '🤖',
    color: 'from-green-500 to-green-700',
    technologies: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Process Automation']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Expert project management using modern tools for seamless execution.',
    features: [
      'Trello & Lark integration',
      'Quality control',
      'Timeline management',
      'Resource optimization'
    ],
    icon: '📊',
    color: 'from-yellow-500 to-yellow-700',
    tools: ['Trello', 'Lark', 'Agile Methodologies', 'Quality Assurance']
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Professional Services"
        description="Comprehensive voice recording, data collection, AI solutions, and project management services. Expert multilingual support in English, Russian, Chinese, Uzbek, and more."
        keywords="voice recording services, data collection, AI solutions, project management, multilingual support, translation services, localization, content creation"
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <WaveAnimation />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Empowering your business with cutting-edge solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/services/${service.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{service.icon}</span>
                        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {service.languages && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <p className="text-sm text-gray-400">Supported Languages:</p>
                          <p className="text-gray-300 mt-2">{service.languages.join(', ')}</p>
                        </div>
                      )}
                      {service.formats && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <p className="text-sm text-gray-400">Supported Formats:</p>
                          <p className="text-gray-300 mt-2">{service.formats.join(', ')}</p>
                        </div>
                      )}
                      {service.technologies && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <p className="text-sm text-gray-400">Technologies:</p>
                          <p className="text-gray-300 mt-2">{service.technologies.join(', ')}</p>
                        </div>
                      )}
                      {service.tools && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <p className="text-sm text-gray-400">Tools & Methods:</p>
                          <p className="text-gray-300 mt-2">{service.tools.join(', ')}</p>
                        </div>
                      )}
                    </div>
                    <div className={`p-4 bg-gradient-to-r ${service.color} bg-opacity-10 flex justify-between items-center`}>
                      <span className="text-white text-sm font-medium">Learn More</span>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
