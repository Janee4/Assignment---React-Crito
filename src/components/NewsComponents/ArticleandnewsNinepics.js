import React from 'react'


const ArticleandnewsNinepics = ({imageSrc, title, customClass, category, imageSizeStyle}) => {

  return (
    <>
    <div className="text-under-img">
    <a href=""><img src={imageSrc} alt="" style={imageSizeStyle} /></a>
        <p id="business">{category}</p>
        <h4>{title}</h4>
    </div>
    <div className={customClass}></div> 
    </>
  )
}

export default ArticleandnewsNinepics