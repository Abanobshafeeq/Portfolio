import React from "react";
import "./skills.css";

const SkillsData = [
  {
    id: 1,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: 'HTML5',
    disc: 'Structure',
  },
  {
    id: 2,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: 'CSS3',
    disc: 'Styling',
  },
  {
    id: 3,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: 'JavaScript',
    disc: 'Core Language',
  },
  {
    id: 4,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: 'TypeScript',
    disc: 'Strong Typing',
  },
  {
    id: 5,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    title: 'Angular',
    disc: 'Framework',
  },
  {
    id: 6,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: 'React',
    disc: 'Library',
  },
  {
    id: 7,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: 'Next.js',
    disc: 'Framework',
  },
  {
    id: 8,
    image: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png",
    title: 'RxJS',
    disc: 'State & Streams',
  },
  {
    id: 9,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    title: 'Redux',
    disc: 'State Management',
  },
  {
    id: 10,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    title: 'TailwindCSS',
    disc: 'Styling',
  },
  {
    id: 11,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    title: 'Material UI',
    disc: 'UI Library',
  },
  {
    id: 12,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: 'Git',
    disc: 'Version Control',
  }
];

function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article className="card_skill" key={id}>
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
