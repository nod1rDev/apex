import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';

// This would typically come from an API or CMS
const blogPost = {
  id: 1,
  title: 'The Future of Voice Recording in AI Development',
  content: `
    <h2>Introduction</h2>
    <p>Voice recording technology has become an integral part of AI development, particularly in training machine learning models for speech recognition, natural language processing, and voice synthesis. As we move forward, the intersection of voice recording and AI continues to evolve, bringing new possibilities and challenges.</p>

    <h2>The Current State of Voice Recording in AI</h2>
    <p>Today's voice recording technology has advanced significantly, offering high-quality audio capture with sophisticated noise reduction and enhancement capabilities. This advancement has been crucial for:</p>
    <ul>
      <li>Training speech recognition models</li>
      <li>Developing natural language processing systems</li>
      <li>Creating voice synthesis applications</li>
      <li>Improving voice-based user interfaces</li>
    </ul>

    <h2>Emerging Trends</h2>
    <p>Several exciting trends are shaping the future of voice recording in AI development:</p>
    <ol>
      <li>
        <strong>Real-time Processing:</strong>
        Advanced algorithms that can process and analyze voice recordings in real-time, enabling immediate feedback and response.
      </li>
      <li>
        <strong>Multilingual Capabilities:</strong>
        Improved ability to handle multiple languages and dialects, making AI systems more globally accessible.
      </li>
      <li>
        <strong>Emotional Intelligence:</strong>
        Systems that can detect and respond to emotional cues in voice recordings, enhancing human-AI interaction.
      </li>
    </ol>

    <h2>Applications in Various Industries</h2>
    <p>The integration of voice recording and AI is transforming multiple sectors:</p>
    <ul>
      <li>Healthcare: Patient care and medical documentation</li>
      <li>Education: Language learning and assessment</li>
      <li>Customer Service: Automated support and analysis</li>
      <li>Entertainment: Voice-controlled gaming and interactive media</li>
    </ul>

    <h2>Challenges and Solutions</h2>
    <p>While the future is promising, several challenges need to be addressed:</p>
    <ul>
      <li>Privacy and security concerns</li>
      <li>Accuracy in noisy environments</li>
      <li>Cultural and linguistic nuances</li>
      <li>Ethical considerations in AI development</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The future of voice recording in AI development is bright, with continuous innovations and improvements on the horizon. As technology advances, we can expect even more sophisticated applications and solutions that will transform how we interact with AI systems.</p>
  `,
  author: "Shakhzod 'Bart'",
  date: 'March 15, 2024',
  readTime: '5 min read',
  category: 'Voice Recording',
  tags: ['AI', 'Voice Recording', 'Technology'],
  image: '🎙️'
};

const relatedPosts = [
  {
    id: 2,
    title: 'Best Practices for Data Collection in Multiple Languages',
    excerpt: 'Learn the essential practices for collecting high-quality data across different languages and cultures.',
    author: 'Kami Chung',
    date: 'March 10, 2024',
    image: '📊'
  },
  {
    id: 5,
    title: 'The Impact of AI on Voice Recognition Technology',
    excerpt: 'Discover how AI is revolutionizing voice recognition and its applications in various industries.',
    author: "Shakhzod 'Bart'",
    date: 'February 25, 2024',
    image: '🎧'
  }
];

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen pt-16">
      <SEO 
        title={blogPost.title}
        description={blogPost.content.substring(0, 160)}
        keywords={blogPost.tags.join(', ')}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-600 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <span className="text-6xl">{blogPost.image}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-purple-200">
              <span>{blogPost.author}</span>
              <span>•</span>
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <article className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </article>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-900 transition-colors duration-300">
                  LinkedIn
                </button>
                <button className="px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors duration-300">
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="p-8">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl">{post.image}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for more insights and industry updates
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 