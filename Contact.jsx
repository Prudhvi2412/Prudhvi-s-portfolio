// src/Contact.jsx
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Open to internships, collaborations and interesting project ideas. Drop
        a message and I’ll get back to you.
      </p>
      <ul className="contact-list">
        <li>
          Email:{" "}
          <a href="mailto:YOUR_EMAIL_HERE">YOUR_EMAIL_HERE</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/YOUR_ID
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            github.com/YOUR_USER
          </a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
