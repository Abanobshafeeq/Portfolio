import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import MotionCard from '../MotionCard';
import './contact.css';

const contactData = [
  { id: 1, icon: <MdOutlineEmail />, title: 'Email', info: 'abanobshafeeq100@gmail.com', link: 'mailto:abanobshafeeq100@gmail.com' },
  { id: 2, icon: <RiMessengerLine />, title: 'Messenger', info: 'Abanoub Shafeeq', link: 'https://m.me/pop.top.9216778' },
  { id: 3, icon: <BsWhatsapp />, title: 'WhatsApp', info: '01281809841', link: 'https://api.whatsapp.com/send?phone=201281809841' },
];

function Contact() {
  const form = useRef();
  const mounted = useRef(false);
  const sending = useRef(false);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.sendForm('service_cxkniwb', 'template_5doggga', form.current, 'eYlK5NoyfKiOKm4Bj');
      if (mounted.current) {
        form.current.reset();
        setStatus('success');
      }
    } catch {
      if (mounted.current) setStatus('error');
    } finally {
      sending.current = false;
    }
  };


  const panelToggle = (event) => event.currentTarget.dispatchEvent(new CustomEvent('portfolio:layout-change', { bubbles: true }));

  return (
    <section id="contact" className="container contact_section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact_callout">
        <div className="contact_intro">
          <h2 id="contact-title">Let's build something great.</h2>
          <p>Have a project in mind? I'd love to hear from you.</p>
        </div>
        <div className="contact_actions">
          <a className="btn btn-primary" href="mailto:abanobshafeeq100@gmail.com"><MdOutlineEmail aria-hidden="true" /><span>abanobshafeeq100@gmail.com</span></a>
          <a className="btn" href="https://api.whatsapp.com/send?phone=201281809841" target="_blank" rel="noreferrer"><BsWhatsapp aria-hidden="true" />WhatsApp</a>
        </div>
      </div>
      <details className="contact_form-disclosure" onToggle={panelToggle}>
        <summary>Send a message using the contact form <FiChevronDown aria-hidden="true" /></summary>
        <div className="contact_container">
          <div className="contact_options" data-motion-grid="contact">
            {contactData.map(({ id, icon, title, info, link }) => (
              <MotionCard key={id} className="contact_option surface-card">
                <div className="contact_icon" aria-hidden="true">{icon}</div>
                <div className="contact_details">
                  <h3>{title}</h3>
                  <p>{info}</p>
                  <a className="text-link" href={link} target={title === 'Email' ? undefined : '_blank'} rel="noreferrer">Send Message</a>
                </div>
              </MotionCard>
            ))}
          </div>
          <div className="contact_form-motion">
            <form ref={form} onSubmit={sendEmail} aria-busy={status === 'sending'}>
              <div className="form_field">
                <label htmlFor="contact-name">Your Full Name</label>
                <input id="contact-name" type="text" name="name" autoComplete="name" placeholder="Your name" required />
              </div>
              <div className="form_field">
                <label htmlFor="contact-email">Your Email</label>
                <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
              </div>
              <div className="form_field form_field--message">
                <label htmlFor="contact-message">Your Message</label>
                <textarea id="contact-message" name="message" rows={6} placeholder="What would you like to work on together?" required />
              </div>
              <div className="form_feedback" role="status" aria-live="polite" aria-atomic="true">
                {status === 'sending' && 'Sending your message…'}
                {status === 'success' && 'Thanks! Your message has been sent successfully.'}
                {status === 'error' && 'Your message could not be sent. Please try again or use the email link.'}
              </div>
              <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button>
            </form>
          </div>
        </div>
      </details>
    </section>
  );
}

export default Contact;
