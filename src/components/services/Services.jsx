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
import SectionHeading from '../SectionHeading'
import MotionCard from '../MotionCard'

function Services() {
  return (
    <section id='services' aria-labelledby="services-title">
      <SectionHeading eyebrow="What I Offer" title="Services" id="services-title" />

      <div className="container container_services" data-motion-grid="services">
        
        <MotionCard className="card surface-card">
          <FaCode className='icon' aria-hidden="true" />
          <h3>Angular & React Development</h3>
          <p className='text-light'>
            Build scalable, high-performance web applications using Angular and React in production environments.
          </p>
        </MotionCard>

       
        <MotionCard className="card surface-card">
  <FaLayerGroup className='icon' aria-hidden="true" />
  <h3>Enterprise Applications</h3>
  <p className='text-light'>
    Contribute to large-scale enterprise systems with modular architecture, complex business logic, and production-ready features.
  </p>
</MotionCard>
         <MotionCard className="card surface-card">
          <FaLayerGroup className='icon' aria-hidden="true" />
          <h3>State Management</h3>
          <p className='text-light'>
            Manage complex application state using RxJS, Redux, and Context API.
          </p>
        </MotionCard>
        <MotionCard className="card surface-card">
          <RiSmartphoneLine className='icon' aria-hidden="true" />
          <h3>Responsive Design</h3>
          <p className='text-light'>
            Deliver seamless and consistent user experiences across all devices and screen sizes.
          </p>
        </MotionCard>

        <MotionCard className="card surface-card">
          <SiGraphql className='icon' aria-hidden="true" />
          <h3>API Integration</h3>
          <p className='text-light'>
            Integrate RESTful APIs and handle complex data flows within scalable systems.
          </p>
        </MotionCard>

        <MotionCard className="card surface-card">
          <MdDesignServices className='icon' aria-hidden="true" />
          <h3>UI / UX Design & Animation</h3>
          <p className='text-light'>
            Build intuitive user interfaces with smooth interactions and modern design principles.
          </p>
        </MotionCard>

        <MotionCard className="card surface-card">
          <IoIosRocket className='icon' aria-hidden="true" />
          <h3>Performance Optimization</h3>
          <p className='text-light'>
            Enhance application performance using lazy loading, efficient rendering, and best practices.
          </p>
        </MotionCard>

        <MotionCard className="card surface-card">
          <BiGitBranch className='icon' aria-hidden="true" />
          <h3>Version Control</h3>
          <p className='text-light'>
            Collaborate using Git and modern workflows to maintain clean and reliable codebases.
          </p>
        </MotionCard>

        <MotionCard className="card surface-card">
          <RiFocus2Line className='icon' aria-hidden="true" />
          <h3>Clean Architecture</h3>
          <p className='text-light'>
            Write maintainable, scalable code following best practices and structured architecture patterns.
          </p>
        </MotionCard>

      </div>
    </section>
  )
}

export default Services
