import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="container footer_inner">
        <div className="footer_identity">
          <a href="#home" className="brand">Abanoub<span>.</span></a>
          <div className="footer_socials">
            <a href="https://www.linkedin.com/in/abanoub-shafeeq-239820278/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin /></a>
            <a href="https://github.com/Abanobshafeeq" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub /></a>
          </div>
        </div>
        <p className="footer_copyright"><small>&copy; {new Date().getFullYear()} Abanoub Shafeeq</small></p>
        <ul className="permalinks">
          <li><a className="text-link" href="#about">About</a></li>
          <li><a className="text-link" href="#skills">Skills</a></li>
          <li><a className="text-link" href="#portfolio">Projects</a></li>
          <li><a className="text-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
