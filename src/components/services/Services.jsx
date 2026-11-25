import { FiCode, FiMonitor, FiLayers, FiActivity } from 'react-icons/fi';
import SectionHeading from '../SectionHeading';
import MotionCard from '../MotionCard';
import './services.css';

const services = [
  { title: 'Web Applications', Icon: FiCode, description: 'Build scalable web applications with Angular and React.' },
  { title: 'UI Development', Icon: FiMonitor, description: 'Create responsive, accessible, and user-friendly interfaces.' },
  { title: 'API Integration', Icon: FiLayers, description: 'Integrate RESTful APIs and handle complex data flows.' },
  { title: 'Performance', Icon: FiActivity, description: 'Optimize applications for speed and a smooth experience.' },
];

function Services() {
  return (
    <section id="services" className="container" aria-labelledby="services-title">
      <SectionHeading title="Services" id="services-title" />
      <div className="container_services" data-motion-grid="services">
        {services.map(({ title, Icon, description }) => (
          <MotionCard className="service_card surface-card" key={title}>
            <Icon className="icon" aria-hidden="true" />
            <h3>{title}</h3>
            <p>{description}</p>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}

export default Services;
