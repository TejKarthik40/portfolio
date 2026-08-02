import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Nadella Tej Karthik</h2>

      <p>
        AI Research • Full Stack Development • Machine Learning
      </p>

      <div className="footer-socials">

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

        <a href="mailto:nadellatejkarthik@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <a href="#hero" className="back-top">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Nadella Tej Karthik. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;