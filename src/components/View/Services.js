import React from 'react';
import HeaderSection from '../HeaderSection';
import FooterSection from '../FooterSection';
import BlacknavigationSection from '../BlacknavigationSection';
import ServicesBody from '../ServiceComponents.js/ServicesBody';
import NewsMiniNav from '../NewsComponents/NewsMiniNav';
import ArticleandnewsSection from '../ArticleandnewsSection';





const Services = () => {
  
  return (
    <div>
      <HeaderSection />
      <NewsMiniNav navPieceOne="Home" navPieceTwo="News" title="News & Articles" />
      <ServicesBody />
      <ArticleandnewsSection backgroundColor="#F0EFE9" />
      <BlacknavigationSection />
      <FooterSection/>
    </div>
  )
}

export default Services