import { motion } from "framer-motion";
import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";

import "../styles/Trabajos.css";
const AnimatedImage = ({ imgSrc }) => {
  return (
    <motion.div
      className="trabajoContainer"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={imgSrc} alt="" />
    </motion.div>
  );
};
export const Trabajos = () => {
  return (
    <div className="containerTrabajos">
      <h1>Galería de nuestros trabajos</h1>
      <div className="galeriaTrabajos">
        <AnimatedImage imgSrc={img1} />
        <AnimatedImage imgSrc={img2} />
        <AnimatedImage imgSrc={img3} />
        <AnimatedImage imgSrc={img4} />
        <AnimatedImage imgSrc={img5} />
        <AnimatedImage imgSrc={img6} />
        <AnimatedImage imgSrc={img7} />
        <AnimatedImage imgSrc={img8} />
        <AnimatedImage imgSrc={img9} />
      </div>
    </div>
  );
};
