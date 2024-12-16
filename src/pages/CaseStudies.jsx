import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import Card3D from '../components/Card3D';
import Icon3D from '../components/Icon3D';
import AnimatedStats from '../components/AnimatedStats';
import { caseStudies } from '../data/content';

const categories = ['All', 'Voice Recording', 'AI Solutions', 'Data Collection', 'Project Management'];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('duration'); // 'duration' or 'results'

  const filteredStudies = caseStudies
    .filter(study => {
      const matchesCategory = activeCategory === 'All' || study.category === activeCategory;
      const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.client.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'duration') {
        return parseInt(b.duration) - parseInt(a.duration);
      } else {
        // Sort by average improvement in results
        const getAvgResult = (study) => {
          const results = Object.values(study.results);
          const numericResults = results.map(r => parseInt(r.replace(/[^0-9.-]/g, '')));
          return numericResults.reduce((a, b) => a + b, 0) / results.length;
        };
        return getAvgResult(b) - getAvgResult(a);
      }
    });

  // Stats for the overview section
  const stats = [
    {
      label: 'Total Projects',
      value: caseStudies.length,
      icon: 'project',
      change: 25,
      trend: [20, 25, 30, 35, 40, 45]
    },
    {
      label: 'Success Rate',
      value: 98,
      icon: 'case-study',
      suffix: '%',
      progress: 98
    },
    {
      label: 'Client Satisfaction',
      value: 4.9,
      icon: 'ai',
      suffix: '/5',
      progress: 98
    },
    {
      label: 'Countries Served',
      value: 25,
      icon: 'data',
      change: 40,
      trend: [15, 18, 20, 22, 24, 25]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Case Studies - Success Stories"
        description="Explore our successful projects in voice recording, AI solutions, and data collection. Real results and client success stories."
        keywords="case studies, success stories, voice recording projects, AI implementation, data collection projects"
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
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real success stories and results from our client projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 pr-12"
              />
              <Icon3D
                type="case-study"
                size="small"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex justify-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              >
                <option value="duration">Sort by Duration</option>
                <option value="results">Sort by Results</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card3D>
                  <div
                    className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedStudy(study)}
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-4xl">{study.image}</span>
                        <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                          {study.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold text-white mb-2">
                        {study.title}
                      </h2>
                      <p className="text-gray-400 mb-4">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-gray-700 rounded-lg p-4">
                            <div className="text-sm text-gray-400">{key}</div>
                            <div className="text-lg font-semibold text-blue-400">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Icon3D type="case-study" size="large" className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                No case studies found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Card3D>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{selectedStudy.image}</span>
                      <div>
                        <h2 className="text-2xl font-semibold text-white">
                          {selectedStudy.title}
                        </h2>
                        <p className="text-gray-400">{selectedStudy.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStudy(null)}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
                      <p className="text-gray-400">{selectedStudy.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(selectedStudy.results).map(([key, value]) => (
                          <div key={key} className="bg-gray-700 rounded-lg p-4">
                            <div className="text-sm text-gray-400">{key}</div>
                            <div className="text-lg font-semibold text-blue-400">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Challenges</h3>
                        <ul className="space-y-2">
                          {selectedStudy.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-center text-gray-400">
                              <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                        <ul className="space-y-2">
                          {selectedStudy.solutions.map((solution, index) => (
                            <li key={index} className="flex items-center text-gray-400">
                              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-8 border-t border-gray-700">
                      <div>
                        <div className="text-sm text-gray-400">Client</div>
                        <div className="text-white">{selectedStudy.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white">{selectedStudy.duration}</div>
                      </div>
                      <Link
                        to="/contact"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                      >
                        Start Your Project
                      </Link>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card3D>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Icon3D type="case-study" size="large" className="mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-8">
                  Ready to Create Your Success Story?
                </h2>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 