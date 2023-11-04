import React from 'react'

const FooterSection = () => {
  return (
    <footer className="footer">
  <div className="container">
    <div className="left">
      <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
    </div>
    <div className="right">
      <div className="social-media"> 
      <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a id="linked" href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
      </div> 
    </div>
  </div>
</footer>
  )
}

export default FooterSection