import React from 'react'

const BlacknavigationNews = ({divName, title, title1, title2, title3, title4, titleClass}) => {
  return (
    <div className={divName}>
      <h4 className={titleClass}>{title}</h4>
      <a href="about.html">{title1}</a>
      <a href="features.html">{title2}</a>
      <a href="works.html">{title3}</a>
      <a href="career.html">{title4}</a>
    </div>
  )
}

export default BlacknavigationNews