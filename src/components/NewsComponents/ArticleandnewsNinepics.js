import React from 'react'


const ArticleandnewsNinepics = ({imageSrc, title, customClass, category, imageSizeStyle}) => {
  // const imageSizeStyleZero = customImageZero? { width: '100%', height: '293px' } : {};
  // const imageSizeStyleTwo = customImageTwo ? { width: '100%', height: '293px' } : {};
  // const imageSizeStyleThree = customImageThree? { width: '100%', height: '293px' } : {};
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