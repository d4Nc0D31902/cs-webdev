import React from "react";
import { motion } from "framer-motion";
import "./Parallax.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Parallax = () => {
  return (
    <div className="parallax-container">
      <div className="parallax1">
        <div className="parallax-content"></div>
      </div>
      <div className="services">Services</div>
      <div className="white-line" />
      <div className="carousel-container">
        <motion.div className="card1" whileHover={{ scale: 1.1 }}>
          <div className="service-title1">Web Design</div>
        </motion.div>
        <motion.div className="card2" whileHover={{ scale: 1.1 }}>
          <div className="service-title2">Web Development</div>
        </motion.div>
        <motion.div className="card3" whileHover={{ scale: 1.1 }}>
          <div className="service-title3">Mobile Development</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Parallax;
