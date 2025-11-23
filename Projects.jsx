// src/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "Uber Data Analysis",
    description:
      "Explored Uber request patterns, cancellations and traffic behaviour using SQL + Python.",
    bullets: [
      "Data cleaning & wrangling on raw request data",
      "SQL queries for business insights",
      "EDA with Pandas, Matplotlib & Seaborn",
      "Identified peak hours, cancellation hotspots, supply gaps",
    ],
    link: "https://lnkd.in/g8P9_PmR",
    tech: "SQL • Python • Pandas • Matplotlib • Seaborn",
  },
  {
    title: "Exhaustive Analysis of Indian Agriculture",
    description:
      "Deep dive into Indian agriculture performance with interactive Power BI dashboards.",
    bullets: [
      "Data cleaning & transformation with SQL",
      "Crop production & yield trend analysis",
      "Region-wise productivity comparisons",
      "Strengthened ETL and storytelling with data",
    ],
    tech: "SQL • Power BI • ETL • Data Visualization",
  },
  {
    title: "UI/UX Design Explorations",
    description:
      "Created modern, clean UI layouts focusing on typography, spacing and color balance.",
    bullets: [
      "Practised popular landing page layouts",
      "Component-based design thinking",
      "Responsive and aesthetic design",
    ],
    tech: "Figma • UI/UX Design",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="grid projects-grid">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            className="card project-card"
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <ul className="project-list">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project
              </a>
            )}
            <span className="project-tech">{p.tech}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
