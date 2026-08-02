import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTensorflow,
  SiScikitlearn,
  SiJupyter,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C", icon: "C" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: "API" },
      { name: "FastAPI", icon: "⚡" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "LLMs" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Computer Networks" },
      { name: "Operating Systems" },
      { name: "Software Engineering" },
      { name: "Cloud Computing" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-wrapper">
        {skillCategories.map((category) => (
          <motion.div
            className="skill-category"
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">
                    {skill.icon || "•"}
                  </span>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;