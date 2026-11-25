import { SiAngular, SiReact, SiTypescript, SiNextdotjs } from 'react-icons/si';
import CTA from './CTA';
import ME from '../../assets/me.png';
import './header.css';

const technologies = [
  { title: 'Angular', Icon: SiAngular, color: '#ff4b6a' },
  { title: 'React', Icon: SiReact, color: '#75dbf6' },
  { title: 'TypeScript', Icon: SiTypescript, color: '#51b9ff' },
  { title: 'Next.js', Icon: SiNextdotjs, color: '#eef4ff' },
];

function Header() {
  return (
    <header id="home" aria-labelledby="hero-title">
      <div className="container hero_layout">
        <div className="hero_copy">
          <p className="hero_greeting">Abanoub Shafeeq</p>
          <h1 id="hero-title">Building thoughtful<br className="hero_break" /> web experiences.<br /><span>Angular &amp; React.</span></h1>
          <p className="hero_description">Frontend Developer building scalable web applications with Angular and React, with a focus on clean code and intuitive user interfaces.</p>
          <CTA />
        </div>
        <div className="hero_portrait">
          <div className="hero_parallax">
            <div className="me">
              <img src={ME} alt="Abanoub Shafeeq" width="433" height="522" />
            </div>
          </div>
        </div>
      </div>
      <ul className="container technology_strip" aria-label="Core technologies">
        {technologies.map(({ title, Icon, color }) => (
          <li key={title}><Icon style={{ color }} aria-hidden="true" /><span>{title}</span></li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
