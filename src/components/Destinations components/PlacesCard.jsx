import React from 'react'
import "../../styles/PlacesCard.css"
import SaveButton from './SaveButton'

const PlacesCard = (props) => {
  return (
    <div>
      {props.value.map(place => {
        return (
          <div className='main-content'>
            <img src={place.img} alt={place.title} className='img'/>
            <h2 className='main-content-title'>{place.title}</h2>
            <p>{place.desc}</p>
            <SaveButton />
          </div>
        )
      })}
    </div>
  )
}

export default PlacesCard
