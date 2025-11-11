import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import './contact.css';

import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: 'Email',
    info: 'abanobshafeeq100@gmail.com',
    link: 'mailto:test@gmail.com',
  },
  {
    id: 1,
    icon: <RiMessengerLine />,
    title: 'Messenger',
    info: 'Abanoub Shafeeq',
    link: 'https://m.me/pop.top.9216778',
  },
  {
    id: 1,
    icon: <BsWhatsapp />,
    title: 'WhatsApp',
    info: '01281809841',
    link: 'https://api.whatsapp.com/send?phone=201281809841',
  },
];
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cxkniwb',
        'template_5doggga',
        form.current,
        'eYlK5NoyfKiOKm4Bj'
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully ✅');
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message ❌. Check the console for details.');
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message"
            name="message"
            rows={10}
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
