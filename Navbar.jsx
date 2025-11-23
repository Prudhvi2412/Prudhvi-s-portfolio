// src/Navbar.jsx
import { motion } from "framer-motion";

function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">Prudhvi.dev</div>
      <ul className="nav-links">
        {links.map((name) => {
          const id = name.toLowerCase();
          return (
            <li key={id}>
              <a href={id === "home" ? "#hero" : `#${id}`}>
                <span>{name}</span>
                <span className="nav-underline" />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
