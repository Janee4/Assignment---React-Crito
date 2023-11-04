import React from 'react'

import thinLineShowcase from '../../assets/images/thin-line-showcase.svg'


const NewsMiniNav = ({navPieceOne, navPieceTwo, title}) => {
  return (
    <div className="mini-nav-bar">
    <div className="container">
      <div className="thin-line-showcase">
        <img src={thinLineShowcase} alt=""/>
      </div>
      <div className="first-row">
        <p>{navPieceOne}</p>
        <p>{navPieceTwo}</p>
      </div>
      <div className="second-row">
        <h1>{title}</h1>
      </div>
    </div>
  </div>
  )
}

export default NewsMiniNav