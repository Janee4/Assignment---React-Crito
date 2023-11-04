import React from 'react'

const TestimonialBox = ({imgSrc, title, description}) => {
  return (
    <div className="rating-1">
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span> 
    <p>"Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit. Laudantium<br/>libero, ad dignissimos velit qui, dolorum<br/> obcaecati cum saepe nesciunt nemo<br/> eligendi numquam voluptate"</p>
      <div className="img-name-profession">
        <div className="three-images">
          <img src={imgSrc} alt="a picture of a woman"/>
        </div>
        <div className="name-profession">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
  </div>
    
  )
}

export default TestimonialBox

