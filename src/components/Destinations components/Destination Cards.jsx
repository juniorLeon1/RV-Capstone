import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../../styles/Destinations.css"

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
    <div className='stucture'>
      {info.map((info)=>{
        return(
          <div key= {info.id} className="desti-card" style={{ width: '18rem' }}>

          <div>
          <img src={info.img} className="desti-image" alt={info.location} />
          </div>
          
          <div>
          <div className="">
          <h5 className="">{info.location}</h5>
          </div>

          <div className="">
          <Link to={info.pathing}><p>{info.location}</p></Link>
          </div>
          </div>
          </div>
        );
      })}
      
    </div>
  )
}

export default DestinationCards;
