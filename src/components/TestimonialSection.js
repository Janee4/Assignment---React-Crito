import React from 'react'

import cassandraWarren from '../assets/images/cassandra-warren-1.svg'
import amandaTulling from '../assets/images/amanda-tulling-2.svg'
import jackMcdogglas from '../assets/images/jack-mcdogglas-3.svg'
import TestimonialBox from '../assets/MiniComponents.js/TestimonialBox'

const TestimonialSection = () => {
  return (
    <section className="what-our-client-says-8">
  <div className="container">
    <div className="section-title">
      <p>Testimonial</p>
      <h2>What Our Client Says</h2>
    </div>
    <div className="total-comments">
    <TestimonialBox imgSrc={cassandraWarren} title="Cassandra Warren" description="Business Manager, Dorfus" />
    <TestimonialBox imgSrc={amandaTulling} title="Amanda Tulling" description="Senior Developer, Square" />
    <TestimonialBox imgSrc={jackMcdogglas} title="Jack McDogglas" description="Key Account Manager, Gobona" />
  
    
  </div>
    <div className="all-recent-projects-div">
      <a className="btn-black" href="projects.html">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
  </div>
</section>
  )
}

export default TestimonialSection