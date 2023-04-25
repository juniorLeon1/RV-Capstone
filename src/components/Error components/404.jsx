import React from 'react'
import { Link } from "react-router-dom";
import Bag from '../../images/404.gif'

export default function LostPage() {
  return (
    <div>
      <h1>404</h1>
      <p>sorry this page was lost along with your luggage. click bellow to go back home</p>
      <Link to="/">
        <img alt="Empty suitcase" src={Bag} />
      </Link>
    </div>
  )
}
