import React from 'react'
import "../../styles/Restplaces.css"
import Savemebtn from './Savemebtn'

const RestPlaces = (props) => {
  return (
        <div>
          {props.value.map(rest => {
            return (
              <div>
              <div className='small-content' key={rest.id}/> 
                <div className='food-container'>
                  <img src={rest.img} alt={rest.title} className='img'/>
                    <div className='food-content'>
                      <h2>{rest.title}</h2>
                      <p>{rest.desc}</p>
                      <Savemebtn />
                    </div>
                </div>
                </div>
              
            )
          })}
        </div>
      )
    }

export default RestPlaces;