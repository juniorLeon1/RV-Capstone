import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DestinationCards() {
  const [info,setInfo] = useState([]);

  useEffect(()=>{
    callSql();
  },[])

  const callSql= async()=>{
    try{
     const response = await fetch ('http://localhost:8800/');
     const data = await response.json();
     console.log('Fetch complete')
     setInfo(data);
    }catch(error){
        console.error(error);
    }
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-top" alt="Chicago Skyscrapers" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-light list-group-small">
        <li className="list-group-item px-4">Cras justo odio</li>
        <li className="list-group-item px-4">Dapibus ac facilisis in</li>
        <li className="list-group-item px-4">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  )
}

export default DestinationCards;
