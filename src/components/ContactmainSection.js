import React from 'react'

import visitUs from '../assets/images/visit-us-1.svg'
import callUs from '../assets/images/call-us-2.svg'
import emailus from '../assets/images/email-us-3.svg'

const ContactmainSection = () => {
  return (
    <section className="main-content">
  <div className="three-boxes">
    <div className="box">
      <div className="img">
        <img src={visitUs} alt=""/>
      </div>
      <div>
        <h4>Visit us</h4>
        <p>Sveavägen 31</p>
        <p>111 31 STOCKHOLM</p>
      </div>
    </div>
    <div className="box">
      <div className="img">
        <img src={callUs} alt=""/>
      </div>
      <div>
        <h4>Call us</h4>
        <p>+46 (8) 121 470 50</p>
        <p>+46 (8) 121 470 51</p>
      </div>
    </div>
    <div className="box">
      <div className="img">
        <img src= {emailus} alt=""/>
      </div>
      <div>
        <h4>Email us</h4>
        <p>info@crito.com</p>
        <p>support@crito.com</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactmainSection