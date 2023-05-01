import React from 'react'
import "../../styles/PlacesCard.css"
import Savemebtn from './Savemebtn'

const PlacesCard = (props) => {
  return (
    <div>
      {props.value.map(place => {
        return (
          <div className='main-content'>
            <img src={place.img} alt={place.title} className='img'/>
            <h2 className='main-content-title'>{place.title}</h2>
            <p>{place.desc}</p>
            <Savemebtn />
          </div>
        )
      })}
    </div>
  )
}

export default PlacesCard
