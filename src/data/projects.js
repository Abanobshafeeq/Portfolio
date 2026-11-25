import IMG1 from '../assets/1.png';
import IMG2 from '../assets/2.png';
import IMG3 from '../assets/3.png';
import IMG4 from '../assets/4.png';
import IMG5 from '../assets/5.png';
import IMG6 from '../assets/6.png';
import IMGST from '../assets/SeveralTasks.png';
import IMGTODO from '../assets/TodoAngular.png';
import IMGVezetta from '../assets/vezetta.png';
import IMGIphone from '../assets/iphone.png';
import IMGParallex from '../assets/parallex.png';
import IMGECA from '../assets/EcomerceA.png';

const originalProjects = [
   {
    id: 1,
    image: IMGECA,
    title: 'E_Commerce USING Angular & API',
    github: 'https://github.com/Abanobshafeeq/E_Commerce-Angular.git',
    demo: 'https://e-commerce-angular-sand.vercel.app/products',
  },
  {
    id: 2,
    image: IMG1,
    title: 'E_Commerce USING REACT & vite & API',
    github: 'https://github.com/Abanobshafeeq/Bebo-Ecommerce-React.git',
    demo: 'https://bebo-ecommerce-react-eta.vercel.app/',
  },
  
  {
    id: 3,
    image: IMGST,
    title: 'Comprehensive Admin Dashboard & UI Showcase',
    github: 'https://github.com/Abanobshafeeq/Tasks-in-angular.git',
    demo: 'https://tasks-in-angular.vercel.app/dashboard',
  },
   {
    id: 4,
    image: IMGTODO,
    title: 'Interactive Kanban Task Manager',
    github: 'https://github.com/Abanobshafeeq/ToDo-List-Angular.git',
    demo: 'https://to-do-list-angular-mu.vercel.app/',
  },
  {
    id: 5,
    image: IMGVezetta,
    title: 'Vezeeta Landing Page',
    github: 'https://github.com/Abanobshafeeq/Vezeeta.git',
    demo: 'https://vezeeta-three.vercel.app/',
  },
  {
    id: 6,
    image: IMGIphone,
    title: 'iPhone 17 landing page',
    github: 'https://github.com/Abanobshafeeq/iphone-17.git',
    demo: 'https://iphone-17-seven.vercel.app/',
  },
  {
    id: 7,
    image: IMGParallex,
    title: 'Parallex Website',
    github: 'https://github.com/Abanobshafeeq/parallax-website.git',
    demo: 'https://parallax-website-nine-silk.vercel.app/',
  },
  {
    id: 8,
    image: IMG2,
    title: 'Portfolio Abanoub Shafeeq USING React',
    github: 'https://github.com/Abanobshafeeq/Portfolio.git',
    demo: 'https://portfolio-psi-brown-32.vercel.app/',
  },
  {
    id: 9,
    image: IMG3,
    title: 'Todo List App USING React',
    github: 'https://github.com/Abanobshafeeq/ToDo-List.git',
    demo: 'https://to-do-list-six-liart-94.vercel.app/',
  },
  {
    id: 10,
    image: IMG4,
    title: 'Weather App USING React & API',
    github: 'https://github.com/Abanobshafeeq/WeatherApi-using-React.git',
    demo: 'https://weather-api-using-react-wheat.vercel.app/',
  },
  {
    id: 11,
    image: IMG5,
    title: 'E-commerce Using HTML & CSS & JavaScript',
    github: 'https://github.com/Abanobshafeeq/Bebo-Ecommerce-HTML.git',
    demo: 'https://bebo-ecommerce-html.vercel.app/',
  },
  {
    id: 12,
    image: IMG6,
    title: 'North Giza USING HTML & CSS & JavaScript',
    github: 'https://github.com/Abanobshafeeq/V3.git',
    demo: 'https://v3-ten-sand.vercel.app/',
  },
];

const presentation = {
  1: { title: 'Angular E-commerce', category: 'Angular', tags: ['Angular', 'REST API'], description: 'An e-commerce application built with Angular and connected to a products API.' },
  2: { title: 'React E-commerce', category: 'React', tags: ['React', 'Vite', 'REST API'], description: 'An e-commerce interface built with React, Vite, and API data.' },
  3: { title: 'Admin Dashboard', category: 'Angular', tags: ['Angular', 'TypeScript', 'Angular Material'], description: 'An Angular admin dashboard and UI showcase, bringing charts and reusable interface components together.' },
  4: { title: 'Kanban Task Manager', category: 'Angular', tags: ['Angular', 'TypeScript'], description: 'A task-management application organized around a Kanban board.' },
  5: { title: 'Vezeeta Landing Page', category: 'Angular', tags: ['Angular', 'TypeScript'], description: 'A healthcare landing-page project built with Angular.' },
  6: { title: 'iPhone 17 Landing Page', category: 'Angular', tags: ['Angular', 'TypeScript'], description: 'An Angular landing page presenting the iPhone 17.' },
  7: { title: 'Parallax Website', category: 'Angular', tags: ['Angular', 'TypeScript'], description: 'A parallax website project built with Angular.' },
  8: { title: 'Personal Portfolio', category: 'React', tags: ['React', 'CSS'], description: 'My personal portfolio, bringing my experience, projects, and contact details together.' },
  9: { title: 'React Todo List', category: 'React', tags: ['React', 'JavaScript'], description: 'A todo-list application built with React.' },
  10: { title: 'Weather App', category: 'React', tags: ['React', 'REST API'], description: 'A React weather application connected to a weather API.' },
  11: { title: 'JavaScript E-commerce', category: 'JavaScript', tags: ['HTML', 'CSS', 'JavaScript'], description: 'An e-commerce project built with HTML, CSS, and JavaScript.' },
  12: { title: 'North Giza Website', category: 'JavaScript', tags: ['HTML', 'CSS', 'JavaScript'], description: 'The North Giza website project, built with HTML, CSS, and JavaScript.' },
};

// Repository frameworks take precedence over the generated comparison labels.
export const projects = originalProjects.map(project => ({ ...project, ...presentation[project.id] }));
export const projectFilters = ['All', 'Angular', 'React', 'JavaScript'];
