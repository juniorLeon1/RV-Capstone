import React from 'react'
import DestHero from '../../components/Destinations components/DestHero';
import PlacesCard from '../../components/Destinations components/PlacesCard';
import RestPlaces from '../../components/Destinations components/RestPlaces';
import SideBar from '../../components/Destinations components/SideBar';
import '../../styles/Destcontain.css';

const PRico = () => {
  const placesArray = [
    {
      img: require("../../images/RV_El_Yunque.jpeg"),
      title: "El Yunque National Forest",
      desc: "El Yunque National Forest is a tropical rainforest in northeastern Puerto Rico. From El Portal Visitor Center, a walkway winds through the surrounding treetops."
    },
    {
      img: require("../../images/RV_Mosquito_Bay.jpeg"),
      title: "Mosquito Bay (Bahía Bioluminiscente)",
      desc: "Microscopic organisms light up blue when agitated at this famed bioluminescent bay."
    },
    {
      img: require("../../images/RV_Tanama.jpeg"),
      title: "Tanama Eco-Adventure",
      desc: "Activities which includes caves, giant natural tunnels, tappelling, hiking, canyoning, trekking, body rafting, kayak ,camping , team buildings and many more."
    },
  ];

  const restArray = [
    {
      img: require("../../images/RV_Green_Bite.jpeg"),
      title: "Green Bites",
      desc: "A healthy food restaurant serving coffee and vegan brunch."
    },
    {
      img: require("../../images/RV_Parrot.jpeg"),
      title: "Green Parrot",
      desc: "Casual, family restaurant. Offers menu for adults, children, Puerto Rican food, and vegetarian options."
    },
    {
      img: require("../../images/RV_treehouse.jpeg"),
      title: "El Yunque Treehouse",
      desc: "Serving Caribbean and Puerto Rican for everyone and Vegetarian Friendly."
    },
  ];

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
      img: require("../../images/RV_London.jpeg"),
      title: "London"
    },
  ];

  return (
    <div className='App'>
      <DestHero title={"Puerto Rico"} />
        <section className='container'>
          <h2>Eco-Friendly Places</h2>
          <PlacesCard places={placesArray} />
          <h2>Eco-Friendly Resturants</h2>
          <RestPlaces rest={restArray} />
        <section >
          <SideBar className='side-content' info={side} />
        </section>
        </section>
    </div>
  )
}

export default PRico;
