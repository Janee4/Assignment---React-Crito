import React from 'react'

const Categoriesbox = ({firstText, secondText}) => {
  return (
    <p>
      <span className="first-text">{firstText}</span> -{' '}
      <span className="second-text">{secondText}</span>
    </p>
  )
}

export default Categoriesbox