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
            <p>I’m <strong>Abanoub Shafeeq</strong>, a Frontend Developer specializing in <strong>Angular, React, and TypeScript</strong>. At Health Insights Group, I build and maintain healthcare applications, turning complex clinical workflows into clear, practical interfaces. My work spans reusable components, interactive charts, application state management, and REST API integration.</p>
            <p>Beyond individual features, I care about how an application fits together. I’ve built an internal design system to unify components across PrimeNG and Bootstrap, and developed an interactive <strong>Three.js anatomy viewer</strong> with individually selectable teeth and on-demand rendering.</p>
            <p>With a background in Computer Engineering, I enjoy solving problems that connect technical depth with thoughtful design. My focus is on building software that is intuitive for users, maintainable for developers, and reliable in everyday use.</p>
          </div>
          <div className="about_action"><span className="motion-button"><a href="#contact" className="btn btn-primary">Let's Talk</a></span></div>
        </div>
      </div>
    </section>
  );
}

export default About;
