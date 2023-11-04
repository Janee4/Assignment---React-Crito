import React from 'react'


import yellowRectangle from '../assets/images/yellow-rectangle.svg'

const ArticleandnewsBox = ({imageSrc, title, customClass, dateClassName, day, month}) => {

  
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

export default ArticleandnewsBox

{/* <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews1} alt="a picture of a woman smiling"/></a>
        <p id="business">Business</p>
        <h4>How To Use Digitalization In The Classroom</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className="yellow-rectangle-3">
        <img src={yellowRectangle}alt=""/>
        <p className="mars-13"><span className="day">13</span><br/>Mar</p>
      </div>
      <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews2} alt="a picture of three columns with text inside"/></a>
        <p id="business">Business</p>
        <h4>How To Implement Chat GPT In Your Projects</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className="yellow-rectangle-2">
        <img src={yellowRectangle} alt=""/>
        <p className="mars-17"><span className="day">17</span><br/>Mar</p>
      </div>
      <div className="text-under-img">
        <a href="how-to.html"><img src={articleAndNews3} alt="a picture of a phone lying on top of two books on a table"/></a>
        <p id="business">Business</p>
        <h4>The Guide To Support Modern CSS Design</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
      </div>
      <div className= "yellow-rectangle-1">
        <img src={yellowRectangle} alt=""/>
        <p className="mars-25">25<br/>Mar</p>
      </div> */}