import React from "react";
import { motion } from "framer-motion";
import "./Works.css";

const Card = ({ title, image, description, link }) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a href={link} style={{ textDecoration: "none", color: "black" }}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="works-container">
      <div className="our-works">
        Our Works
        <div className="white-line"></div>
      </div>
      <div className="cards-container">
        <Card
          title="Team Poor"
          image="./images/team-poor.jpg"
          // description="Description of Project 1"
          link="https://www.teampoor-motorcycle-parts-and-services.online/?fbclid=IwZXh0bgNhZW0CMTAAAR35lBMwVArgTCEpEF2eR0VOKlvxUJyzTtZBYdU1xwW-PmvEcHp0SmYKV6E_aem_AU9IPWOeUk6GIUcAZ6_CCk0j87IXvyv8GO2d0EBqX5evg4Vr1QpcGBTCWzUTycY-MyEnC7Nc-0D0jD1exm5hcZ9-"
        />
        <Card
          title="Scheduler"
          image="./images/tupt-sched.jpg"
          // description="Description of Project 2"
          link="https://tupt-scheduler.org/"
        />
        <Card
          title="Blessed Land"
          image="./images/blessed.jpg"
          // description="Description of Project 3"
          link="https://www.blessedlandacademy.online/?fbclid=IwZXh0bgNhZW0CMTAAAR1c1lXmv84gDDUHmzopONk_mVOkrR1VGS0EcVft1FPtCnptESj8Two6XdE_aem_AWFEU3dzkeVEtyGasIgtAn04Ea08g9NCpZUAurUkFMd_eL_vfxJKu19UqgKhUpYM14o4ZFbDIDY7ffGrpvIEiFjk"
        />
      </div>
    </div>
  );
};

export default Works;
