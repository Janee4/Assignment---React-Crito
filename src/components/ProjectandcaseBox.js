import React from 'react'

const ProjectandcaseBox = ({imgSrc, title}) => {
  return (
    <article>
        <a href="art.html"><img src={imgSrc} alt="A mans hand reading a business paper" /></a>
        <h3>{title}</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
  )
}

export default ProjectandcaseBox


{/* <article>
        <a href="art.html"><img src={articleImg1} alt="A mans hand reading a business paper" /></a>
        <h3>Grow your business</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg2} alt="Pink apple products" /></a>
        <h3>Why your client needs a responsive website</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg3} alt="Desk with office supplies"/></a> 
        <h3>Educate your employees to get better results</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article>
      <article>
        <a href="art.html"><img src={articleImg4} alt="Laptop with business Intelligence Insights"/></a>
        <h3>Business Insights is a important piece of your business</h3>
        <a className="read-more" href="#">Read More<i className="fa-regular fa-arrow-up-right"></i></a>
      </article> */}