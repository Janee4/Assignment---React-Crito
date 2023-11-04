import React from 'react'

import kristinePalmer from '../assets/images/kristine-palmer-1.svg'
import markAubri from '../assets/images/mark-aubri-2.svg'
import kimberlyHansen from '../assets/images/kimberly-hansen-3.svg'
import justinWilloman from '../assets/images/justin-willoman-4.svg'

const MeetourteamSection = () => {
  return (
<section className="team-members-7">
  <div className="container">
    <div className="title-container">
      <div className="section-title">
        <p>Meet Our Team</p>
        <h2>Experience Team<br/> Members</h2>
      </div>
      <div className="btn-browse-team">
        <a className="btn-browse-team" href="login.html">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>      
    <div className="section-team-members">
      <div className="members-name-and-proffesion">
        <a className="img-member" href="kristine.html"><img src={kristinePalmer} alt="a picture of a team member called Kristine Palmer"/></a>
        <h4>Kristine Palmer</h4>
        <p>Chef Operation Officer</p>
      </div>
      <div className="members-name-and-proffesion">
        <a className="img-member" href="mark.html"><img src={markAubri} alt="a picture of a team member called Mark Aubri"/></a>
        <h4>Mark Aubri</h4>
        <p>Senior Consultant</p>
      </div>
      <div className="members-name-and-proffesion">
        <a className="img-member" href="kimberly.html"><img src={kimberlyHansen} alt="a picture of a team member called Kimberly Hansen"/></a>
        <h4>Kimberly Hansen</h4>
        <p>Senior Consultant</p>
      </div>
      <div className="members-name-and-proffesion">
        <a className="img-member" href="justin.html"><img src={justinWilloman} alt="a picture of a team member called Justin Willoman"/></a>
        <h4>Justin Willoman</h4>
        <p>Senior Tech Consultant</p>
      </div>
    </div>
    <div className="circles">
      <div className="circle"></div>
      <div className="circle-2"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div> 
</section>
  )
}

export default MeetourteamSection