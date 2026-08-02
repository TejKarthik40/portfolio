import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
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

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;