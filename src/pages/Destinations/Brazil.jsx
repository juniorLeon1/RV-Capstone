import React from 'react'
import LocationsArray from '../../components/Destinations components/LocationsArray';
import PlacesCard from '../../components/Destinations components/PlacesCard';
import RestPlaces from '../../components/Destinations components/RestPlaces';
import SideBar from '../../components/Destinations components/SideBar';
import '../../styles/Destcontain.css';

const Brazil = () => {
  const brazilPlaces = LocationsArray[0].Brazil.places;
  const brazilRest = LocationsArray[0].Brazil.rest;

  const side = [
    {
      img: require("../../images/RV_Charlotte.jpeg"),
      title: "Charlotte",
      url: "/destinations/charlotte"
    },
    {
      img: require("../../images/RV_Puerto_Rico.webp"),
      title: "Puerto Rico",
      url: "/destinations/puerto-rico"
    },
    {
      img: require("../../images/RV_London.jpeg"),
      title: "London",
      url: "/destinations/london"
    },
  ];


  return (

    <div>
      <header style={{ paddingLeft: 0 , position: 'relative', zIndex: -1}}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://travellemming.com/wp-content/uploads/2018/12/9008-1.jpg')", height: 600 }} alt="Brazil"
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='display-3 fw-bold'>Brazil</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section className="App">
        <section className='container'>
          
          <section className='place-container'>
            <h2>Eco-Friendly Places</h2>
            <PlacesCard value={brazilPlaces}/>
          </section>

          <section>
            <SideBar className='side-content' info={side}/>
          </section>
        
        </section>

        <section className='rest-container'>
          <h2>Eco-Friendly Resturants</h2>
          <RestPlaces value={brazilRest} />
        </section>

      </section>
    </div>
  )
}



export default Brazil
