import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBrain,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I am a Computer Science and Engineering (Data Science)
          undergraduate with a strong passion for Artificial Intelligence,
          Machine Learning, Full Stack Development, and Software Engineering.
        </p>

        <p className="about-text">
          I enjoy building scalable applications, experimenting with
          Large Language Models, and developing solutions that solve
          real-world problems through technology.
        </p>

        <p className="about-text">
          During my AI Research Internship at the University of Hyderabad,
          I worked on evaluating multiple Large Language Models for
          Software Requirements Verification using the ISO/IEC 29148
          international standard.
        </p>

      </motion.div>

      <div className="about-grid">

        <motion.div
          className="about-card"
          whileHover={{ y: -10 }}
        >
          <FaLaptopCode className="about-icon" />
          <h3>Full Stack</h3>

          <p>
            React, Node.js,
            Express,
            MongoDB,
            REST APIs,
            FastAPI
          </p>

        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -10 }}
        >
          <FaBrain className="about-icon" />

          <h3>Artificial Intelligence</h3>

          <p>
            Machine Learning,
            TensorFlow,
            Scikit-learn,
            LLMs,
            Prompt Engineering
          </p>

        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -10 }}
        >
          <FaCode className="about-icon" />

          <h3>Programming</h3>

          <p>
            Java,
            Python,
            JavaScript,
            C,
            Data Structures
          </p>

        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -10 }}
        >
          <FaGraduationCap className="about-icon" />

          <h3>Education</h3>

          <p>
            B.Tech CSE (Data Science)
            <br />
            CGPA: 9.36
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default About;