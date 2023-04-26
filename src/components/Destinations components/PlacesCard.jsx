import React from 'react'
import "../../styles/PlacesCard.css"

const PlacesCard = (props) => {
  return (
    <div>
      {props.places.map((info) => {
        return (
            <section className='main-content'>
                <img src={info.img} alt={info.title} className='img' />
                <h2 className='main-content-title'>{info.title}</h2>
                <p className=''>{info.desc}</p>
            </section>
        );
      })}
    </div>
  );
};

export default PlacesCard;
