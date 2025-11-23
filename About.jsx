// src/About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        I’m a B.Tech 2nd year CSE student at Vignan's Institute of Information
        Technology. I enjoy building web apps, analyzing datasets and learning
        new tools by working on real projects.
      </p>
      <p className="section-text">
        I’ve worked on Uber data analysis, Indian agriculture analytics and UI/
        UX design explorations. My strength is perseverance – I keep pushing
        until things work.
      </p>
    </motion.section>
  );
}

export default About;
