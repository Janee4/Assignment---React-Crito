import React from 'react'


import yellowRectangle from '../../assets/images/yellow-rectangle.svg'


const ArticleandnewsNinepics = ({imageSrc, title, customClass, category}) => {
  return (
    <>
    <div className="text-under-img">
        <a href=""><img src={imageSrc} alt="a picture of a woman smiling"/></a>
        <p id="business">{category}</p>
        <h4>{title}</h4>
      </div>
      <div className={customClass}>
      </div> 
    </>
  )
}

export default ArticleandnewsNinepics