import React from 'react'

import woman from '../assets/images/woman.svg'

const AboutcompanySection = () => {
  return (
    <section className="part-3">
  <div className="container">
    <div className="content-3-left">
      <div className="woman-img">
        <img src={woman} alt="picture of a woman walking with a laptop in her hand" />
      </div>
      <div className="blue-box"> 
        <h3>Samantha Brown,</h3>
        <p className="founder-paragraph">Founder</p>
        <p className="lorem-paragraph">
        "Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit."</p>
      </div>
    </div>
    <div className="content-3-right">
      <p className="about-company-paragraph">About Company</p>
      <h2>We Are Business<br/> Consulting & Credit<br/>Repair Experts</h2>
      <p className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam<br/> officiis quas assumenda esse obcaecati? Ex esse error voluptates iurevel totam eos.</p>
      <p className="lorem lorem-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse<br/>quasi incidunt adipisci accusantium libero provident voluptate amet.</p> 
      <a className="btn-learnmore" href="learnmore.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
      <button className="btn-video"><i className="fa-solid fa-play"></i></button>
      <div>
        <p className="intro-video-paragraph">Intro Video</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default AboutcompanySection