import React from 'react'


import articleAndNews1 from '../assets/images/articles-and-news-1.png'
import articleAndNews2 from '../assets/images/articles-and-news-2.png'
import articleAndNews3 from '../assets/images/articles-and-news-3.png'
import ArticleandnewsBox from './ArticleandnewsBox'


const ArticleandnewsSection = () => {
  return (
    <section className="article-and-news-9">
  <div className="container">
    <div className="title-container">
      <div className="section-title">
        <p>Article & News</p>
        <h2>Get Every Single Articles & News</h2>
      </div>
      <div className="btn-class">
      <a class="btn-transparent" href="login.html">Browse Articles<i class="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
    <div className="how-to-section">
    <ArticleandnewsBox title="How To Use Digitalization In The Classroom" imageSrc={articleAndNews1} customClass="yellow-rectangle-3" dateClassName="mars-13" day="13" month="Mar" />
    <ArticleandnewsBox title="How To Implement Chat GPT In Your Projects"  imageSrc={articleAndNews2} customClass="yellow-rectangle-2" dateClassName="mars-17" day="17" month="Mar" />
    <ArticleandnewsBox title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar"/>
      </div>
    <div className="circles">
      <div className="circle-1"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    </div>
    
    </section>
  )
}

export default ArticleandnewsSection