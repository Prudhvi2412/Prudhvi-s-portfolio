// src/Skills.jsx
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "SQL",
  "Power BI",
  "Git & GitHub",
  "UI/UX Basics",
];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="grid skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="card skill-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -4, scale: 1.03 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
