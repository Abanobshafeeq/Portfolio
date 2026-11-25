import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




function HeaderSocials() {
  return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/abanoub-shafeeq-239820278/" target='_blank' rel="noreferrer" aria-label="LinkedIn (opens in a new tab)"><FaLinkedin /></a>
            <a href="https://github.com/Abanobshafeeq" target='_blank' rel="noreferrer" aria-label="GitHub (opens in a new tab)"><FaGithub /></a>
            
        </div>
  )
}

export default HeaderSocials
