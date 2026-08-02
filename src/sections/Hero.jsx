import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="hero">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="hero-greeting">
          Hello, I'm
        </p>

        <h1 className="hero-name">
          Nadella Tej Karthik
        </h1>

        <h2 className="hero-role">
          AI Research Intern • Full Stack Developer • Machine Learning Enthusiast
        </h2>

        <p className="hero-description">
          Computer Science (Data Science) undergraduate passionate about
          Artificial Intelligence, Full Stack Development, Machine Learning,
          REST APIs, and Large Language Models.
          I enjoy building intelligent applications that solve real-world
          problems using modern technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn btn-primary"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="btn btn-secondary"
          >
            Contact Me
          </a>

        </div>

        <div className="hero-socials">

          <a
            href="https://github.com/TejKarthik40"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/nadella-tej-karthik"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:nadellatejkarthik@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
        }}
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;