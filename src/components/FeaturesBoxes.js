import React from 'react'

const FeaturesBoxes = ({title, description, boxTitle, imageSrc, imageAlt}) => {
    return (
      <div className={boxTitle}>
          <img src={imageSrc} alt={imageAlt}/>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
    )
  }
  
  export default FeaturesBoxes

