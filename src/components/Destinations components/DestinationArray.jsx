import React from 'react'
import { Link } from "react-router-dom";

export default function DestinationArray() {
  const Destinations = [
    {
    "id": 1,
    "location": "Charlotte, USA",
    "img": "./images-public/clt.jpg",
    "pathing": "/destinations/charlotte",
    "longitude": "-80.841141",
    "latitude": "35.223789"
    },
    {
    "id": 2,
    "location": "London, UK",
    "img": "./images-public/Lon1.jpg",
    "pathing": "/destinations/london",
    "longitude": "-0.127758",
    "latitude": "51.507351"
    },
    {
    "id": 3,
    "location": "San Juan, Puerto Rico",
    "img": "./images-public/Puerto2.jpg",
    "pathing": "/destinations/puerto-rico",
    "longitude": "-66.105721",
    "latitude": "18.466333"
    },
    {
    "id": 4,
    "location": "São Paulo, Brazil",
    "img": "./images-public/Sao.jpg",
    "pathing": "/destinations/brazil",
    "longitude": "-46.625290",
    "latitude": "-23.533773"
    }
    ]
    return (
        <div className="DestinationContainers">
        {Destinations.map((Destinations) => (
          <div className="DestinationItem" key={Destinations.id} style={{ backgroundImage: `url(${Destinations.img})`, backgroundSize: "cover"}}>
            <h1>{Destinations.location}</h1>
            <Link className="Button" to={Destinations.pathing}>
                More Info
               </Link>
          </div>
        ))}
      </div>
      )
}
