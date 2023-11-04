import React from 'react'
import NewsMiniNav from './NewsMiniNav'



import articleAndNews1 from '../../assets/images/articles-and-news-1.png'
import articleAndNews2 from '../../assets/images/articles-and-news-2.png'
import articleAndNews3 from '../../assets/images/articles-and-news-3.png'
import articleAndNews4 from '../../assets/images/articles-and-news-4.png'
import articleAndNews5 from '../../assets/images/articles-and-news-5.png'
import articleAndNews6 from '../../assets/images/articles-and-news-6.png'
import articleAndNews7 from '../../assets/images/articles-and-news-7.png'
import articleAndNews8 from '../../assets/images/articles-and-news-8.png'
import articleAndNews9 from '../../assets/images/articles-and-news-9.png'
import blackM from '../../assets/images/black-M.svg'
import blackCritoLogo from '../../assets/images/black-crito-logo.svg'
import greyLines from '../../assets/images/grey-lines.svg'
import ArticleandnewsNinepics from './ArticleandnewsNinepics'
import OverblacknavSectionNews from './OverblacknavSectionNews'
import BlacknavigationNews from './BlacknavigationNews'
import FooterSection from '../FooterSection'

const NewsBody = () => {
  return (
    <>

    <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles"/>
    <section className="article-and-news-9">
    <div className="container">
    <div className="title-container">
      <div className="section-title">
        <h2>Our News & Articles</h2>
      </div>
    </div>
    <div className="how-to-section">
    <ArticleandnewsNinepics title="How To Use Digitalization In The Classroom" imageSrc={articleAndNews1} customClass="yellow-rectangle-3" dateClassName="mars-13" day="13" month="Mar" />
    <ArticleandnewsNinepics title="How To Implement Chat GPT In Your Projects"  imageSrc={articleAndNews2} customClass="yellow-rectangle-2" dateClassName="mars-17" day="17" month="Mar" />
    <ArticleandnewsNinepics title="The Guide To Support Modern CSS Design" imageSrc={articleAndNews3} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Why You Need To Implement The Five S's" imageSrc={articleAndNews4} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Get More Involved With Your End Users" imageSrc={articleAndNews5} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Guided Tour Of Our New Head Office In Stockholm" imageSrc={articleAndNews6} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Using Business Intelligence To Get Insights Into Our Businesses" imageSrc={articleAndNews7} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="Apple Has Released New Products. Are They Any Good?" imageSrc={articleAndNews8} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    <ArticleandnewsNinepics title="How To Improve Your Teams And Get A Better Result" imageSrc={articleAndNews9} customClass="yellow-rectangle-1" dateClassName="mars-25"day="25" month="Mar" />
    </div>
    
    <div className="number-container">
      <div className="arrows">{<i class="fa-solid fa-angle-left"></i>}</div>
      <div id="nrOne" className="number-box">1</div>
      <div className="number-box">2</div>
      <div className="number-box">3</div>
      <div className="number-box">{'...'}</div>
      <div className="number-box">9</div>
      <div className="arrows">{<i class="fa-solid fa-angle-right"></i>}</div>
    </div>
    </div>
    </section>
    <section className="signup">
  <div className="m-detail">
    <img src={blackM} alt="a black detail that is shaped as the letter M"/>
  </div>
  <div className="container">
    <OverblacknavSectionNews title="Get News Updates By Signup" placeholderText="username@domain.com" btn="btn-subscribe" btnText="Subscribe"/>
  </div>
</section>

<section className="black-navigation">
  <div className="container">
    <div className="crito">
      <img src={blackCritoLogo} alt=""/>
      <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Placeat obcaecati voluptas<br/> voluptates! Voluptates laborum nam<br/> ratione minus necessitatibus, iure<br/> praesentium.</p>
    </div>
    <BlacknavigationNews divName="small-titles" titleClass="company" title="Company" title1="About" title2="Features" title3="Works" title4="Career" />
    <BlacknavigationNews divName="small-titles help" titleClass="help" title="Help" title1="Customer Support" title2="Delivery Details" title3="Terms & Conditions" title4="Privacy Policy" />
    <BlacknavigationNews divName="small-titles" title="Resources" title1="Free eBooks" title2="Development Tutorial" title3="How to -Blog" title4="Youtube Playlist" />
    <BlacknavigationNews divName="small-titles link" title="Link" title1="Free eBooks" title2="Development Tutorial" title3="How to -Blog" title4="Youtube Playlist"/>
  </div>
  <div className="grey-lines">
    <img src={greyLines} alt=""/>
  </div>
</section>
<FooterSection />

    
   
    
    
    </>
  )
}

export default NewsBody