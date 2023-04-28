import React from 'react'
import PlacesCard from '../../components/Destinations components/PlacesCard';
import RestPlaces from '../../components/Destinations components/RestPlaces';
import SideBar from '../../components/Destinations components/SideBar';
import LocationsArray from '../../components/Destinations components/LocationsArray';
import '../../styles/Destcontain.css';

const London = () => {
  const londonPlaces = LocationsArray[2].London.places;
  const londonRest = LocationsArray[2].London.rest;

  const side = [
    {
      img: require("../../images/RV_Charlotte.jpeg"),
      title: "Charlotte"
    },
    {
      img: require("../../images/RV_Brazil.jpeg"),
      title: "Brazil"
    },
    {
      img: require("../../images/RV_Puerto_Rico.webp"),
    }
    ]

  return (
    <section className="App">
      <div>
        <header style={{ paddingLeft: 0 }}>
          <div
            className='p-5 text-center bg-image'
            style={{ backgroundImage: "url('https://travellemming.com/wp-content/uploads/Things-to-Do-in-London.jpg')", height: 600 }}
          >
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
              <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                  <h1 className='display-3 fw-bold'>London</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className='container'>
        <section className='place-container'>
          <h2>Eco-Friendly Places</h2>
          <PlacesCard value={londonPlaces}/>
        </section>

          <section>
            <SideBar className='side-content' info={side}/>
          </section>
      
      </section>

        <section className='rest-container'>
          <h2>Eco-Friendly Resturants</h2>
          <RestPlaces value={londonRest} />
        </section>

    </section>
  )
}

export default London
