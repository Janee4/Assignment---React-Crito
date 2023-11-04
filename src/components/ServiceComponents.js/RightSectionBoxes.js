import React from 'react'


const RightSectionBoxes = ({title, description, isLast}) => {
    const createMarkup = (htmlString) => ({
        __html: htmlString
      });

const grayLineStyle = isLast ? {display: 'none'} : {};

  return (
    <>
    <div className={`right-box ${isLast ? 'no-line' : ''}`}>
    <h4 dangerouslySetInnerHTML={createMarkup(title)} />
      <p>{description}</p>
      <div className="gray-line" style={grayLineStyle}></div>
    </div>
    </>
 
  )
}

export default RightSectionBoxes