import { useEffect } from 'react';

// Content stays visible in CSS, even without animation support.
export default function usePortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

    let observer;
    const animations = new Set();
    const start = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (preference.matches) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          // Deep-linked sections and text already on screen stay immediately readable.
          if (target.getBoundingClientRect().top < 60) return;
          const siblings = Array.from(target.parentElement.children).filter((child) => child.hasAttribute('data-reveal'));
          const columns = getComputedStyle(target.parentElement).gridTemplateColumns.split(' ').length;
          const delay = (Math.max(0, siblings.indexOf(target)) % Math.max(1, columns)) * 65;
          const animation = target.animate(
            [{ opacity: 0.2, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 520, delay, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'backwards' }
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

      document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener('change', start);
    };
  }, []);
}
