import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './HeaderSocials'
import './header.css'

function Header() {
  return (
    <header>
      <div className="container header_container">

        <h1>Abanoub Shafeeq</h1>
        <h4 className="text-light">Frontend Developer (Angular & React)</h4>
        
        <CTA />
        <Social />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#about" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
