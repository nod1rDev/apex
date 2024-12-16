import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ServiceCards from '../components/ServiceCards';
import WaveAnimation from '../components/WaveAnimation';
import SEO from '../components/SEO';

const teamMembers = [
  {
    name: "Shakhzod 'Bart'",
    role: "Founder & CEO",
    description: "Multilingual expert with extensive experience in voice recording and AI solutions.",
    languages: ["English", "Russian", "Uzbek", "Chinese"],
    image: "🎯"
  },
  {
    name: "Kami Chung",
    role: "Project Manager",
    description: "Skilled in project coordination and multilingual communication.",
    languages: ["Chinese", "English", "Cantonese", "Hakka"],
    image: "👩‍💼"
  },
  {
    name: "Navruz Darveshov",
    role: "Project Manager",
    description: "Expert in managing voice recording and localization projects.",
    languages: ["English", "Russian", "Turkish", "Uzbek"],
    image: "👨‍💼"
  },
  {
    name: "Movlonova Gulsima",
    role: "Project Manager",
    description: "Experienced in handling large-scale voice recording projects.",
    languages: ["English", "Russian", "Uzbek", "Korean"],
    image: "👩‍💼"
  }
];

const testimonials = [
  {
    text: "ApexBart Solutions exceeded our expectations with their high-quality voice recordings. Their attention to detail and commitment to excellence is commendable.",
    author: "Client A",
    role: "International Education Institution"
  },
  {
    text: "The multilingual support provided by ApexBart has been invaluable in helping us reach new markets. Their translation and localization services are top-notch.",
    author: "Client B",
    role: "Global Technology Company"
  },
  {
    text: "We are extremely satisfied with the project management services provided by ApexBart. They handled everything from start to finish with utmost professionalism.",
    author: "Client C",
    role: "Corporate Training Provider"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Voice Recording & Multilingual Solutions"
        description="ApexBart Solutions - Your partner in multilingual voice recording, AI solutions, and project management. Professional services in multiple languages including English, Russian, Chinese, and Uzbek."
        keywords="voice recording, multilingual support, AI solutions, project management, translation, localization, content creation, professional voiceover"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <WaveAnimation />
              <OrbitControls enableZoom={false} />
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
            ApexBart Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Empowering your business with cutting-edge voice recording, AI solutions, and project management services
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive range of services designed to help your business thrive in the digital age
            </p>
          </motion.div>

          <ServiceCards />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet our talented team of professionals dedicated to delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.description}</p>
                <div className="text-sm text-gray-500">
                  {member.languages.join(" • ")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What our clients say about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8"
              >
                <div className="text-2xl text-blue-400 mb-4">"</div>
                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 