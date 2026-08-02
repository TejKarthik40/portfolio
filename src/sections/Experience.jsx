import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <div className="experience-header">

          <div className="experience-icon">
            <FaBriefcase />
          </div>

          <div>

            <h2>AI Research Intern</h2>

            <h3>University of Hyderabad</h3>

            <div className="experience-meta">

              <span>
                <FaCalendarAlt />
                May 2026 – July 2026
              </span>

              <span>
                <FaMapMarkerAlt />
                Hyderabad, India
              </span>

            </div>

          </div>

        </div>

        <ul className="experience-list">

          <li>
            Conducted AI research under the guidance of
            Prof. Atul Negi focusing on Software Engineering
            and Large Language Models.
          </li>

          <li>
            Evaluated and benchmarked
            Gemini 1.5 Pro,
            ChatGPT (GPT-4o),
            DeepSeek-V3,
            Kimi-K2,
            and Qwen-2.5-Coder.
          </li>

          <li>
            Performed automated Software Requirements
            Verification using the ISO/IEC 29148
            international standard.
          </li>

          <li>
            Designed experiments and evaluated model
            performance using Accuracy,
            Precision,
            Recall,
            F1-Score,
            Cohen's Kappa,
            and McNemar's Test.
          </li>

          <li>
            Contributed to a research manuscript through
            experimental design, statistical analysis,
            benchmarking, and result interpretation.
          </li>

        </ul>

        <div className="tech-stack">

          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Statsmodels</span>
          <span>Prompt Engineering</span>
          <span>LLMs</span>
          <span>ISO/IEC 29148</span>
          <span>Statistical Analysis</span>

        </div>

      </motion.div>

    </section>
  );
}

export default Experience;