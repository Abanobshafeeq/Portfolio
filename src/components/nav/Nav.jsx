import { useEffect, useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { LuUserRound } from 'react-icons/lu';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import './nav.css';

const items = [
  { id: 'home', label: 'Home', Icon: IoHomeOutline },
  { id: 'about', label: 'About', Icon: LuUserRound },
  { id: 'skills', label: 'Experience', Icon: BiBook },
  { id: 'services', label: 'Services', Icon: RiServiceLine },
  { id: 'portfolio', label: 'Portfolio', Icon: FiGrid },
  { id: 'contact', label: 'Contact', Icon: BiMessageSquareDetail },
];

function Nav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame;
    const sections = items.map(({ id }) => document.getElementById(id));
    const update = () => {
      const position = window.innerHeight * 0.35;
      const current = sections.filter((section) => section && section.getBoundingClientRect().top <= position).pop();
      setActive(current?.id || 'home');
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <nav className="floating_nav" aria-label="Main navigation">
      {items.map(({ id, label, Icon }) => (
        <a key={id} href={`#${id}`} aria-label={label} aria-current={active === id ? 'location' : undefined} className={active === id ? 'active' : ''}>
          <Icon aria-hidden="true" />
          <span className="nav_label">{label}</span>
        </a>
      ))}
    </nav>
  );
}

export default Nav;
