import React from 'react'

import blackCritoLogo from '../assets/images/black-crito-logo.svg'
import greyLines from '../assets/images/grey-lines.svg'

const ContactBlacknavigation = () => {
  return (
    <section className="black-navigation">
    <div className="container">
      <div className="crito">
        <img src={blackCritoLogo} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Placeat obcaecati voluptas<br/> voluptates! Voluptates laborum nam<br/> ratione minus necessitatibus, iure<br/> praesentium.</p>
      </div>
      <div className="small-titles">
        <h4 className="company">Company</h4>
        <a href="about.html">About</a>
        <a href="features.html">Features</a>
        <a href="works.html">Works</a>
        <a href="career.html">Career</a>
      </div>
      <div className="small-titles help">
        <h4 className="help">Help</h4>
        <a href="customersupport.html">Customer Support</a>
        <a href="deliverydetails.html">Delivery Details</a>
        <a href="terms-conditions.html">Terms & Conditions</a>
        <a href="privacypolicy.html">Privacy Policy</a>
      </div>
      <div className="small-titles">
        <h4>Resources</h4>
        <a href="ebooks.html">Free eBooks</a>
        <a href="dev-tutorial.html">Development Tutorial</a>
        <a href="blog.html">How to -Blog</a>
        <a href="youtube.html">Youtube Playlist</a>
      </div>
      <div className="small-titles link">
        <h4>Link</h4>
        <a href="ebooks.html">Free eBooks</a>
        <a href="dev-tutorial.html">Development Tutorial</a>
        <a href="blog.html">How to -Blog</a>
        <a href="youtube.html">Youtube Playlist</a>
      </div>
    </div>
    <div className="grey-lines">
      <img src={greyLines} alt=""/>
    </div>
  </section>
  )
}

export default ContactBlacknavigation