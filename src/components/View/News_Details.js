import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
          // Visa ett felmeddelande för användaren eller hantera felet på lämpligt sätt
        }
      };
  
      fetchData();
    }, [id]);
  
    if (article) {
      const imgStyle = {
        width: '40%',
        height: 'auto',
      };

      const paragraphStyle = {
        color: '#191919', 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '18px', 
        fontWeight: 500,
        margin: '20px',
      };

      const titleStyle = {
        fontFamily: 'DM Sans, sans-serif',
          fontWeight: 700, 
          fontSize: '30px',
          color: '#191919', 
          margin: '20px',
      };
    

    return (
      <div >
        <h2 style={titleStyle}>{article.title}</h2>
        <img src={article.imageUrl} alt={article.title} style={imgStyle} />
        <p style={paragraphStyle}>{article.content} </p>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
  
  export default News_Details;