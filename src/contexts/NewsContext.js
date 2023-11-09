import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext); //grundpelaren vi ska ha i det hela, (är en customHook)


export const NewsProvider = ({ children }) => { //Providern är den som vi kommer att exportera/importera på olika ställen som man önskar. Den är tillgänglig i hela vår applikation genom att lägga till den i app.js
// Skapa en tillståndsvariabel för artiklar
const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
const [articles, setArticles] = useState([]); // en tom array för att vi vill ha en lista (på artiklar i vårt fall)
const [article, setArticle] = useState(null); //för att visa en specifik artikel på en specifik sida (Home,news,services etc)
  

//skapa en asynkron funktion som hämtar artiklarna och sparar dem (svaret) inom en variabel som kallas för result (se nedan)
const getArticles = async () => {
    const result = await fetch (apiUrl)//sparar svaret/artiklarna i variabeln "result"
    setArticles (await result.json()) //*här konverterar vi svaret till JSON-format (med hjälp av result.json) och ber javaScript att vänta (genom await) på att result.json ska slutföras innan vi går vidare med resten av koden. När det är klart så uppdaterar sidan efter det som hämtats (artiklarna).
  
}

// Använd useEffect för att hämta data från API:et när komponenten renderas med hjälp av getArticles funktionen
useEffect(() => { 
   getArticles()
  }, []);



const getArticle = async (id) => { //Om man vill hämta en speicifk produkt som baseras på ett speciellt id 
    const result = await fetch (`apiUrl/${id}`)
    setArticle (await result.json())
    
}


  return (
    //Här talar vi om vilka funktioner vi vill skicka med inuti value, du skriver alltså in dom objekten du vill komma åt på andra ställen. 
    <NewsContext.Provider value={{articles, article, getArticles, getArticle}}> 
      {children}
    </NewsContext.Provider>
  );
};

