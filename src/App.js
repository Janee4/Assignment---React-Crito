import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import Home from './components/View/Home' //importera Home så att den kan navigera 
import ContactUs from './components/View/ContactUs';
import News from './components/View/News';
import Services from './components/View/Services';
import NewsBody from './components/NewsComponents/NewsBody';
import News_Details from './components/View/News_Details';


const App = () => {
  return (
  <BrowserRouter>
      <Routes>
          <Route path = '/' element={<Home/>} /> {/*När man besöker huvudsidan så kommer home-komponenten att visas med " '/' "  menar vi startsidan och det är ju Home i vårt fall*/}
          <Route path = '/contact' element={<ContactUs/>} /> {/*När url är "/contact" så kommer ContactUs komponenten att visas */}
          <Route path = '/news' element = {<News/>} />
          <Route path = '/services' element = {<Services/>} />
          <Route path="/news" element={<NewsBody />} />
        <Route path="/news/:id" element={<News_Details />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
