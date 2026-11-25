import ME from '../../assets/me.png';
import SectionHeading from '../SectionHeading';
import './about.css';

function About() {
  return (
    <section id="about" className="about_section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="about_container">
        <div className="about_me">
          <div className="about_me-image"><img src={ME} alt="Abanoub Shafeeq" loading="lazy" width="433" height="522" /></div>
        </div>
        <div className="about_content">
          <SectionHeading title="About Me" id="about-title" />
          <div className="about_copy">
            <p>Frontend Developer specializing in Angular and React, currently working at Health Insights Group on enterprise-level healthcare systems. I build scalable modules, integrate RESTful APIs, and deliver clean, maintainable interfaces.</p>
            <p className="about_education">Computer Engineering · Benha University</p>
          </div>
          <div className="about_action"><span className="motion-button"><a href="#contact" className="btn btn-primary">Let's Talk</a></span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
