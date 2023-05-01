import React from 'react'


const DestHero = (props) => {
  return (
    <div>
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://travellemming.com/wp-content/uploads/Downtown-Charlotte-North-Carolina.jpg')", height: 600 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='display-3 fw-bold'>{props.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};


export default DestHero;
