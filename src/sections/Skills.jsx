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
  FaCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTensorflow,
  SiScikitlearn,
  SiJupyter,
  SiSpringboot,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    summary: "Core programming foundations",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "C", icon: "C" },
    ],
  },
  {
    title: "Frontend",
    summary: "Modern web interfaces",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    title: "Backend",
    summary: "Scalable application logic",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: "API" },
      { name: "FastAPI", icon: "⚡" },
    ],
  },
  {
    title: "Data & AI",
    summary: "Analytics and intelligent systems",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "NumPy", icon: "N" },
      { name: "Pandas", icon: "P" },
      { name: "LLMs", icon: "AI" },
      { name: "Prompt Engineering", icon: "✦" },
    ],
  },
  {
    title: "Tools",
    summary: "Development workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Jupyter", icon: <SiJupyter /> },
    ],
  },
  {
    title: "Core CS",
    summary: "Computer science fundamentals",
    skills: [
      { name: "DSA", icon: "⌘" },
      { name: "OOP", icon: "◧" },
      { name: "DBMS", icon: "DB" },
      { name: "Networks", icon: "⇄" },
      { name: "OS", icon: "⏻" },
      { name: "Software Engineering", icon: "⚙" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">TECH STACK</span>
        <h2>Technical Skills</h2>
        <p>Focused on building modern, scalable, and intelligent applications.</p>
      </motion.div>

      <div className="skills-wrapper">
        {skillCategories.map((category, index) => (
          <motion.div
            className="skill-category"
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
          >
            <div className="skill-category-header">
              <h3>{category.title}</h3>
              <p>{category.summary}</p>
            </div>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">{skill.icon || "•"}</span>
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