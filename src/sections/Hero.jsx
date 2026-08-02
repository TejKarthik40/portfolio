import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-greeting"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
        >
          Tej Karthik
        </motion.h1>

        <div className="typing-container">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Java Programmer",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing"
          />
        </div>
        <div className="badge">
          🚀 Open for Job Opportunities
        </div>
        <p className="hero-text">
          Passionate about building beautiful web applications,
          scalable backend systems, and solving real-world problems
          using modern technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="btn-secondary"
            download
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="socials">

          <a href="https://github.com/yourusername">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourusername">
            <FaLinkedin />
          </a>

          <a href="mailto:yourmail@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity:0, scale:.8 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:1 }}
      >

        <div className="photo-wrapper">
          <div className="image-border">
              <img src={profile} alt="Tej Karthik"/>
          </div>
      </div>

      </motion.div>

    </section>
  );
}