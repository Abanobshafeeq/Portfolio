import { FaAward, FaUserGraduate } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me-about.png';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaUserGraduate className="about_icon" />
              <h5>Bachelor's Degree</h5>
              <small>in Computer Engineering</small> <br />
              <small>Faculty of Engineering at Shoubra, Benha University</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working in Frontend</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Front-End Developer with expertise in React.js and Next.js,
            specializing in building responsive and scalable web applications.
            Skilled in state management using Redux and Context API, client-side
            routing, and seamless API integration. Strong foundation in modern
            JavaScript , component-based architecture, and UI
            optimization. Committed to writing clean, maintainable code and
            delivering high-performance, user-focused solutions within agile
            development environments.{' '}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
