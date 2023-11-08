import React, { useEffect, useState } from 'react';
import NewsMiniNav from './NewsMiniNav'
import { Link } from 'react-router-dom';



import blackM from '../../assets/images/black-M.svg'
import blackCritoLogo from '../../assets/images/black-crito-logo.svg'
import greyLines from '../../assets/images/grey-lines.svg'
import ArticleandnewsNinepics from './ArticleandnewsNinepics'
import OverblacknavSectionNews from './OverblacknavSectionNews'
import BlacknavigationNews from './BlacknavigationNews'
import FooterSection from '../FooterSection'

const NewsBody = () => {

  // Skapa en tillståndsvariabel för artiklar
  const [articles, setArticles] = useState([]);// en tom array för att vi vill ha en lista (på artiklar i vårt fall)
  
  // Använd useEffect för att hämta data från API:et när komponenten renderas med hjälp av getArticles funktionen
  useEffect(() => { 
   getArticles()
  }, []);
  
 const imageSizeStyleZero = { width: '100%', height: '293px' };
const imageSizeStyleTwo = { width: '100%', height: '293px' };
const imageSizeStyleThree = { width: '100%', height: '274px' };

const getArticles = async () => { //skapa en asynkron funktion som hämtar artiklarna och sparar dem (svaret) inom en variabel som kallas för result (se nedan)
  const result = await fetch ('https://win23-assignment.azurewebsites.net/api/articles') //sparar svaret/artiklarna i variabeln "result"
  setArticles (await result.json());  {/*här konverterar vi svaret till JSON-format (med hjälp av result.json)
  och ber javaScript att vänta (genom await) på att result.json ska slutföras innan vi går vidare med resten av koden.
  När det är klart så uppdaterar sidan efter det som hämtats (artiklarna).
*/}
  } 
  
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

      {articles.map((article, id) => ( // article skriver vi för vi vill hämta ut article i vår useState där standardvärdet är en tom lista []..
    
    <Link key={article.id} to={`/news/${article.id}`}> {/*index är det unika ID:t för varje artikel */}
      <ArticleandnewsNinepics
        title={article.title} //Här skriver vi in artikelns titel (gå in på WEB API:et så hittar du de specifika namnet på egenskaperna som du sedan hänvisar till här.)
        imageSrc={article.imageUrl}
        category={article.category}
        customImageZero={id === 0} //Specifik css styling på artikel 1
      customImageTwo={id === 2}//Specifik css styling på artikel 3
      customImageThree={id === 3}//Specifik css styling på artikel 4 
      imageSizeStyle={
        id === 0 ? imageSizeStyleZero :
        id === 2 ? imageSizeStyleTwo :
        id === 3 ? imageSizeStyleThree :
        {}
      }
      />
      <p>{article.content}</p> {/* Visa artikelinnehåll (texten under bilden) */}
      {/* <a href={`/news/${article.id}`}>Visa mer</a> Länk till artikelens detaljer */}
    </Link>
  ))}

      
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
