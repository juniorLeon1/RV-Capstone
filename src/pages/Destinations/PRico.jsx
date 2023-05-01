import React from 'react'
import PlacesCard from '../../components/Destinations components/PlacesCard';
import RestPlaces from '../../components/Destinations components/RestPlaces';
import SideBar from '../../components/Destinations components/SideBar';
import LocationsArray from '../../components/Destinations components/LocationsArray';
import '../../styles/Destcontain.css';

const PRico = () => {
  const pRicoPlaces = LocationsArray[3].PR.places;
  const pRicoRest = LocationsArray[3].PR.rest;

  const side = [
    {
      img: require("../../images/RV_Charlotte.jpeg"),
      title: "Charlotte",
      url:"/destinations/charlotte"
    },
    {
      img: require("../../images/RV_Brazil.jpeg"),
      title: "Brazil",
      url:"/destinations/brazil"
    },
    {
      img: require("../../images/RV_London.jpeg"),
      title: "London",
      url:"/destinations/london"
    },
  ];

  return (
  <div>
    <header style={{ paddingLeft: 0, position: 'relative', zIndex: -1 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://travellemming.com/wp-content/uploads/Cities-in-Puerto-Rico.jpg')", height: 600 }} alt='Puerto Rico'
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='display-3 fw-bold'>Puerto Rico</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <section className="App">
      
        <section className='container'> 
          <section className='place-container'>
            <h1>Eco-Friendly Places</h1>
            <PlacesCard value={pRicoPlaces}/>
          </section>

          <section>
            <SideBar info={side} />
          </section>
        </section>

        <section className='rest-container'>
          <h1>Eco-Friendly Resturants</h1>
          <RestPlaces value={pRicoRest} />
        </section>

    </section>
  </div>
  )
}

export default PRico;
