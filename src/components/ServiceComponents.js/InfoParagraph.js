import React from 'react'

const InfoParagraph = ({description, showYellowCircle}) => {
  return (
    <div className="paragraph-under-title">
      <p>{description}</p>
      {showYellowCircle && <div className="yellow-circle"></div>} {/*Om showYellowCircle = true, då kommer yellow-circle klassen att renderas, om den inte är true så 
      kommer den inte att renderas, detta bestämmer du i den överordnade komponenten sedan såhär : showYellowCircle= {true} eller {false} */}
    </div>
  )
}

export default InfoParagraph