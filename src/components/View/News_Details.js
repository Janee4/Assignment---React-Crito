import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSection from '../HeaderSection';
import NewsMiniNav from '../NewsComponents/NewsMiniNav';
import blackCritoLogo from '../../assets/images/black-crito-logo.svg'
import InfoParagraph from '../ServiceComponents.js/InfoParagraph';
import ServicesGreyButton from '../ServiceComponents.js/ServicesGreyButton';
import TitleRightSection from '../ServiceComponents.js/TitleRightSection';
import RightSectionBoxes from '../ServiceComponents.js/RightSectionBoxes';
import Categoriesbox from '../ServiceComponents.js/Categoriesbox';
import BlacknavigationSection from '../BlacknavigationSection';
import FooterSection from '../FooterSection';
import ArticleandnewsSection from '../ArticleandnewsSection';

const News_Details = () => {
    const { id } = useParams(); //Vi använder useParams för att hämta detaljer om de olika artiklarna som har specifika id:n på sig. 
    const [article, setArticle] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setArticle(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      };
  
      fetchData();
    }, [id]);
  
    if (article) {
      
    

    return (
      <>
    <HeaderSection />
      <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles"/>
      
      <div className="news-and-articles">
    <div className="container">
      <div className="left">
      <h3>{article.title}</h3>
      <div className="under-title-div">
      <InfoParagraph description={article.author} showYellowCircle={true}/>
      <InfoParagraph description={article.published} showYellowCircle={true}/>
      <InfoParagraph description={article.category} showYellowCircle={false}/>
        </div>
        <img src={article.imageUrl}/>
        <div className="paragraph-div">
          <p>
            {article.content}
          </p>
         
        </div>
        <div className="grey-buttons-div">
        <ServicesGreyButton description="Digitalization" />
        <ServicesGreyButton description="School" />
        <ServicesGreyButton description="IT" />
        <ServicesGreyButton description="Design" />
        <ServicesGreyButton description="Work" />
        <ServicesGreyButton description="Tech" />
        </div>
        

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
   <ArticleandnewsSection backgroundColor="#F0EFE9" />
   <BlacknavigationSection />
   <FooterSection />
      
      {/* <div className="news-details-div">
        <div className="container">
          <h3> {article.title}</h3>

        <div className="under-title-div">
         <InfoParagraph description={article.author} showYellowCircle={true}/>
         <InfoParagraph description={article.published} showYellowCircle={true}/>
       </div>
        
        <img className="img-url" src={article.imageUrl} alt={article.title} />
        <p> {article.content}</p>
        </div>
       </div>
      
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
          </section>
          <FooterSection /> */}
      </>
      
    );
  } else {
    return <div>Loading...</div>;
  }
};
  
  export default News_Details;

  // <div className="news-and-articles">
  //   <div className="container">
  //     <div className="left">
  //     <h3>How To Use Digitalization <br/>In The Classroom</h3>
  //     <div className="under-title-div">
  //       <InfoParagraph description="Mar 25, 2023" showYellowCircle={true}/>
  //         <InfoParagraph description="Business"showYellowCircle={true} />
  //         <InfoParagraph description="Kimberly Hansen" showYellowCircle={false}/>
  //       </div>
  //       <img src={kimberlyHansenBigPic}/>
  //       <div className="paragraph-div">
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, <br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
  //         </p>
  //         <p>
  //           Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. <br/>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra<br/> nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse<br/> dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. <br/> Ut nonummy.
  //         </p>
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc <br/> viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et <br/> malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
  //         </p>
  //         <p>
  //           Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br/>
  //           Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at <br/>sem venenatis eleifend. Ut nonummy.
  //         </p>
  //       </div>
        
  //       <div className="special-paragraph">
  //       <img src={quoteSign} />
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas <br/>porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,<br/> purus lectus malesuada libero, sit amet commodo magna eros quis urna.
  //         </p>
  //       </div>

  //       <p className="paragraph-six">
  //       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce<br/> posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros<br/> quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi<br/> tristique senectus et netus et malesuada fames ac turpis egestas. 
  //       </p>
      
  //       <ServicesGreyButton description="Digitalization" />
  //       <ServicesGreyButton description="School" />
  //       <ServicesGreyButton description="IT" />
  //       <ServicesGreyButton description="Design" />
  //       <ServicesGreyButton description="Work" />
  //       <ServicesGreyButton description="Tech" />

  //     </div>
      
  //     <div className="right"> 
  //         <div className="form-div">
  //           <form className="search-bar" action="#" method="post">
  //             <label for="email"></label>
  //             <div className="input-container">
  //             <i class="fa-solid fa-magnifying-glass"></i>
  //             <input type="text" id="email" placeholder="Type to search..." />
  //             </div> 
  //           </form>
  //         </div>
  //         <div className="recent-posts">
  //         <TitleRightSection title="Recent Posts" />
  //         <RightSectionBoxes title="How To Blow Through Capital At An<br/>Incredible Rate" description="Jan 14, 2020"isLast={false} />
  //         <RightSectionBoxes title="Design Studios That Everyone Should<br/>Know About?" description="Jan 14, 2020" isLast={false} />
  //         <RightSectionBoxes title="How did we get 1M+ visitors in 30 days<br/>without anything!" description="Jan 14, 2020" isLast={false}/>
  //         <RightSectionBoxes title="Figma On Figma: How We Built Our<br/>Website Design System" description="Jan 14, 2020" isLast={true} />
  //         </div>
  //         <div className="categories">
  //         <TitleRightSection title="Categories" />
  //         <Categoriesbox firstText="Technology" secondText="20 Posts"/>
  //         <Categoriesbox firstText="Freelancing" secondText="07 Posts"/>
  //         <Categoriesbox firstText="Writing" secondText="16 Posts"/>
  //         <Categoriesbox firstText="Business" secondText="35 Posts"/>
  //         <Categoriesbox firstText="Education" secondText="14 Posts"/>

  //         </div>
          

      
  //     </div>

  //   </div>


  //  </div>