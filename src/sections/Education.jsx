import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity />,
    degree: "Bachelor of Technology",
    specialization: "Computer Science & Engineering (Data Science)",
    institute: "Prasad V. Potluri Siddhartha Institute of Technology",
    duration: "2023 – Present",
    score: "CGPA: 9.36 / 10",
    location: "Vijayawada, Andhra Pradesh",
  },
  {
    icon: <FaGraduationCap />,
    degree: "Intermediate (MPC)",
    specialization: "Mathematics, Physics & Chemistry",
    institute: "Sri Chaitanya Junior College",
    duration: "2021 – 2023",
    score: "Marks: 963 / 1000",
    location: "Vijayawada, Andhra Pradesh",
  },
  {
    icon: <FaSchool />,
    degree: "Secondary School Certificate (SSC)",
    specialization: "",
    institute: "Sri Chaitanya Techno School",
    duration: "2018 – 2021",
    score: "Marks: 600 / 600",
    location: "Gannavaram, Andhra Pradesh",
  },
];

function Education() {
  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {education.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">
              <span className="timeline-date">
                {item.duration}
              </span>

              <h3>{item.degree}</h3>

              {item.specialization && (
                <h4>{item.specialization}</h4>
              )}

              <p className="college">
                {item.institute}
              </p>

              <p className="location">
                {item.location}
              </p>

              <div className="score">
                {item.score}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;