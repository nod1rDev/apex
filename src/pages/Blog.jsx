import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Card3D from '../components/Card3D';
import Icon3D from '../components/Icon3D';
import { blogPosts } from '../data/content';

const categories = [
  'All',
  'Voice Recording',
  'Data Collection',
  'AI Solutions',
  'Project Management'
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'readTime'
  const [isGridView, setIsGridView] = useState(true);

  // Get unique tags from all blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => post.tags.includes(tag));
    return matchesCategory && matchesSearch && matchesTags;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return parseInt(b.readTime) - parseInt(a.readTime);
    }
  });

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title="Blog - Industry Insights & Updates"
        description="Stay updated with the latest insights on voice recording, data collection, AI solutions, and project management. Expert articles and industry trends."
        keywords="blog, voice recording, data collection, AI solutions, project management, industry insights, technology trends"
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
              Blog & Insights
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Expert insights, industry trends, and the latest developments in our field
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 pr-12"
              />
              <Icon3D
                type="blog"
                size="small"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  #{tag}
                </motion.button>
              ))}
            </div>

            {/* View Options */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    isGridView ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    !isGridView ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="date">Sort by Date</option>
                <option value="readTime">Sort by Read Time</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={isGridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${post.id}`}>
                  <Card3D>
                    <div className="bg-gray-800 rounded-xl overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-4xl">{post.image}</span>
                          <span className="text-sm text-purple-400">{post.readTime}</span>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Icon3D type="blog" size="large" className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                No posts found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card3D>
            <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Icon3D type="blog" size="large" className="mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest insights and industry updates
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </Card3D>
        </div>
      </section>
    </div>
  );
};

export default Blog; 