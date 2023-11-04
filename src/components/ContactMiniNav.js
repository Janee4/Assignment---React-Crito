import React from 'react'

import thinLineShowcase from '../assets/images/thin-line-showcase.svg'

const ContactMiniNav = () => {
  return (
    <div className="mini-nav-bar">
    <div className="container">
      <div className="thin-line-showcase">
        <img src={thinLineShowcase} alt=""/>
      </div>
      <div className="first-row">
        <p>Home</p>
        <p>Contact</p>
      </div>
      <div className="second-row">
        <h1>Let's Connect</h1>
      </div>
    </div>
  </div>
  )
}

export default ContactMiniNav