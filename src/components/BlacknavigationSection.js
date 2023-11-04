import React from 'react'
import BlacknavigationNews from './NewsComponents/BlacknavigationNews'

import blackCritoLogo from '../assets/images/black-crito-logo.svg'
import greyLines from '../assets/images/grey-lines.svg'

const BlacknavigationSection = () => {
  return (
    <section className="black-navigation">
  <div className="container">
    <div className="crito">
      <img src={blackCritoLogo} alt=""/>
      <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Placeat obcaecati voluptas<br/> voluptates! Voluptates laborum nam<br/> ratione minus necessitatibus, iure<br/> praesentium.</p>
    </div>
    <BlacknavigationNews divName="small-titles" titleClass="company" title="Company" title1="About" title2="Features" title3="Works" title4="Career" />
    <BlacknavigationNews divName="small-titles help" titleClass="help" title="Help" title1="Customer Support" title2="Delivery Details" title3="Terms & Conditions" title4="Privacy Policy" />
    <BlacknavigationNews divName="small-titles" title="Resources" title1="Free eBooks" title2="Development Tutorial" title3="How to -Blog" title4="Youtube Playlist" />
    <BlacknavigationNews divName="small-titles link" title="Link" title1="Free eBooks" title2="Development Tutorial" title3="How to -Blog" title4="Youtube Playlist"/>
  </div>
  <div className="grey-lines">
    <img src={greyLines} alt=""/>
  </div>
</section>
  )
}

export default BlacknavigationSection