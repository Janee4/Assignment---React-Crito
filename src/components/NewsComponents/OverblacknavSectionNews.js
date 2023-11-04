import React from 'react'

const OverblacknavSectionNews = ({title, placeholderText, btn, btnText}) => {
  return (
   
  <>
  <div className="left">
      <h3>{title}</h3>
    </div>
    <div className="right">
      <div className="searchbar-plus-button">
        <form className="searchbox" action="#" method="post">
          <label for="email"></label>
          <input type="text" id="email" placeholder={placeholderText}/>
        </form>
      <div className={btn}>
        <a className="subscribe" href="login.html">{btnText}<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
  </div>
  </>
  )
}

export default OverblacknavSectionNews