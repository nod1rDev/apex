import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';

const features = [
  {
    title: 'Custom AI Development',
    description: 'Tailored AI solutions designed to meet your specific business needs.',
    icon: '🤖',
    details: [
      'Machine Learning Models',
      'Neural Networks',
      'Natural Language Processing',
      'Computer Vision'
    ]
  },
  {
    title: 'Process Automation',
    description: 'Intelligent automation solutions to streamline your business operations.',
    icon: '⚡',
    details: [
      'Workflow Automation',
      'Document Processing',
      'Data Analysis',
      'Task Automation'
    ]
  },
  {
    title: 'AI Integration',
    description: 'Seamless integration of AI capabilities into your existing systems.',
    icon: '🔄',
    details: [
      'API Development',
      'System Integration',
      'Cloud Deployment',
      'Performance Optimization'
    ]
  },
  {
    title: 'AI Consulting',
    description: 'Expert guidance on AI strategy and implementation.',
    icon: '💡',
    details: [
      'Strategy Development',
      'Technology Assessment',
      'Implementation Planning',
      'ROI Analysis'
    ]
  }
];

const technologies = [
  {
    category: 'Machine Learning',
    tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    applications: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection'],
    industries: ['Finance', 'Healthcare', 'Manufacturing']
  },
  {
    category: 'Natural Language Processing',
    tools: ['BERT', 'GPT', 'spaCy'],
    applications: ['Text Analysis', 'Sentiment Analysis', 'Language Translation'],
    industries: ['Customer Service', 'Content Analysis', 'Education']
  },
  {
    category: 'Computer Vision',
    tools: ['OpenCV', 'TensorFlow Vision', 'PyTorch Vision'],
    applications: ['Object Detection', 'Image Recognition', 'Video Analysis'],
    industries: ['Security', 'Retail', 'Automotive']
  }
];

const caseStudies = [
  {
    title: 'Automated Customer Service',
    description: 'Implemented an AI-powered customer service system for a global retail chain.',
    metrics: {
      'Response Time': '-60%',
      'Customer Satisfaction': '+35%',
      'Cost Reduction': '40%'
    }
  },
  {
    title: 'Predictive Maintenance',
    description: 'Developed a predictive maintenance system for manufacturing equipment.',
    metrics: {
      'Downtime Reduction': '75%',
      'Maintenance Costs': '-45%',
      'Efficiency Increase': '30%'
    }
  },
  {
    title: 'Document Processing',
    description: 'Created an automated document processing system for a financial institution.',
    metrics: {
      'Processing Speed': '10x faster',
      'Accuracy Rate': '99.9%',
      'Cost Savings': '65%'
    }
  }
];

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState('machine learning');

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="AI Solutions"
        description="Custom AI development, process automation, and AI integration services. Expert solutions in machine learning, natural language processing, and computer vision."
        keywords="AI solutions, machine learning, process automation, AI integration, custom AI development, artificial intelligence"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforming businesses through intelligent automation and AI innovation
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
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Technologies Section */}
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
              Technologies & Applications
            </h2>
            <p className="text-gray-400">
              Explore our AI technology stack and applications
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {technologies.map((tech) => (
                <button
                  key={tech.category.toLowerCase()}
                  onClick={() => setActiveTab(tech.category.toLowerCase())}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tech.category.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition-colors duration-300 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {tech.category}
                </button>
              ))}
            </div>
          </div>

          {technologies.map((tech) => (
            <div
              key={tech.category}
              className={`${
                activeTab === tech.category.toLowerCase() ? 'block' : 'hidden'
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
                    <h3 className="text-lg font-semibold text-white mb-4">Tools</h3>
                    <ul className="space-y-2">
                      {tech.tools.map((tool) => (
                        <li key={tool} className="text-gray-300">{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Applications</h3>
                    <ul className="space-y-2">
                      {tech.applications.map((app) => (
                        <li key={app} className="text-gray-300">{app}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
                    <ul className="space-y-2">
                      {tech.industries.map((industry) => (
                        <li key={industry} className="text-gray-300">{industry}</li>
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
              Success Stories
            </h2>
            <p className="text-gray-400">
              Real-world impact of our AI solutions
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
                      <span className="text-blue-400 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions; 