import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG4 from '../../assets/4.png';
import IMG5 from '../../assets/5.png';
import IMG6 from '../../assets/6.png';
import IMGST from '../../assets/SeveralTasks.png';
import IMGTODO from '../../assets/TodoAngular.png';
import IMGVezetta from '../../assets/vezetta.png';
import IMGIphone from '../../assets/iphone.png';
import IMGParallex from '../../assets/parallex.png';
import './portfolio.css';

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'E_Commerce USING REACT & vite & API',
    github: 'https://github.com/Abanobshafeeq/Bebo-Ecommerce-React.git',
    demo: 'https://bebo-store-react-vite.netlify.app/',
  },
  {
    id: 2,
    image: IMGST,
    title: 'Comprehensive Admin Dashboard & UI Showcase',
    github: 'https://github.com/Abanobshafeeq/Tasks-in-angular.git',
    demo: 'https://portfolio-React-abanoub2.netlify.app/',
  },
   {
    id: 3,
    image: IMGTODO,
    title: 'Interactive Kanban Task Manager',
    github: 'https://github.com/Abanobshafeeq/ToDo-List-Angular.git',
    demo: 'https://todo-list-angular-a.netlify.app',
  },
  {
    id: 4,
    image: IMGVezetta,
    title: 'Vezeeta Landing Page',
    github: 'https://github.com/Abanobshafeeq/Vezeeta.git',
    demo: '',
  },
  {
    id: 5,
    image: IMGIphone,
    title: 'iPhone 17 landing page',
    github: 'https://github.com/Abanobshafeeq/iphone-17.git',
    demo: '',
  },
  {
    id: 6,
    image: IMGParallex,
    title: 'Parallex Website',
    github: 'https://github.com/Abanobshafeeq/parallax-website.git',
    demo: '',
  },
  {
    id: 7,
    image: IMG2,
    title: 'Portfolio Abanoub Shafeeq USING React',
    github: 'https://github.com/Abanobshafeeq/Portfolio.git',
    demo: 'https://abanoub-shafeeq-frontend-developer.netlify.app/',
  },
  {
    id: 8,
    image: IMG3,
    title: 'Todo List App USING React',
    github: 'https://github.com/Abanobshafeeq/ToDo-List.git',
    demo: 'https://todolist-abanoub.netlify.app/',
  },
  {
    id: 9,
    image: IMG4,
    title: 'Weather App USING React & API',
    github: 'https://github.com/Abanobshafeeq/WeatherApi-using-React.git',
    demo: 'https://weather-app-api-abanoub.netlify.app/',
  },
  {
    id: 10,
    image: IMG5,
    title: 'E-commerce Using HTML & CSS & JavaScript',
    github: 'https://github.com/Abanobshafeeq/Bebo-Ecommerce-HTML.git',
    demo: 'https://bebo-ecommerce-html.netlify.app/',
  },
  {
    id: 11,
    image: IMG6,
    title: 'North Giza USING HTML & CSS & JavaScript',
    github: 'https://github.com/Abanobshafeeq/V3.git',
    demo: 'https://mahraganeltasbi7a.netlify.app/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} target="_blank" className="btn" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
