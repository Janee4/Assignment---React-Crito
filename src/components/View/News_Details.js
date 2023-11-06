import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const News_Details = () => {
    const { id } = useParams();
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
      return (
        <div>
          <h2>{article.title}</h2>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.content}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
  
  export default News_Details;