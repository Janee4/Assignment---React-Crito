import React from 'react'

import processExcellence from '../assets/images/process-excellence-img.svg'
import strategicPlanning from '../assets/images/strategic-planning-img.svg'
import experienceDesign from '../assets/images/experience-design.svg'
import artificialInteligence from '../assets/images/artificial-inteligence.svg'
import twoWomen from '../assets/images/two-women.png'


const WhychooseusSection = () => {
  return (
    <section className="why-choose-us-part5">
  <div className="container">
    <div className="left"> 
      <div className="title">
          <p>Why Choose Us</p>
          <h2>Why We Are The<br/> Best Business Consulting Agency</h2>
      </div>
      <div className="text-and-img">
        <div>
          <img src={processExcellence} alt="a thumb pointing up"/>
        </div>
        <div id="different-style">
          <h3>Process Excellence</h3>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="text-and-img">
        <div>
          <img src={strategicPlanning} alt="a thumb pointing up"/>
        </div>
        <div id="different-style">
          <h3>Strategic Planning</h3>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="text-and-img">
        <div>
          <img src={experienceDesign} alt="a thumb pointing up"/>
        </div>
        <div id="different-style">
          <h3>Experience Design</h3>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="text-and-img">
        <div>
          <img src={artificialInteligence} alt="a thumb pointing up"/>
        </div>
        <div>
          <h3>Artificial Inteligence</h3>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
    <div className="right">
      <div className="beige-box">
      </div>
      <img src={twoWomen} alt="two women talking"/>
    </div>
  </div>
</section>
  )
}

export default WhychooseusSection