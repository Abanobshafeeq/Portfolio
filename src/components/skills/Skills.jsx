import { SiAngular, SiTypescript, SiRedux, SiReactivex, SiGit } from 'react-icons/si';
import HTML from '../../assets/html-5.svg';
import CSS from '../../assets/css3.svg';
import JS from '../../assets/javascript.svg';
import ReactLogo from '../../assets/react.svg';
import Next from '../../assets/Nextjs.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import Material from '../../assets/material-ui.svg';
import SectionHeading from '../SectionHeading';
import MotionCard from '../MotionCard';
import './skills.css';

const skills = [
  { title: 'HTML5', disc: 'Structure', image: HTML },
  { title: 'CSS3', disc: 'Styling', image: CSS },
  { title: 'JavaScript', disc: 'Core Language', image: JS },
  { title: 'TypeScript', disc: 'Strong Typing', Icon: SiTypescript, color: '#6cbbff' },
  { title: 'Angular', disc: 'Framework', Icon: SiAngular, color: '#ff697c' },
  { title: 'React', disc: 'Library', image: ReactLogo },
  { title: 'Next.js', disc: 'Framework', image: Next },
  { title: 'RxJS', disc: 'State & Streams', Icon: SiReactivex, color: '#ed78c5' },
  { title: 'Redux', disc: 'State Management', Icon: SiRedux, color: '#b49aef' },
  { title: 'TailwindCSS', disc: 'Styling', image: Tailwind },
  { title: 'Material UI', disc: 'UI Library', image: Material },
  { title: 'Git', disc: 'Version Control', Icon: SiGit, color: '#ff856c' },
];

function Skills() {
  return (
    <section id="skills" className="skills_section" aria-labelledby="skills-title" tabIndex={-1}>
      <SectionHeading title="My Skills" id="skills-title" />
      <div className="container_skills" data-motion-grid="skills">
        {skills.map(({ title, image, Icon, color }) => (
          <MotionCard className="card_skill surface-card" key={title}>
            <div className="icon" aria-hidden="true">
              {image ? <img src={image} className={title === 'Next.js' ? 'skill_logo-light' : undefined} alt="" loading="lazy" width="36" height="36" /> : <Icon style={{ color }} />}
            </div>
            <div className="content">
              <h3>{title}</h3>
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}

export default Skills;
