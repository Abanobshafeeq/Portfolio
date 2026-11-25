import { FaAward, FaUserGraduate } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './about.css';
import SectionHeading from '../SectionHeading';
import MotionCard from '../MotionCard';

const About = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <SectionHeading eyebrow="Get To Know" title="About Me" id="about-title" />

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Abanoub Shafeeq" loading="lazy" width="433" height="522" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_content-motion">
          <div className="about_cards" data-motion-grid="about">
            <MotionCard className="about_card surface-card">
              <FaUserGraduate className="about_icon" aria-hidden="true" />
              <h3>Bachelor's Degree</h3>
              <small>Computer Engineering</small> <br />
              <small>Benha University</small>
            </MotionCard>

            <MotionCard className="about_card surface-card">
              <FaAward className="about_icon" aria-hidden="true" />
              <h3>Experience</h3>
              <small>Frontend Developer</small> <br />
              <small>Health Insights Group</small>
            </MotionCard>

            <MotionCard className="about_card surface-card">
              <VscFolderLibrary className="about_icon" aria-hidden="true" />
              <h3>Projects</h3>
              <small>Production & Personal Projects</small>
            </MotionCard>
          </div>

          <div className="about_copy"><p>
            Frontend Developer specializing in Angular and React, currently working at Health Insights Group on enterprise-level healthcare systems. Experienced in building scalable modules, implementing complex business logic, and integrating RESTful APIs in production environments.
            Skilled in improving performance, fixing critical issues, and delivering clean, maintainable, and high-quality user interfaces.
          </p></div>

          <div className="about_action"><span className="motion-button"><a href="#contact" className="btn btn-primary">
            Let's Talk
          </a></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
