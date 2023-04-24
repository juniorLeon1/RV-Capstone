import React from 'react'
import Bag from '../images/404.gif'
import '../styles/Error.css'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='Error'>
      <h1>404</h1>
      <p>sorry this page was lost along with your luggage. click bellow to go back home</p>
      <Link to="/">
        <img alt="Empty suitcase" src={Bag} />
      </Link>
    </div>
  )
}

export default Error
