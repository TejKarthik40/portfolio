import { motion } from "framer-motion";
import {
  FaAward,
  FaMedal,
  FaCertificate,
  FaLaptopCode,
} from "react-icons/fa";

const certifications = [
  {
    title: "Programming Through Java",
    organization: "NPTEL (IIT Madras)",
    badge: "Elite + Silver",
    icon: <FaMedal />,
    color: "#60a5fa",
  },
  {
    title: "Database Management Systems",
    organization: "NPTEL (IIT Madras)",
    badge: "Elite",
    icon: <FaCertificate />,
    color: "#34d399",
  },
  {
    title: "Foundations of R Software",
    organization: "NPTEL (IIT Kanpur)",
    badge: "Elite + Gold",
    icon: <FaAward />,
    color: "#facc15",
  },
  {
    title: "Python Programming",
    organization: "Infosys Springboard",
    badge: "Certified",
    icon: <FaLaptopCode />,
    color: "#f97316",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="certificate-grid">

        {certifications.map((cert) => (

          <motion.div
            key={cert.title}
            className="certificate-card"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div
              className="certificate-icon"
              style={{ background: cert.color }}
            >
              {cert.icon}
            </div>

            <h3>{cert.title}</h3>

            <h4>{cert.organization}</h4>

            <span>{cert.badge}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;