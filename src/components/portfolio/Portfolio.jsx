import { useLayoutEffect, useRef, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { gsap } from 'gsap';
import { projects, projectFilters } from '../../data/projects';
import useReducedMotion from '../../hooks/useReducedMotion';
import SectionHeading from '../SectionHeading';
import MotionCard from '../MotionCard';
import './portfolio.css';

function ProjectCard({ project, featured = false }) {
  const { id, image, title, tags, description, github, demo, category } = project;
  return (
    <MotionCard className={'portfolio_item surface-card' + (featured ? ' portfolio_item--featured' : '')} wrapperClass={featured ? 'project_featured' : ''} data-project-id={id} data-category={category}>
      <div className="portfolio_item-img">
        <div className="portfolio_image-motion"><img src={image} alt={title + ' screenshot'} loading="lazy" /></div>
      </div>
      <div className="project_copy">
        <h3>{title}</h3>
        <ul className="project_tags" aria-label="Technologies">{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        <p>{description}</p>
        <div className="portfolio_item-cta">
          <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary" aria-label={'Live Demo of ' + title + ' (opens in a new tab)'}>Live Demo</a>
          <a href={github} target="_blank" rel="noreferrer" className="btn" aria-label={'GitHub source for ' + title + ' (opens in a new tab)'}><FiGithub aria-hidden="true" />GitHub</a>
        </div>
      </div>
    </MotionCard>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState('All');
  const root = useRef();
  const collection = useRef();
  const context = useRef();
  const tween = useRef();
  const currentFilter = useRef('All');
  const previousFilter = useRef('All');
  const reduced = useReducedMotion();
  const visible = projects.filter(project => filter === 'All' || project.category === filter);
  const featured = visible.slice(0, 3);
  const remaining = visible.slice(3);

  useLayoutEffect(() => {
    context.current = gsap.context(() => {}, root);
    return () => context.current.revert();
  }, []);

  const enter = () => {
    if (reduced) {
      gsap.set(collection.current, { clearProps: 'transform,opacity' });
      return;
    }
    context.current.add(() => {
      tween.current = gsap.fromTo(collection.current, { opacity: 0, y: 12 }, {
        opacity: 1, y: 0, duration: 0.32, ease: 'power2.out', clearProps: 'transform,opacity',
      });
    });
  };

  useLayoutEffect(() => {
    currentFilter.current = filter;
    if (previousFilter.current !== filter) {
      if (reduced) gsap.set(collection.current, { clearProps: 'transform,opacity' });
      else {
        context.current.add(() => {
          tween.current = gsap.fromTo(collection.current, { opacity: 0, y: 12 }, {
            opacity: 1, y: 0, duration: 0.32, ease: 'power2.out', clearProps: 'transform,opacity',
          });
        });
      }
      previousFilter.current = filter;
      root.current.dispatchEvent(new CustomEvent('portfolio:layout-change', { bubbles: true }));
    }
    if (reduced) {
      tween.current?.kill();
      gsap.set(collection.current, { clearProps: 'transform,opacity' });
      if (filter !== selected) setFilter(selected);
    }
  }, [filter, reduced, selected]);

  const choose = (next) => {
    setSelected(next);
    tween.current?.kill();
    if (reduced) { setFilter(next); return; }
    context.current.add(() => {
      tween.current = gsap.to(collection.current, {
        opacity: 0, y: 8, duration: 0.14, ease: 'power1.in',
        onComplete: () => {
          if (next === currentFilter.current) enter();
          else setFilter(next);
        },
      });
    });
  };

  return (
    <section id="portfolio" className="container portfolio_section" ref={root} aria-labelledby="portfolio-title" tabIndex={-1}>
      <div className="projects_heading-row">
        <SectionHeading title="Selected Projects" id="portfolio-title" />
        <div className="project_filters" role="group" aria-label="Filter projects">
          {projectFilters.map(option => <button key={option} type="button" aria-pressed={selected === option} onClick={() => choose(option)}>{option}</button>)}
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">{visible.length} {filter === 'All' ? '' : filter + ' '}projects shown.</p>
      <div className="project_collection-motion" ref={collection}>
        <div className="project_showcase" data-motion-grid="projects">
          {featured.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} />)}
        </div>
        {remaining.length > 0 && (
          <div className="more_projects">
            <h3 className="more_projects-title">More Projects</h3>
            <div className="portfolio_container" data-motion-grid="projects">
              {remaining.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
