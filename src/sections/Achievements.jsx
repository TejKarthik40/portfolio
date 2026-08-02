import { motion } from "framer-motion";
import {
  FaTrophy,
  FaUsers,
  FaAward,
  FaStar,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Runner-Up",
    subtitle: "10-Hour MERN Stack Ideathon",
    description:
      "Secured Runner-Up among 60 teams by developing TimeTide, a productivity platform under strict time constraints.",
  },
  {
    icon: <FaAward />,
    title: "1st Prize",
    subtitle: "Trailing Quest - Supragna 2026",
    description:
      "Won first place among 25 national-level teams, demonstrating strong analytical thinking and teamwork.",
  },
  {
    icon: <FaUsers />,
    title: "Leadership",
    subtitle: "NSS Volunteer & Student Council Coordinator",
    description:
      "Organized community outreach programs, college events, and coordinated student activities while developing leadership skills.",
  },
  {
    icon: <FaStar />,
    title: "Academic Excellence",
    subtitle: "CGPA 9.36",
    description:
      "Maintained excellent academic performance while balancing research, internships, and full-stack development projects.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>

      <div className="achievement-grid">
        {achievements.map((item) => (
          <motion.div
            className="achievement-card"
            key={item.title}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <h4>{item.subtitle}</h4>

            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;