import React from "react";
import { motion } from "framer-motion";
import "./Team.css";

const Team = () => {
  return (
    <motion.div className="team-container">
      <div className="our-team">Our Team</div>
      <div className="white-line"></div>
      <div className="image-container">
        <motion.div
          className="box-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="b1"></div>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/d4Nc0D31902"
          >
            <p className="title">Daniel Angelo Rodriguez</p>
          </a>
          <p className="position">Web Developer</p>
        </motion.div>
        <motion.div
          className="box-container"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="b2"></div>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/XdebronneX"
          >
            <p className="title">November Pascua</p>
          </a>
          <p className="position">Web Developer</p>
        </motion.div>
        <motion.div
          className="box-container"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          whileInView={{ opacity: 1}}
        >
          <div className="b3"></div>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/FransManlangit"
          >
            <p className="title">Frans Adryhel Mnalangit</p>
          </a>
          <p className="position">Mobile Developer</p>
        </motion.div>
        <motion.div
          className="box-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="b4"></div>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/Reigne"
          >
            <p className="title">Elija Reigne Monterona</p>
          </a>
          <p className="position">Mobile Developer</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Team;
