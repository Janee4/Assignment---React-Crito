import React from 'react'

import img_Showcase from '../assets/images/Showcase.png'
import thinLinesShowcase from '../assets/images/thin-line-showcase.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase"> 
    <div className="container">
        <div className="thin-line-showcase">
        <img src={thinLinesShowcase} alt="" />
        </div>
        <div className="content">  
        <h1>We Provide The Best Business Solutions</h1>
        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
        <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
        <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <img className="man-img" src={img_Showcase} alt="showcase image of a man" />
    </div>
    </section>
    
  )
}

export default ShowcaseSection