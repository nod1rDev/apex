import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';

const contactInfo = [
  {
    title: 'Email',
    value: 'apexbart@my.com',
    icon: '📧',
    description: 'For general inquiries and project discussions'
  },
  {
    title: 'Phone',
    value: '+855765630952',
    icon: '📱',
    description: 'Available during business hours (GMT+7)'
  },
  {
    title: 'Location',
    value: 'Phnom Penh, Cambodia',
    icon: '📍',
    description: 'Serving clients globally'
  }
];

const socialLinks = [
  {
    platform: 'Instagram',
    username: '@cobrabart',
    url: 'https://instagram.com/cobrabart',
    icon: '📸',
    description: 'Follow us for updates and behind-the-scenes content'
  },
  {
    platform: 'LinkedIn',
    username: 'cobrabart',
    url: 'https://linkedin.com/in/cobrabart',
    icon: '💼',
    description: 'Connect with us professionally'
  },
  {
    platform: 'Telegram',
    username: '@cobrabart',
    url: 'https://t.me/cobrabart',
    icon: '✈️',
    description: 'Quick responses and project discussions'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    languages: []
  });

  const projectTypes = [
    'Voice Recording',
    'Data Collection',
    'AI Solutions',
    'Project Management',
    'Other'
  ];

  const languages = [
    'English',
    'Russian',
    'Chinese',
    'Uzbek',
    'Khmer',
    'Malay',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedLanguages = checked
        ? [...formData.languages, value]
        : formData.languages.filter(lang => lang !== value);
      
      setFormData(prev => ({
        ...prev,
        languages: updatedLanguages
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Contact Us"
        description="Get in touch with ApexBart Solutions for professional voice recording, multilingual support, and project management services. We're here to help with your communication needs."
        keywords="contact, voice recording services, project inquiry, multilingual support, professional services"
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
              Get in Touch
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Let's discuss how we can help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Languages Required
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {languages.map(lang => (
                      <label key={lang} className="flex items-center space-x-2 text-gray-300">
                        <input
                          type="checkbox"
                          name="languages"
                          value={lang}
                          checked={formData.languages.includes(lang)}
                          onChange={handleChange}
                          className="form-checkbox h-4 w-4 text-purple-500 bg-gray-800 border-gray-700 rounded"
                        />
                        <span>{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Direct Contact */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center space-x-4">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Connect With Us</h2>
                <div className="space-y-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <h3 className="text-sm font-medium">{social.platform}</h3>
                        <p className="text-white">{social.username}</p>
                        <p className="text-sm text-gray-500">{social.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 