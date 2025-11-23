// src/Hero.jsx
import { motion } from "framer-motion";
import profilePic from "./assets/profile.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      {/* background animated blob */}
      <div className="hero-blob" />

      <div className="hero-inner">
        {/* LEFT: text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-tag">Hey, I’m</p>
          <h1>
            <span className="hero-name-gradient">M Prudhvi</span> Narayana
            Chowdary
          </h1>
          <h2>Aspiring Web Developer & Data Analyst</h2>
          <p className="hero-desc">
            I love building beautiful web interfaces and extracting insights
            from real-world data using Python, SQL and Power BI.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="btn primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn ghost"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Let’s Connect
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT: image */}
        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="hero-photo-ring" />
          <img src={profilePic} alt="Prudhvi" className="hero-photo" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
