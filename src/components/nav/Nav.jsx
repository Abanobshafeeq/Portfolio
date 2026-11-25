import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';
import useReducedMotion from '../../hooks/useReducedMotion';
import './nav.css';

const items = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Nav() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const nav = useRef();
  const panel = useRef();
  const toggle = useRef();
  const preferred = useRef('');
  const reduced = useReducedMotion();

  useEffect(() => {
    let frame;
    const sections = items.map(({ id }) => document.getElementById(id));
    const update = () => {
      let current;
      let nearest = -Infinity;
      sections.forEach((section) => {
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.35 && top > nearest + 2) {
          current = section;
          nearest = top;
        }
      });
      const requested = document.getElementById(preferred.current);
      if (current && requested && Math.abs(requested.getBoundingClientRect().top - nearest) < 100) current = requested;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = document.getElementById('contact');
      setActive(current?.id || 'home');
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    const hashChange = () => { preferred.current = window.location.hash.slice(1); schedule(); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', hashChange);
    window.addEventListener('portfolio:layout-change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', hashChange);
      window.removeEventListener('portfolio:layout-change', schedule);
    };
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    if (reduced) { if (!open) setVisible(false); return; }
    const context = gsap.context(() => {
      if (open) {
        gsap.fromTo(panel.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
        gsap.fromTo(panel.current.querySelectorAll('a'), { opacity: 0, y: -6 }, { opacity: 1, y: 0, duration: 0.25, stagger: 0.045, delay: 0.04 });
      } else {
        gsap.to(panel.current, { opacity: 0, y: -8, duration: 0.18, onComplete: () => setVisible(false) });
      }
    }, nav);
    return () => context.revert();
  }, [open, visible, reduced]);

  useEffect(() => {
    if (!open) return;
    const escape = (event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const outside = (event) => { if (!nav.current?.contains(event.target)) setOpen(false); };
    const resize = () => { if (window.innerWidth > 700) { setOpen(false); setVisible(false); } };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
      window.removeEventListener('resize', resize);
    };
  }, [open]);

  const choose = (id) => {
    preferred.current = id;
    setActive(id);
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  };
  const links = () => items.map(({ id, label }) => (
    <a key={id} className="nav_link" href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => choose(id)}>{label}</a>
  ));

  return (
    <nav className="site_nav" aria-label="Main navigation" ref={nav}>
      <div className="container nav_inner">
        <a href="#home" className="brand" aria-label="Abanoub Shafeeq, home" onClick={() => setOpen(false)}>Abanoub<span>.</span></a>
        <div className="nav_desktop">{links()}</div>
        <button className="menu_toggle" ref={toggle} type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => { if (!open) setVisible(true); setOpen(!open); }}>
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
        <div id="mobile-navigation" className="nav_mobile" ref={panel} hidden={!visible} inert={!open ? '' : undefined}>{links()}</div>
      </div>
    </nav>
  );
}

export default Nav;
