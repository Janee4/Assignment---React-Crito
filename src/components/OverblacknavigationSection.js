import React from 'react'

import blackM from '../assets/images/black-M.svg'

const OverblacknavigationSection = () => {
  return (
    <section className="signup">
  <div className="m-detail">
    <img src={blackM} alt="a black detail that is shaped as the letter M"/>
  </div>
  <div className="container">
    <div className="left">
      <h3>Get News Updates By Signup</h3>
    </div>
    <div className="right">
      <div className="searchbar-plus-button">
      <form className="searchbox" action="#" method="post">
          <label for="email"></label>
          <input type="text" id="email" placeholder="username@domain.com"/>
        </form>
      <div className="btn-subscribe">
        <a className="subscribe" href="login.html">Subscribe<i className="fa-regular fa-arrow-up-right"></i></a>
      </div>
    </div>
  </div>
  </div>
</section>
  )
}

export default OverblacknavigationSection