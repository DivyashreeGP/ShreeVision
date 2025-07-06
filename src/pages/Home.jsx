import React from 'react';
import '../styles/main.css';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="home-container flex flex-col md:flex-row justify-center items-center gap-10 p-6 bg-gradient-to-r from-white to-blue-50 min-h-screen">
      
      {/* 👇 Image Section with Animation */}
      <Element name="hero">
        <motion.div
          className="image-section w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/profile-horizontal.png"
            alt="Divyashree"
            className="landscape-img max-w-full rounded-xl shadow-lg"
          />
        </motion.div>
      </Element>

      {/* 👇 Intro Text Section */}
      <Element name="intro">
        <motion.div
          className="info-section w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="your-name text-4xl font-bold text-[#3A6D8C] mb-4">
            I'm Divyashree GP
          </h2>
          <h3 className="text-xl font-medium mb-3">
            Aspiring Cybersecurity & AI Engineer
          </h3>
          <p className="text-gray-700 text-md">
            I’m passionate about building secure systems, solving real-world tech problems,
            and making a difference through code. Welcome to my digital portfolio!
          </p>
        </motion.div>
      </Element>
      
    </section>
  );
};

export default Home;
