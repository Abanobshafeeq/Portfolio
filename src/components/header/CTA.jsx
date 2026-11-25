import React from 'react'
import CV from '../../assets/Abanoub Shafeeq.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <span className="motion-button"><a href={CV} download className='btn'>Download CV</a></span>
      <span className="motion-button"><a href="#contact" className='btn btn-primary'>Let's Talk</a></span>
    </div>
  )
}

export default CTA
