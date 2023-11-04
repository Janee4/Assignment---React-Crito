import React from 'react'


import thinLine from '../assets/images/thin-line (2).svg'
import ServiceBox from './ServiceBox'


const OurservicesSection = () => {
  return (
    <section className="we-provide-part4">
  <div className="thin-line">
    <img src= {thinLine} alt=""/>
  </div>
  <div className="container">
    <div className="main-text">
      <p>Our Services</p>
      <h2>We Provide The Best<br/>Service For Consulting</h2>
    </div>   

    <div className="boxes">
    <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/businessadvice" buttonClass="btn-go-to" boxNumber={1} />
    <ServiceBox className="box-2" title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/startupbusiness" buttonClass="btn-yellow-box" boxNumber={2} />
    <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/financialadvice" buttonClass="btn-go-to" boxNumber={3}/>
    <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." url="services/riskmanagement" buttonClass="btn-go-to" boxNumber={4} />
    </div>     
    
  
    <div className="centered-browse-services-button">
      <div className="button-under-boxes">
        <a className="btn-transparent" href="Browse-services.html">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    </div>
  </div>                  
</section>
  )
}

export default OurservicesSection