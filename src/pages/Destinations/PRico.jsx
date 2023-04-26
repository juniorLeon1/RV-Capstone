import React from 'react'

const PRico = () => {
  return (
    <div>
      <div className="App">
    <header className="App-header">
      <h1>Puerto Rico</h1>
    </header>
    <div className="container">
      <div className="main-content">
        <section className='main-content-title'>
          <h2>Eco-Friendly Places</h2>
        </section>
        <section>
          <img src={require("../../images/RV_El_Yunque.jpeg")} alt='' className='img' />
          <h2>El Yunque National Forest</h2>
          <p>El Yunque National Forest is a tropical rainforest in northeastern Puerto Rico. From El Portal Visitor Center, a walkway winds through the surrounding treetops.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Mosquito_Bay.jpeg")} alt='' className='img' />
          <h2>Mosquito Bay (Bahía Bioluminiscente)</h2>
          <p>Microscopic organisms light up blue when agitated at this famed bioluminescent bay.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Tanama.jpeg")} alt='' className='img' />
          <h2>Tanama Eco-Adventure</h2>
          <p>Activities which includes caves, giant natural tunnels, tappelling, hiking, canyoning, trekking, body rafting, kayak ,camping , team buildings and many more.</p>
        </section>
      </div>

      <div className="side-content">
        <section>
          <img src={require("../../images/RV_Charlotte.jpeg")} alt='' className='side-img' />
          <h2 className='side-content-title'>Charlotte</h2>
          <p>Why designing for mobile devices first can help you create more effective and user-friendly websites.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Brazil.jpeg")} alt='' className='side-img' />
          <h2 className='side-content-title'>Brazil</h2>
          <p>The largest country in South America and the fifth largest nation in the world.</p>
        </section>
        <section>
          <img src={require("../../images/RV_London.jpeg")} alt='' className='side-img' />
          <h2 className='side-content-title'>London</h2>
          <p>The capital city of the United Kingdom. The oldest of the world's great cities, with its history spanning nearly two millennia.</p>
        </section>
      </div>

      <div className="small-content">
        <section className='small-content-title'>
          <h2>Eco-Friendly Resturants</h2>
        </section>
        {/* <section>
          <h2>Related Posts</h2>
          <ul>
            <li><a href="#">10 Best Responsive Design Examples</a></li>
            <li><a href="#">Why Responsive Design is Essential for SEO</a></li>
            <li><a href="#">Responsive Design Tools and Resources</a></li>
          </ul>
        </section> */}
        <section className='food-container'>
          <img src={require("../../images/RV_Green_Bite.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Green Bites</h2>
            <p>A healthy food restaurant serving coffee and vegan brunch</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Parrot.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Green Parrot</h2>
            <p>Casual, family restaurant. Offers menu for adults, children, Puerto Rican food, and vegetarian options.</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_treehouse.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>El Yunque Treehouse</h2>
            <p>Serving Caribbean and Puerto Rican for everyone and Vegetarian Friendly.</p>
          </section>
        </section>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PRico
