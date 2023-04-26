import React from 'react'
import "../../styles/Restplaces.css"

const RestPlaces = (props) => {
  return (
    <div>
      {props.rest.map((info) => {
        return (
        <div>
            <section className='small-content'>
                  <section className='food-container'>
                    <img src={info.img} alt={info.title} className='img' />
                    <section className='food-content'>
                      <h2>{info.title}</h2>
                      <p className=''>{info.desc}</p>
                    </section>
                  </section>
            </section>
        </div>
        );
      })}
    </div>
  );
};

export default RestPlaces;