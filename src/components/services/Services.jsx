import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { RiSmartphoneLine } from "react-icons/ri";
import { BiGitBranch } from "react-icons/bi";
import { SiGraphql } from "react-icons/si";
import { RiFocus2Line } from "react-icons/ri";
import './services.css'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container_services">
        
        <article className="card">
          <FaCode className='icon'/>
          <h3>Angular & React Development</h3>
          <p className='text-light'>
            Build scalable, high-performance web applications using Angular and React in production environments.
          </p>
        </article>

       
        <article className="card">
  <FaLayerGroup className='icon'/>
  <h3>Enterprise Applications</h3>
  <p className='text-light'>
    Contribute to large-scale enterprise systems with modular architecture, complex business logic, and production-ready features.
  </p>
</article>
         <article className="card">
          <FaLayerGroup className='icon'/>
          <h3>State Management</h3>
          <p className='text-light'>
            Manage complex application state using RxJS, Redux, and Context API.
          </p>
        </article>
        <article className="card">
          <RiSmartphoneLine className='icon'/>
          <h3>Responsive Design</h3>
          <p className='text-light'>
            Deliver seamless and consistent user experiences across all devices and screen sizes.
          </p>
        </article>

        <article className="card">
          <SiGraphql className='icon'/>
          <h3>API Integration</h3>
          <p className='text-light'>
            Integrate RESTful APIs and handle complex data flows within scalable systems.
          </p>
        </article>

        <article className="card">
          <MdDesignServices className='icon'/>
          <h3>UI / UX Design & Animation</h3>
          <p className='text-light'>
            Build intuitive user interfaces with smooth interactions and modern design principles.
          </p>
        </article>

        <article className="card">
          <IoIosRocket className='icon'/>
          <h3>Performance Optimization</h3>
          <p className='text-light'>
            Enhance application performance using lazy loading, efficient rendering, and best practices.
          </p>
        </article>

        <article className="card">
          <BiGitBranch className='icon'/>
          <h3>Version Control</h3>
          <p className='text-light'>
            Collaborate using Git and modern workflows to maintain clean and reliable codebases.
          </p>
        </article>

        <article className="card">
          <RiFocus2Line className='icon'/>
          <h3>Clean Architecture</h3>
          <p className='text-light'>
            Write maintainable, scalable code following best practices and structured architecture patterns.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Services
