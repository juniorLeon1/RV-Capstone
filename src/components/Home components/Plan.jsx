import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Plan.css";
import Circle from '../../images/Yellow.png'
import '../../styles/CircleBig.css'

export default function Plan() {
  return (
    <div className="HomeContainer">
      <div className="Grid-item">
        <h1>It's Time to Plan Your Journey</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          autem vitae, itaque recusandae soluta, numquam ipsum, repudiandae
          atque ad perferendis libero expedita? Dicta nobis voluptas
          consequatur. Nemo, culpa doloribus! Et.
        </p>
        <Link className="Plan-button">Learn More</Link>
      </div>
      <div className="Grid-item bottom">
        <img src="https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="brazil"></img>
      </div>
      {/* <img className="BigCircle" src={Circle} alt='big orange circle'></img> */}
    </div>
  );
}
