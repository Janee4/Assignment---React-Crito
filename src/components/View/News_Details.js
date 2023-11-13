import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderSection from '../HeaderSection';
import BlacknavigationNews from '../NewsComponents/BlacknavigationNews';
import FooterSection from '../FooterSection';
import NavSectionContainer from '../NavSectionContainer';
import NewsMiniNav from '../NewsComponents/NewsMiniNav';
import blackCritoLogo from '../../assets/images/black-crito-logo.svg'

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
      <div className="news-details-div">
       <HeaderSection />
       <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles"/>
        <h3> {article.title}</h3>
        <p>{article.author}</p>
        <p>{article.published}</p>
        <img src={article.imageUrl} alt={article.title} />
        <p> {article.content}</p>
        
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
      
        <FooterSection />
     

        
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
  
  export default News_Details;