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
     const response = await fetch ('http://localhost:8800/destinations');
     const data = await response.json();
     console.log('Fetch complete')
     setInfo(data);
    }catch(error){
        console.error(error);
    }
  }

  return (
    <div>
      {info.map((info)=>{
        return(
          <div className="card" style={{ width: '18rem' }}>
          <img src={require(info.img)} className="card-img-top" alt={info.location} />
      <div className="card-body">
        <h5 className="card-title">{info.location}</h5>
      </div>
      <ul className="list-group list-group-light list-group-small">
        <li className="list-group-item px-4">Cras justo odio</li>
        <li className="list-group-item px-4">Dapibus ac facilisis in</li>
        <li className="list-group-item px-4">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <Link><a href="#" className="card-link">Card link</a></Link>
      </div>
      </div>
        );
      })}
      
    </div>
  )
}

export default DestinationCards;
