import { useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Tej Karthik</div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;