import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2>Let's Connect</h2>

          <p>
            I'm always interested in discussing software engineering,
            AI research, machine learning, and exciting opportunities.
            Feel free to reach out!
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>nadellatejkarthik@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 9247632447</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Andhra Pradesh, India</span>
          </div>

          <div className="social-links">

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

          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;