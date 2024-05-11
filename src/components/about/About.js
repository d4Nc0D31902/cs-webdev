import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-us"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.div>
      <div className="line"></div>
      <div className="about-content">
        <div className="image-box"></div>
        <div>
          <motion.div
            className="what-we-do"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2, delay: 0.1 },
            }} 
          >
            What We Do
          </motion.div>
          <motion.div
            className="description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2, delay: 0.1 },
            }} 
          >
            At Capstone Solutions, we offer comprehensive web and mobile
            application development services specifically designed for students.
            Whether it's creating a platform for academic collaboration,
            developing tools for project management, or designing intuitive
            mobile apps for on-the-go learning, we are dedicated to delivering
            solutions that empower students to succeed.
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
