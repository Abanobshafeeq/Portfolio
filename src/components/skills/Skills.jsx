import { SiAngular, SiTypescript, SiRedux, SiReactivex, SiPrimeng, SiBootstrap, SiSass, SiThreedotjs, SiGit } from 'react-icons/si';
import { FiLayers, FiGlobe } from 'react-icons/fi';
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
  { title: 'HTML5', image: HTML },
  { title: 'CSS3', image: CSS },
  { title: 'JavaScript', image: JS },
  { title: 'TypeScript', Icon: SiTypescript, color: '#6cbbff' },
  { title: 'Angular', Icon: SiAngular, color: '#ff697c' },
  { title: 'React', image: ReactLogo },
  { title: 'Next.js', image: Next },
  { title: 'RxJS', Icon: SiReactivex, color: '#ed78c5' },
  { title: 'Redux Toolkit', Icon: SiRedux, color: '#b49aef' },
  { title: 'PrimeNG', Icon: SiPrimeng, color: 'var(--color-white)' },
  { title: 'Angular Material', Icon: FiLayers, color: 'var(--color-primary)' },
  { title: 'Material UI', image: Material },
  { title: 'Bootstrap', Icon: SiBootstrap, color: '#b49aef' },
  { title: 'Tailwind CSS', image: Tailwind },
  { title: 'SCSS', Icon: SiSass, color: '#ed91bd' },
  { title: 'Three.js', Icon: SiThreedotjs, color: 'var(--color-white)' },
  { title: 'REST API Integration', Icon: FiGlobe, color: 'var(--color-primary)' },
  { title: 'Git', Icon: SiGit, color: '#ff856c' },
];

function Skills() {
  return (
    <section id="skills" className="skills_section" aria-labelledby="skills-title" tabIndex={-1}>
      <SectionHeading title="My Skills" id="skills-title" />
      <div className="container_skills" data-motion-grid="skills">
        {skills.map(({ title, image, Icon, color }) => (
          <MotionCard className="card_skill surface-card" key={title}>
            <div className="icon" aria-hidden="true">
              {image ? <img src={image} className={title === 'Next.js' ? 'skill_logo-light' : undefined} alt="" loading="lazy" width="22" height="22" /> : <Icon style={{ color }} />}
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
