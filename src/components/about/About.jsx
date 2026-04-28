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
              <small>Computer Engineering</small> <br />
              <small>Benha University</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Frontend Developer</small> <br />
              <small>Health Insights Group</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Production & Personal Projects</small>
            </article>
          </div>

          <p>
            Frontend Developer specializing in Angular and React, currently working at Health Insights Group on enterprise-level healthcare systems. Experienced in building scalable modules, implementing complex business logic, and integrating RESTful APIs in production environments.
            Skilled in improving performance, fixing critical issues, and delivering clean, maintainable, and high-quality user interfaces.
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
