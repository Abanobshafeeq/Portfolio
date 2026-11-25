import ME from '../../assets/me.png';
import SectionHeading from '../SectionHeading';
import './about.css';

function About() {
  return (
    <section id="about" className="about_section" aria-labelledby="about-title" tabIndex={-1}>
      <SectionHeading title="About Me" id="about-title" />
      <div className="about_container">
        <div className="about_intro">
          <div className="about_me">
            <div className="about_me-image"><img src={ME} alt="Abanoub Shafeeq" loading="lazy" width="433" height="522" /></div>
          </div>
          <div className="about_intro-copy">
            <h3>Abanoub Shafeeq</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="about_content">
          <div className="about_copy">
            <p>I’m Abanoub, a Frontend Developer building web applications with <strong>Angular, React, and TypeScript</strong>. At Health Insights Group, I turn complex healthcare workflows into intuitive interfaces that support everyday clinical work.</p>
            <p>I build reusable components, shared design systems, and interactive experiences—from dashboards to 3D anatomy viewers. With a background in Computer Engineering, I bring a practical approach to solving problems and a close eye for UI details.</p>
          </div>
          <div className="about_action"><span className="motion-button"><a href="#contact" className="btn btn-primary">Let's Talk</a></span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
