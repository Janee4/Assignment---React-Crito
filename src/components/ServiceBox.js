import React from 'react'

import line from '../assets/images/line.svg'

const ServiceBox = ({title, description, url, boxNumber, buttonClass}) => { //lägg till dina generella egenskaper (du lägger in dina värden i huvudkomponenten "OurservicesSection")
    return (
        <div className={`box-${boxNumber}`}>
      <img src={line} alt="line"/>
      <h3>{title}</h3>
      <p>{description}</p> 
      <a className={buttonClass} href={url}><i className="fa-solid fa-arrow-right"></i></a> {/*När det kommer till länkar sätter vi aldrig "" utan vi sätter {} */}
      {boxNumber === 2 && (
        <a className="btn-yellow-box" href={url}>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      )}
    </div>
    )
  }
  
  export default ServiceBox


