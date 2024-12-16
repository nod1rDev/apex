import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const features = [
  {
    title: 'Multiple Languages',
    description: 'Voice recording services in Khmer, Malay, Uzbek, Russian, and many more languages with native speakers.',
    icon: '🌍',
    details: ['Native speakers', 'Cultural context', 'Regional accents', 'Natural flow']
  },
  {
    title: 'AI Training Data',
    description: 'High-quality voice data specifically collected and processed for AI model training and development.',
    icon: '🤖',
    details: ['Structured datasets', 'Clean audio', 'Metadata tagging', 'Custom formats']
  },
  {
    title: 'Cultural Context',
    description: 'Native speakers ensure proper cultural context and natural language flow for authentic communication.',
    icon: '🎭',
    details: ['Local expressions', 'Cultural nuances', 'Regional variations', 'Authentic delivery']
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality checks and professional audio processing for optimal results.',
    icon: '✨',
    details: ['Multiple reviews', 'Technical checks', 'Content validation', 'Quality assurance']
  }
];

const specifications = [
  { label: 'Sampling Rate', value: '44.1 kHz', description: 'Industry standard for high-quality audio' },
  { label: 'Bit Depth', value: '16-bit', description: 'Professional audio quality' },
  { label: 'Format', value: 'WAV/MP3', description: 'Flexible format options' },
  { label: 'Quality Check', value: 'Multiple Stages', description: 'Comprehensive quality assurance' }
];

const languages = [
  { name: 'English', variants: ['US', 'UK', 'Australian', 'Singaporean'] },
  { name: 'Russian', variants: ['Standard', 'Regional'] },
  { name: 'Chinese', variants: ['Mandarin', 'Cantonese'] },
  { name: 'Uzbek', variants: ['Standard', 'Regional'] },
  { name: 'Khmer', variants: ['Standard'] },
  { name: 'Malay', variants: ['Standard', 'Regional'] }
];

const VoiceRecording = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Voice Recording Services"
        description="Professional multilingual voice recording services for AI training, corporate videos, e-learning, and more. Native speakers in English, Russian, Chinese, Uzbek, and other languages."
        keywords="voice recording, multilingual voice over, AI training data, audio recording, professional voice actors, native speakers"
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
              Multilingual Voice Recording
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional voice recording services for AI training and development
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
                className="bg-gray-800 rounded-xl p-8"
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

      {/* Languages Section */}
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
              Supported Languages
            </h2>
            <p className="text-gray-400">
              Professional voice recording in multiple languages and regional variants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{lang.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {lang.variants.map((variant) => (
                    <span
                      key={variant}
                      className="px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-300"
                    >
                      {variant}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Technical Specifications
            </h2>
            <p className="text-gray-400">
              Industry-standard specifications for optimal quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-sm font-medium text-gray-400 mb-2">
                  {spec.label}
                </h3>
                <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                <p className="text-sm text-gray-500">{spec.description}</p>
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
              Ready to Start Your Project?
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

export default VoiceRecording; 