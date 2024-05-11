import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const ImageCarousel = () => {
  const slideVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2, // Delay added for staggered animation
      },
    },
  };

  return (
    <div className="carousel-box">
      <Carousel className="carousel" autoPlay infiniteLoop showThumbs={false}>
        <motion.div
          className="image-wrapper"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
        >
          <div className="black-overlay">
            <h1>Capstone Solutions</h1>
          </div>
          <img src="./images/city.jpg" alt="Image 1" />
        </motion.div>
        <motion.div
          className="image-wrapper"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
        >
          <div className="black-overlay">
            <motion.h1 variants={textVariants} className="carousel-text">
              Quality and Assurance
            </motion.h1>
            <motion.div
              style={{ padding: "20px", color: "white" }}
              variants={textVariants}
              className="carousel-text"
            >
              Capstone Solutions is committed to delivering top-notch quality
              and assurance to its clients through meticulous attention to
              detail and rigorous testing protocols. Our dedicated team ensures
              that every project meets the highest standards of excellence,
              providing clients with confidence in the reliability and
              performance of our solutions. With a customer-centric approach,
              Capstone Solutions consistently strives to exceed expectations and
              forge lasting partnerships built on trust and satisfaction.
            </motion.div>
          </div>
          <img src="./images/learn.jpg" alt="Image 2" />
        </motion.div>
        <motion.div
          className="image-wrapper"
          initial="hidden"
          animate="visible"
          variants={slideVariants}
        >
          <div className="black-overlay">
            <motion.h1 variants={textVariants} className="carousel-text">
              Our Commitment
            </motion.h1>
            <motion.div
              style={{ padding: "20px", color: "white" }}
              variants={textVariants}
              className="carousel-text"
            >
              At Capstone Solutions, we are driven by a passion for innovation
              and a commitment to excellence. We believe that technology has the
              power to transform education, and we are dedicated to harnessing
              that power to create a brighter future for students everywhere.
            </motion.div>
          </div>
          <img src="./images/black.jpg" alt="Image 3" />
        </motion.div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
