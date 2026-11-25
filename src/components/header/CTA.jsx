import { FiDownload } from 'react-icons/fi';
import CV from '../../assets/Abanoub Shafeeq.pdf';

function CTA() {
  return (
    <div className="cta">
      <span className="motion-button"><a href="#portfolio" className="btn btn-primary">View Projects</a></span>
      <span className="motion-button"><a href={CV} download className="btn"><FiDownload aria-hidden="true" />Download CV</a></span>
    </div>
  );
}

export default CTA;
