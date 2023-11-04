import React from 'react'


import articleImg1 from '../assets/images/article-img1.png'
import articleImg2 from '../assets/images/article-img2.png'
import articleImg3 from '../assets/images/article-img3.png'
import articleImg4 from '../assets/images/article-img4.png'
import ProjectandcaseBox from './ProjectandcaseBox'

const ProjectandcaseSection = () => {
  return (
    <section className="project-and-case-6">
  <div className="container">
    <div className="section-title">
      <p>Project & Case Studies</p>
      <h2>Let's Looks Our Global Projects</h2>
    </div>
    <div className="project-and-cases">
    <ProjectandcaseBox imgSrc={articleImg1} title="Grow your business"  />
    <ProjectandcaseBox imgSrc={articleImg2} title="Why your client needs a responsive website"  />
    <ProjectandcaseBox imgSrc={articleImg3} title="Educate your employees to get better results"  />
    <ProjectandcaseBox imgSrc={articleImg4} title="Business Insights is a important piece of your business"  />
    </div>
    <div className="all-recent-projects-div">
      <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default ProjectandcaseSection