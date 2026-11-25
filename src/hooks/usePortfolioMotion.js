import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ENTER = 'top 88%';
const STAGGER = 0.085;

// Group the actual rendered grid rows, including after responsive reflow.
// The outer grid items never transform, so trigger positions stay stable.
function visibleRows(grid) {
  const rows = [];
  Array.from(grid.children).forEach((item) => {
    const last = rows[rows.length - 1];
    if (last && Math.abs(last[0].offsetTop - item.offsetTop) < 2) last.push(item);
    else rows.push([item]);
  });
  return rows;
}

export default function usePortfolioMotion() {
  useLayoutEffect(() => {
    const root = document.getElementById('root');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const played = new WeakSet();
    let entrances = new WeakMap();
    let context;
    let disposed = false;
    let refreshFrame;
    let resizeTimer;
    let viewportWidth = window.innerWidth;

    const initialize = () => {
      context?.revert();
      entrances = new WeakMap();
      // Create the context before running setup so partial failures can revert too.
      context = gsap.context(() => {}, root);

      try {
        context.add(() => {
          const progress = root.querySelector('.reading-progress');
          if (preference.matches) {
            ScrollTrigger.create({
              id: 'reading-progress',
              start: 0,
              end: () => Math.max(1, ScrollTrigger.maxScroll(window)),
              onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
              onRefresh: (self) => gsap.set(progress, { scaleX: self.progress }),
            });
            return;
          }

          gsap.fromTo(progress, { scaleX: 0 }, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              id: 'reading-progress',
              start: 0,
              end: () => Math.max(1, ScrollTrigger.maxScroll(window)),
              scrub: 0.18,
              invalidateOnRefresh: true,
            },
          });

          const rise = (timeline, targets, options = {}, at = 0) => {
            const { x = 0, y = 32, scale = 1, duration = 0.65, stagger = 0 } = options;
            timeline.fromTo(targets, { opacity: 0, x, y, scale }, {
              opacity: 1, x: 0, y: 0, scale: 1,
              duration, stagger, ease: 'power3.out',
              clearProps: 'transform,opacity',
            }, at);
          };

          const once = (trigger, elements, build, id) => {
            const pending = elements.filter((element) => element && !played.has(element));
            if (!pending.length) return;
            const initialBounds = trigger.getBoundingClientRect();
            const timeline = gsap.timeline({
              paused: true,
              onStart: () => pending.forEach((element) => played.add(element)),
            });
            build(timeline, pending);
            pending.forEach((element) => entrances.set(element, timeline));
            ScrollTrigger.create({
              id,
              trigger,
              animation: timeline,
              start: ENTER,
              once: true,
              toggleActions: 'play none none none',
            });
            if (initialBounds.top < window.innerHeight && initialBounds.bottom > 0) timeline.play();
          };

          const hero = root.querySelector('#home');
          const portrait = hero.querySelector('.hero_portrait');
          const heroTargets = [
            hero.querySelector('.hero_greeting'),
            hero.querySelector('h1'),
            hero.querySelector('.hero_role'),
            ...hero.querySelectorAll('.cta .motion-button'),
            portrait,
          ];
          const freshHero = !played.has(portrait);
          if (freshHero) {
            const entrance = gsap.timeline({
              onStart: () => heroTargets.forEach((element) => played.add(element)),
            });
            rise(entrance, heroTargets.slice(0, 3), { y: 30, duration: 0.8, stagger: 0.1 });
            rise(entrance, heroTargets.slice(3, 5), { y: 24, duration: 0.7, stagger: 0.08 }, 0.3);
            rise(entrance, [portrait], { y: 40, duration: 0.85 }, 0.4);
            heroTargets.forEach((element) => entrances.set(element, entrance));
          }

          const float = gsap.to(hero.querySelector('.me'), {
            y: -7, duration: 2.8, repeat: -1, yoyo: true,
            ease: 'sine.inOut', delay: freshHero ? 1.25 : 0,
          });
          gsap.to(hero.querySelector('.hero_parallax'), {
            y: 24,
            ease: 'none',
            scrollTrigger: {
              id: 'hero-parallax',
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.4,
              onToggle: ({ isActive }) => isActive ? float.play() : float.pause(),
            },
          });
          if (hero.getBoundingClientRect().bottom <= 0) float.pause();

          root.querySelectorAll('.section_heading').forEach((heading) => {
            const label = heading.querySelector('p');
            const title = heading.querySelector('h2');
            const underline = heading.querySelector('.section_underline');
            once(heading, [label, title, underline], (timeline) => {
              rise(timeline, [label], { y: 16, duration: 0.45 });
              rise(timeline, [title], { y: 28, duration: 0.7 }, 0.1);
              timeline.fromTo(underline, { scaleX: 0 }, {
                scaleX: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform',
              }, 0.25);
            }, 'heading-' + title.id);
          });

          const mobile = window.innerWidth <= 800;
          const photo = root.querySelector('.about_me');
          once(root.querySelector('.about_container'), [photo], (timeline) => {
            rise(timeline, [photo], { x: mobile ? 0 : -44, y: mobile ? 38 : 0, duration: 0.8 });
          }, 'about-photo');

          const aboutContent = root.querySelector('.about_content-motion');
          if (!mobile) {
            once(root.querySelector('.about_content'), [aboutContent], (timeline) => {
              timeline.fromTo(aboutContent, { x: 44 }, {
                x: 0, duration: 0.75, ease: 'power3.out', clearProps: 'transform',
              });
            }, 'about-content');
          }

          root.querySelectorAll('[data-motion-grid]').forEach((grid) => {
            const kind = grid.dataset.motionGrid;
            visibleRows(grid).forEach((row, index) => {
              const targets = row.map((item) => item.querySelector('.motion-card_reveal'));
              once(row[0], targets, (timeline, pending) => {
                rise(timeline, pending, {
                  y: kind === 'projects' ? 40 : kind === 'about' ? 24 : 32,
                  scale: kind === 'skills' ? 0.96 : 1,
                  duration: kind === 'projects' ? 0.7 : 0.65,
                  stagger: STAGGER,
                }, kind === 'contact' ? (index % 3) * 0.07 : 0);

                if (kind === 'services') {
                  timeline.fromTo(pending.map((item) => item.querySelector('.icon')), {
                    y: -8, scale: 0.92, rotation: -4,
                  }, {
                    y: 0, scale: 1, rotation: 0,
                    duration: 0.45, stagger: STAGGER, ease: 'back.out(1.4)',
                    clearProps: 'transform',
                  }, 0.18);
                }
                if (kind === 'projects') {
                  timeline.fromTo(pending.map((item) => item.querySelector('.portfolio_image-motion')), {
                    scale: 1.04,
                  }, {
                    scale: 1, duration: 0.85, stagger: STAGGER,
                    ease: 'power2.out', clearProps: 'transform',
                  }, 0);
                }
              }, kind + '-row-' + index);
            });
          });

          const copy = root.querySelector('.about_copy');
          once(copy, [copy.querySelector('p')], (timeline, targets) => {
            rise(timeline, targets, { y: 24 }, 0.12);
          }, 'about-copy');
          const action = root.querySelector('.about_action');
          once(action, [action.querySelector('.motion-button')], (timeline, targets) => {
            rise(timeline, targets, { y: 20, duration: 0.55 }, 0.2);
          }, 'about-action');

          const formFrame = root.querySelector('.contact_form-motion');
          once(formFrame, [formFrame.querySelector('form')], (timeline, targets) => {
            rise(timeline, targets, { y: 36, duration: 0.75 });
          }, 'contact-form');

          root.querySelectorAll('footer .container > *').forEach((element, index) => {
            once(element, [element], (timeline, targets) => {
              rise(timeline, targets, {
                y: index === 3 ? 14 : 24,
                scale: element.classList.contains('footer_socials') ? 0.96 : 1,
                duration: 0.6,
              }, index * 0.04);
            }, 'footer-' + index);
          });
        });
      } catch (error) {
        // No CSS hidden state: reverting leaves the complete portfolio readable.
        context.revert();
        console.warn('Portfolio motion could not initialize; content remains visible.', error);
      }
    };

    const refresh = () => {
      cancelAnimationFrame(refreshFrame);
      refreshFrame = requestAnimationFrame(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
    };
    const onResize = () => {
      if (window.innerWidth === viewportWidth) return;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        viewportWidth = window.innerWidth;
        initialize();
        refresh();
      }, 180);
    };
    const onPreferenceChange = () => {
      initialize();
      refresh();
    };
    const onFocus = (event) => {
      // Tabbing to a link or field never waits for its entrance animation.
      let element = event.target;
      while (element && element !== root) {
        const timeline = entrances.get(element);
        if (timeline && timeline.progress() < 1) {
          timeline.scrollTrigger?.kill(false, true);
          timeline.progress(1).pause();
        }
        element = element.parentElement;
      }
    };

    initialize();
    const images = Array.from(root.querySelectorAll('img'));
    images.forEach((image) => {
      image.addEventListener('load', refresh);
      image.addEventListener('error', refresh);
    });
    document.fonts?.ready.then(() => { if (!disposed) refresh(); });
    document.fonts?.addEventListener('loadingdone', refresh);
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(refresh);
    observer?.observe(root);
    window.addEventListener('resize', onResize);
    window.addEventListener('load', refresh);
    preference.addEventListener('change', onPreferenceChange);
    root.addEventListener('focusin', onFocus);

    return () => {
      disposed = true;
      clearTimeout(resizeTimer);
      cancelAnimationFrame(refreshFrame);
      context?.revert();
      observer?.disconnect();
      images.forEach((image) => {
        image.removeEventListener('load', refresh);
        image.removeEventListener('error', refresh);
      });
      document.fonts?.removeEventListener('loadingdone', refresh);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', refresh);
      preference.removeEventListener('change', onPreferenceChange);
      root.removeEventListener('focusin', onFocus);
    };
  }, []);
}
