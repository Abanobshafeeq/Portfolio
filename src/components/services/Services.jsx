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
          <h3>React & Next.js Development</h3>
          <p className='text-light'>
            Build interactive and high-performance web apps using React and Next.js.
          </p>
        </article>

        <article className="card">
          <FaLayerGroup className='icon'/>
          <h3>State Management (Redux / Context API)</h3>
          <p className='text-light'>
            Efficiently manage application state for complex web apps.
          </p>
        </article>

        <article className="card">
          <RiSmartphoneLine className='icon'/>
          <h3>Responsive Design</h3>
          <p className='text-light'>
            Ensure websites look perfect and function smoothly on all devices.
          </p>
        </article>

        <article className="card">
          <SiGraphql className='icon'/>
          <h3>API Integration</h3>
          <p className='text-light'>
            Connect front-end apps with backend services via RESTful APIs or GraphQL.
          </p>
        </article>

        <article className="card">
          <MdDesignServices className='icon'/>
          <h3>UI / UX Design & Animation</h3>
          <p className='text-light'>
            Create user-friendly interfaces with smooth animations and transitions.
          </p>
        </article>

        <article className="card">
          <IoIosRocket className='icon'/>
          <h3>Code Optimization & Performance</h3>
          <p className='text-light'>
            Enhance speed and efficiency for a seamless user experience.
          </p>
        </article>

        <article className="card">
          <BiGitBranch className='icon'/>
          <h3>Version Control (Git & GitHub)</h3>
          <p className='text-light'>
            Collaborate effectively with version control and team workflows.
          </p>
        </article>

      </div>
    </section>
  )
}

export default Services
