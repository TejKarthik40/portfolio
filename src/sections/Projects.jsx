import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TimeTide",
    subtitle: "Smart Time Management Platform",

    description:
      "A full-stack productivity platform featuring a Pomodoro timer, analytics dashboard, streak tracking, browser notifications, gamification, and an AI-powered productivity assistant.",

    features: [
      "Pomodoro Focus Timer",
      "Session Analytics",
      "Streak Tracking",
      "AI Productivity Assistant",
      "Browser Notifications",
      "Authentication System",
    ],

    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Axios",
    ],

    github: "https://github.com/TejKarthik40/TIme-Tide-Smart-Time-Management",

    demo: "https://time-tide-pomodoro.vercel.app/",
  },

  {
    title: "Sarkar AI",

    subtitle:
      "AI-Powered Government Scheme Recommendation System",

    description:
      "Retrieval-Augmented Generation (RAG) based platform that recommends government welfare schemes using semantic search, embeddings, and Large Language Models.",

    features: [
      "Semantic Search",
      "RAG Pipeline",
      "FastAPI Backend",
      "Chroma Vector Database",
      "HuggingFace Embeddings",
      "Eligibility Recommendation",
    ],

    tech: [
      "Python",
      "FastAPI",
      "React",
      "ChromaDB",
      "Hugging Face",
      "LLMs",
    ],

    github: "https://github.com/TejKarthik40/Sarkar-AI",

    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.title}
            whileHover={{
              y: -10,
            }}
          >

            <div className="project-image">

              {project.title}

            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <h4>{project.subtitle}</h4>

              <p>{project.description}</p>

              <h3>Key Features</h3>

              <ul>

                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="project-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;