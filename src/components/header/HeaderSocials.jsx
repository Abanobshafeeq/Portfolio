import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function HeaderSocials() {
  return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/abanoub-shafeeq-239820278/" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/Abanobshafeeq" target='_blank'><FaGithub /></a>
            
        </div>
  )
}

export default HeaderSocials