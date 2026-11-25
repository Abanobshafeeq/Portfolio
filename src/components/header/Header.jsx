import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Social from './HeaderSocials'
import './header.css'

function Header() {
  return (
    <header id="home" aria-labelledby="hero-name">
      <div className="container header_container">

        <p className="hero_greeting hero_enter">Hello, I'm</p>
        <h1 id="hero-name" className="hero_enter">Abanoub Shafeeq</h1>
        <p className="hero_role hero_enter">Frontend Developer <span>(Angular & React)</span></p>
        
        <CTA />
        <Social />

        <div className="hero_portrait hero_enter">
          <div className="me">
            <img src={ME} alt="Abanoub Shafeeq" width="427" height="522" />
          </div>
        </div>

        <a href="#about" className='scroll_down text-link'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
