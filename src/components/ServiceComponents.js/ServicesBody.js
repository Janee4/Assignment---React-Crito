import React from 'react'
import InfoParagraph from './InfoParagraph'
import kimberlyHansenBigPic from '../../assets/images/Kimberly-Hansen-Big-Pic.png'
import quoteSign from '../../assets/images/quote-sign.svg'
import ServicesGreyButton from './ServicesGreyButton'
import TitleRightSection from './TitleRightSection'
import RightSectionBoxes from './RightSectionBoxes'
import Categoriesbox from './Categoriesbox'




const ServicesBody = () => {
  return (
   <div className="news-and-articles">
    <div className="container">
      <div className="left">
      <h3>How To Use Digitalization <br/>In The Classroom</h3>
      <div className="under-title-div">
        <InfoParagraph description="Mar 25, 2023" showYellowCircle={true}/>
          <InfoParagraph description="Business"showYellowCircle={true} />
          <InfoParagraph description="Kimberly Hansen" showYellowCircle={false}/>
        </div>
        <img src={kimberlyHansenBigPic}/>
        <div className="paragraph-div">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, <br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
          <p>
            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. <br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra<br/> nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse<br/> dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. <br/> Ut nonummy.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc <br/> viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et <br/> malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
          </p>
          <p>
            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br/>
            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at <br/>sem venenatis eleifend. Ut nonummy.
          </p>
        </div>
        
        <div className="special-paragraph">
        <img src={quoteSign} />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas <br/>porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,<br/> purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          </p>
        </div>

        <p className="paragraph-six">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce<br/> posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros<br/> quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi<br/> tristique senectus et netus et malesuada fames ac turpis egestas. 
        </p>
      
        <ServicesGreyButton description="Digitalization" />
        <ServicesGreyButton description="School" />
        <ServicesGreyButton description="IT" />
        <ServicesGreyButton description="Design" />
        <ServicesGreyButton description="Work" />
        <ServicesGreyButton description="Tech" />

      </div>
      
      <div className="right"> 
          <div className="form-div">
            <form className="search-bar" action="#" method="post">
              <label for="email"></label>
              <div className="input-container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="email" placeholder="Type to search..." />
              </div> 
            </form>
          </div>
          <div className="recent-posts">
          <TitleRightSection title="Recent Posts" />
          <RightSectionBoxes title="How To Blow Through Capital At An<br/>Incredible Rate" description="Jan 14, 2020"isLast={false} />
          <RightSectionBoxes title="Design Studios That Everyone Should<br/>Know About?" description="Jan 14, 2020" isLast={false} />
          <RightSectionBoxes title="How did we get 1M+ visitors in 30 days<br/>without anything!" description="Jan 14, 2020" isLast={false}/>
          <RightSectionBoxes title="Figma On Figma: How We Built Our<br/>Website Design System" description="Jan 14, 2020" isLast={true} />
          </div>
          <div className="categories">
          <TitleRightSection title="Categories" />
          <Categoriesbox firstText="Technology" secondText="20 Posts"/>
          <Categoriesbox firstText="Freelancing" secondText="07 Posts"/>
          <Categoriesbox firstText="Writing" secondText="16 Posts"/>
          <Categoriesbox firstText="Business" secondText="35 Posts"/>
          <Categoriesbox firstText="Education" secondText="14 Posts"/>

          </div>
          

      
      </div>

    </div>


   </div>
  )
}

export default ServicesBody