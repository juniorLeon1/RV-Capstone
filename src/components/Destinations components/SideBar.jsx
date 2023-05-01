import React from 'react'
import { Link } from 'react-router-dom';
import "../../styles/SideBar.css"

const SideBar = (props) => {
  return (
    <div>
      {props.info.map((info) => {
        return (
          <Link to={info.url} >
            <section className='side-content'>
                <img src={info.img} alt={info.title} className='side-img' />
                <h2 className='side-content-title'>{info.title}</h2>
            </section>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
