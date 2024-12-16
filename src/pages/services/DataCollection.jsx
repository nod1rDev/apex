import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';

const features = [
  {
    title: 'Image Data Collection',
    description: 'High-quality image datasets for AI training and computer vision applications.',
    icon: '📸',
    details: [
      'Custom datasets',
      'Multiple categories',
      'Diverse scenarios',
      'Metadata tagging'
    ]
  },
  {
    title: 'Video Collection',
    description: 'Professional video data collection for machine learning and analysis.',
    icon: '🎥',
    details: [
      'HD quality',
      'Various environments',
      'Multiple angles',
      'Custom durations'
    ]
  },
  {
    title: 'Global Coverage',
    description: 'Data collection from diverse locations worldwide for comprehensive datasets.',
    icon: '🌎',
    details: [
      'Multiple regions',
      'Cultural diversity',
      'Local contexts',
      'Geographic variety'
    ]
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes for data accuracy and reliability.',
    icon: '✅',
    details: [
      'Manual verification',
      'Automated checks',
      'Error correction',
      'Consistency validation'
    ]
  }
];

const dataTypes = [
  {
    category: 'Images',
    formats: ['JPEG', 'PNG', 'RAW'],
    resolutions: ['HD', '4K', '8K'],
    applications: ['Computer Vision', 'Object Detection', 'Image Recognition']
  },
  {
    category: 'Videos',
    formats: ['MP4', 'MOV', 'AVI'],
    resolutions: ['1080p', '4K', '8K'],
    applications: ['Motion Analysis', 'Behavior Recognition', 'Scene Understanding']
  },
  {
    category: 'Audio',
    formats: ['WAV', 'MP3', 'FLAC'],
    quality: ['44.1kHz', '48kHz', '96kHz'],
    applications: ['Speech Recognition', 'Sound Classification', 'Audio Analysis']
  }
];

const caseStudies = [
  {
    title: 'Retail Analytics Dataset',
    description: 'Collected comprehensive in-store customer behavior data for a major retail chain.',
    metrics: {
      'Images Collected': '100,000+',
      'Videos Recorded': '1,000+ hours',
      'Accuracy Rate': '99.8%'
    }
  },
  {
    title: 'Traffic Monitoring System',
    description: 'Gathered urban traffic data across multiple cities for AI-powered traffic management.',
    metrics: {
      'Locations': '50+ cities',
      'Duration': '6 months',
      'Data Points': '1M+'
    }
  },
  {
    title: 'Security System Training',
    description: 'Created diverse security footage dataset for AI security system training.',
    metrics: {
      'Scenarios': '200+',
      'Environments': '50+',
      'Success Rate': '99.5%'
    }
  }
];

const DataCollection = () => {
  const [activeTab, setActiveTab] = useState('images');

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Data Collection Services"
        description="Professional data collection services for AI and machine learning projects. High-quality image, video, and audio data collection worldwide."
        keywords="data collection, image datasets, video collection, AI training data, machine learning datasets, global data collection"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-600 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Professional Data Collection
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Comprehensive data collection services for AI and machine learning applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Data Types & Specifications
            </h2>
            <p className="text-gray-400">
              Explore our comprehensive data collection capabilities
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {dataTypes.map((type) => (
                <button
                  key={type.category.toLowerCase()}
                  onClick={() => setActiveTab(type.category.toLowerCase())}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === type.category.toLowerCase()
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition-colors duration-300 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {type.category}
                </button>
              ))}
            </div>
          </div>

          {dataTypes.map((type) => (
            <div
              key={type.category}
              className={`${
                activeTab === type.category.toLowerCase() ? 'block' : 'hidden'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 rounded-lg p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Formats</h3>
                    <ul className="space-y-2">
                      {type.formats.map((format) => (
                        <li key={format} className="text-gray-300">{format}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {type.resolutions ? 'Resolutions' : 'Quality'}
                    </h3>
                    <ul className="space-y-2">
                      {(type.resolutions || type.quality).map((spec) => (
                        <li key={spec} className="text-gray-300">{spec}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Applications</h3>
                    <ul className="space-y-2">
                      {type.applications.map((app) => (
                        <li key={app} className="text-gray-300">{app}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Case Studies
            </h2>
            <p className="text-gray-400">
              Success stories from our data collection projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-500">{key}</span>
                      <span className="text-purple-400 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your Data Collection Project?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCollection; 