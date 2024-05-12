import React from "react";
import { motion } from "framer-motion";
import "./Language.css";

const Language = () => {
  return (
    <div className="language-container">
      <div className="parallax2">
        <motion.div className="language-content">
          <motion.div
            className="mongo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // transition={{ delay: 1 }}
          ></motion.div>
          <motion.div
            className="express"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // transition={{ delay: 1.2 }}
          ></motion.div>
          <motion.div
            className="react"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // transition={{ delay: 1.3 }}
          ></motion.div>
          <motion.div
            className="node"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // transition={{ delay: 1.4}}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Language;
