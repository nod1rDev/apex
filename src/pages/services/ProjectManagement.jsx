import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../../components/SEO';

const features = [
  {
    title: 'Project Planning',
    description: 'Comprehensive project planning and strategy development.',
    icon: '📋',
    details: [
      'Scope Definition',
      'Timeline Planning',
      'Resource Allocation',
      'Risk Assessment'
    ]
  },
  {
    title: 'Team Management',
    description: 'Effective team coordination and communication management.',
    icon: '👥',
    details: [
      'Team Coordination',
      'Task Assignment',
      'Progress Tracking',
      'Performance Monitoring'
    ]
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality assurance and control processes.',
    icon: '✅',
    details: [
      'Quality Standards',
      'Review Process',
      'Testing Protocols',
      'Continuous Improvement'
    ]
  },
  {
    title: 'Reporting & Analytics',
    description: 'Detailed project reporting and performance analytics.',
    icon: '📊',
    details: [
      'Progress Reports',
      'Performance Metrics',
      'Data Analysis',
      'Insights Generation'
    ]
  }
];

const methodologies = [
  {
    name: 'Agile',
    tools: ['Trello', 'Jira', 'Slack'],
    practices: ['Sprints', 'Daily Standups', 'Retrospectives'],
    benefits: ['Flexibility', 'Fast Delivery', 'Continuous Improvement']
  },
  {
    name: 'Waterfall',
    tools: ['Microsoft Project', 'Gantt Charts', 'Documentation'],
    practices: ['Sequential Phases', 'Detailed Planning', 'Formal Reviews'],
    benefits: ['Clear Structure', 'Predictability', 'Comprehensive Documentation']
  },
  {
    name: 'Hybrid',
    tools: ['Lark', 'Asana', 'Confluence'],
    practices: ['Adaptive Planning', 'Mixed Methods', 'Flexible Delivery'],
    benefits: ['Best of Both', 'Adaptability', 'Risk Management']
  }
];

const caseStudies = [
  {
    title: 'Global Voice Recording Project',
    description: 'Managed a large-scale voice recording project across multiple countries.',
    metrics: {
      'Project Duration': '6 months',
      'Team Size': '50+ members',
      'Languages': '10+',
      'On-time Delivery': '100%'
    }
  },
  {
    title: 'AI Data Collection Initiative',
    description: 'Coordinated data collection and annotation for AI training.',
    metrics: {
      'Data Points': '1M+',
      'Accuracy Rate': '99.9%',
      'Team Efficiency': '+40%',
      'Cost Savings': '35%'
    }
  },
  {
    title: 'Enterprise System Integration',
    description: 'Led the integration of AI solutions into existing enterprise systems.',
    metrics: {
      'Systems Integrated': '5+',
      'Downtime': '0%',
      'User Adoption': '95%',
      'ROI': '250%'
    }
  }
];

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState('agile');

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Project Management Services"
        description="Professional project management services for voice recording, data collection, and AI implementation projects. Expert team coordination and quality control."
        keywords="project management, team coordination, quality control, project planning, agile methodology, waterfall methodology"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-green-600 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Project Management
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Delivering excellence through effective project management and team coordination
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
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Methodologies Section */}
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
              Project Management Methodologies
            </h2>
            <p className="text-gray-400">
              Flexible approaches tailored to your project needs
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              {methodologies.map((method) => (
                <button
                  key={method.name.toLowerCase()}
                  onClick={() => setActiveTab(method.name.toLowerCase())}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === method.name.toLowerCase()
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  } transition-colors duration-300 first:rounded-l-lg last:rounded-r-lg`}
                >
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          {methodologies.map((method) => (
            <div
              key={method.name}
              className={`${
                activeTab === method.name.toLowerCase() ? 'block' : 'hidden'
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
                      {method.tools.map((tool) => (
                        <li key={tool} className="text-gray-300">{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Practices</h3>
                    <ul className="space-y-2">
                      {method.practices.map((practice) => (
                        <li key={practice} className="text-gray-300">{practice}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {method.benefits.map((benefit) => (
                        <li key={benefit} className="text-gray-300">{benefit}</li>
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
              Project Success Stories
            </h2>
            <p className="text-gray-400">
              Real results from our project management expertise
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
                      <span className="text-green-400 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectManagement; 