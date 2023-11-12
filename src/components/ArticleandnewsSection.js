import React from 'react'
import { Link } from 'react-router-dom';
import ArticleandnewsNinepics from './NewsComponents/ArticleandnewsNinepics'
import { useNews } from '../contexts/NewsContext';



const ArticleandnewsSection = ({backgroundColor}) => {
const {articles} = useNews()

const imageSizeStyleZero = { width: '100%', height: '293px' };
const imageSizeStyleTwo = { width: '100%', height: '293px' };

  return (
<section className="article-and-news-9" style={{ backgroundColor }}>
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
      {articles.slice(0, 3).map((article, id) => ( // article skriver vi för vi vill hämta ut article i vår useState där standardvärdet är en tom lista []..
   
      <Link key={article.id} to={`/news/${article.id}`}> {/*index är det unika ID:t för varje artikel */}
        <ArticleandnewsNinepics
          title={article.title} //Här skriver vi in artikelns titel (gå in på WEB API:et så hittar du de specifika namnet på egenskaperna som du sedan hänvisar till här.)
          imageSrc={article.imageUrl}
          category={article.category}
          customImageZero={id === 0} //Specifik css styling på artikel 1
          customImageTwo={id === 2}//Specifik css styling på artikel 3
          imageSizeStyle={
            id === 0 ? imageSizeStyleZero :
            id === 2 ? imageSizeStyleTwo :
          {}
     }
     />
      <p>{article.content}</p> {/* Visa artikelinnehåll (texten under bilden) */}
     {/* <a href={`/news/${article.id}`}>Visa mer</a> Länk till artikelens detaljer */}
    </Link>
 ))}
 
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