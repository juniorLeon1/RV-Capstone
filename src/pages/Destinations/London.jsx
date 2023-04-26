import React from 'react'

const London = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>London</h1>
    </header>
    <div className="container">
      <div className="main-content">
        <section className='main-content-title'>
          <h2>Eco-Friendly Places</h2>
        </section>
        <section>
          <img src={require("../../images/RV_Kensington.jpeg")} alt='' className='img' />
          <h2>The Kensington Garden</h2>
          <p>Once the private gardens of Kensington Palace, are among the Royal Parks of London. The gardens are shared by the City of Westminster and the Royal Borough of Kensington and Chelsea and sit immediately to the west of Hyde Park, in western central London.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Arcola.jpeg")} alt='' className='img' />
          <h2>Arcola Theatre</h2>
          <p>Arcola produces daring, high-quality theatre in the heart of East London and beyond. Experience brand new works and bold new productions of classics.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Buck_Street.jpeg")} alt='' className='img' />
          <h2>Camden Market Buck Street</h2>
          <p>Home to a host of new, up and coming street food traders, many of which have a focus on vegan and vegetarian options, as well as ethical fashion and retailers. Head to the rooftop for independent food traders, and don’t miss the mini market on the ground floor for some unique finds.</p>
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
          <p>Why designing for mobile devices first can help you create more effective and user-friendly websites.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Puerto_Rico.webp")} alt='' className='side-img' />
          <h2 className='side-content-title'>Puerto Rico</h2>
          <p>How to use media queries and breakpoints in your CSS to create responsive designs that adapt to different screen sizes.</p>
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
          <img src={require("../../images/RV_Clerkenwell.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>The Clerkenwell Kitchen</h2>
            <p>Cafe using organic and free range produce in simple European breakfast and lunch menus and snacks.</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Oliveira.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Oliveira Kitchen</h2>
            <p>Biodynamic fare is served with wine, cocktails & superfood smoothies at this cosy, bohemian eatery.</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Eco.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Eco Restaurant</h2>
            <p>Italian pizza place with distressed brick walls, pendant lamps, wooden counter seats and banquettes.</p>
          </section>
        </section>
      </div>
    </div>
  </div>
  )
}

export default London
