import React from 'react'


import logos from '../assets/images/Logos.png'
import businessIcon from '../assets/images/business-icon.svg'
import startupBusiness from '../assets/images/startup-business-icon.svg'
import financialAdvice from '../assets/images/financial-advice-icon.svg'
import riskmanagement from '../assets/images/risk-management-icon.svg'
import FeaturesBoxes from './FeaturesBoxes'

const FeaturesSection = () => {
  return (

    <section className="showcase-2">
        <div className="container">
            <div className="logo-section">
            <img className="logo" src={logos} alt="Logos"/>
            </div>
            </div>
    <div className="container-2">
    <div className="left">
        <p>Features</p>
        <h2>Our Accounting is<br/> trusted by thousand<br/> of companies</h2>
        <a className="btn-learn-yellow" href="learnmore.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
    <div className="right">
    <FeaturesBoxes boxTitle="business-advice" title="Business Advice" description="Lorem ipsum, dolor sit amet<br/>
         consectetur adipisicing elit." imageSrc={businessIcon} imgageAlt="handshake" />
    <FeaturesBoxes boxTitle="startup-business" title="Startup Business" description="Lorem ipsum, dolor sit amet<br/>
         consectetur adipisicing elit." imageSrc={startupBusiness} imgageAlt="A glowing lamp icon with a man inside" />
    <FeaturesBoxes boxTitle="financial-advice" title="Financial Advice" description="Lorem ipsum, dolor sit amet<br/>
         consectetur adipisicing elit." imageSrc={financialAdvice} imgageAlt="diagram" />
    <FeaturesBoxes boxTitle="risk-management" title="Risk Management" description="Lorem ipsum, dolor sit amet <br/>
         consectetur adipisicing elit." imageSrc={riskmanagement} imgageAlt="box and a wheel" />
    </div>
    </div> 
  
  </section>
  
  )
}

export default FeaturesSection