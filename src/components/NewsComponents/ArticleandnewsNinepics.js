import React from 'react'


import yellowRectangle from '../../assets/images/yellow-rectangle.svg'


const ArticleandnewsNinepics = ({imageSrc, title, customClass, dateClassName, day, month}) => {
  return (
    <>
    <div className="text-under-img">
        <a href="how-to.html"><img src={imageSrc} alt="a picture of a woman smiling"/></a>
        <p id="business">Business</p>
        <h4>{title}</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className={customClass}>
        <img src={yellowRectangle}alt=""/>
        <p className={dateClassName}>
          <span className="day">{day}</span>
          <br />
          {month}
        </p>
      </div> 
    </>
  )
}

export default ArticleandnewsNinepics