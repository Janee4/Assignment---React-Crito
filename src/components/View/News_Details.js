import React from 'react'
import { useParams } from 'react-router-dom';

const News_Details = () => {
  
    const { articleId } = useParams();
  
    return (
    <div>
    <h2>News Details</h2>
    <p>Article ID: {articleId}</p>
    {/* Visa detaljer om den specifika artikeln här */}
  </div>
  )
}

export default News_Details