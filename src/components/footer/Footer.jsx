import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="#home" className="footer_logo text-link">Abanoub Shafeeq</a>
        <ul className="permalinks">
          <li><a className="text-link" href="#home">Home</a></li>
          <li><a className="text-link" href="#about">About</a></li>
          <li><a className="text-link" href="#skills">Experience</a></li>
          <li><a className="text-link" href="#services">Services</a></li>
          <li><a className="text-link" href="#portfolio">Portfolio</a></li>
          <li><a className="text-link" href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/abanoub-shafeeq-239820278/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin /></a>
          <a href="https://github.com/Abanobshafeeq" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub /></a>
        </div>
        <p className="footer_copyright"><small>&copy; {new Date().getFullYear()} Abanoub Shafeeq. All rights reserved.</small></p>
      </div>
    </footer>
  );
}

export default Footer;
