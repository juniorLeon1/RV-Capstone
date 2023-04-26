import React from 'react'
import "../../styles/SideBar.css"

const SideBar = (props) => {
  return (
    <div>
      {props.info.map((info) => {
        return (
            <section>
                <img src={info.img} alt={info.title} className='side-img' />
                <h2 className='side-content-title'>{info.title}</h2>
            </section>
        );
      })}
    </div>
  );
};

export default SideBar;
