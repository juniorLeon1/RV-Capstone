import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Plan.css";
import Circle from '../../images/Yellow.png'
import '../../styles/CircleBig.css'

export default function Plan() {
  return (
    <section className="outter">
    <div className="HomeContainer">
      <div className="Grid-item item1">
        <h1>It's Time to Plan Your Journey</h1>
        <p>
          Our travel guides feature destinations and activites that prioritize enviornmental sustainability, cultural preservation, responsible tourism and community envolvment. To plan a trip, start by selecting one of our desired destinations, make an account and save it to your favorites. Once you have selected a guide you can plan your trip with peace of mind. Knowing that it will have minimum enviornmental impact.
        </p>
        <Link className="Plan-button" to='/destinations'>Explore Now</Link>
      </div>
      <div className="Grid-item item2 bottom">
        <img src="https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="brazil"></img>
      </div>
      <img className="BigCircle item3" src={Circle} alt='big orange circle'></img>
    </div>
    </section>
  );
}
