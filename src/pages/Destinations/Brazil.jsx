import React from 'react'
import "../../styles/Brazil.css"

const Brazil = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Brazil</h1>
    </header>
    <div className="container">
      <div className="main-content">
        <section className='main-content-title'>
          <h2>Eco-Friendly Places</h2>
        </section>
        <section>
          <img src={require("../../images/RV_Pantanal.avif")} alt='' className='img' />
          <h2>Pantanal</h2>
          <p>The Pantanal has the greatest concentration of wildlife in the Americas.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Foz_do_Iguassa.jpeg")} alt='' className='img' />
          <h2>Foz do Iguassu</h2>
          <p>Iguassu Falls is a truly spectacular sight, one of South America's truly iconic places.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Rio_de_Janeiro.jpeg")} alt='' className='img' />
          <h2>Rio de Janeiro</h2>
          <p>Known to Brazilians as 'the marvellous city', Rio de Janeiro has undeniably the most beautiful setting of any city in the world.</p>
        </section>
      </div>

      <div className="side-content">
        <section>
          <img src={require("../../images/RV_Charlotte.jpeg")} alt='' className='side-img' />
          <h2 className='side-content-title'>Charlotte</h2>
          <p>Why designing for mobile devices first can help you create more effective and user-friendly websites.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Puerto_Rico.webp")} alt='' className='side-img' />
          <h2 className='side-content-title'>Puerto Rico</h2>
          <p>How to use media queries and breakpoints in your CSS to create responsive designs that adapt to different screen sizes.</p>
        </section>
        <section>
          <img src={require("../../images/RV_London.jpeg")} alt='' className='side-img' />
          <h2 className='side-content-title'>London</h2>
          <p>Examples and best practices for creating responsive navigation menus that work well on both desktop and mobile devices.</p>
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
          <img src={require("../../images/RV_Lagoa_Tropical.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Lagoa Tropical</h2>
            <p>Vegetarian buffet restaurant with diverse fare such as salads, quiches, pasta & stews.</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Naturalie_Bistro.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Naturalie Bistrô</h2>
            <p>Natural food restaurant offering seasonal menus according to produce availability</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Teva.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Teva</h2>
            <p>Teva is a vegetable bar and restaurant offering a delicious menu and a unique experience, raising people's awareness of their impact on the world .</p>
          </section>
        </section>
      </div>
    </div>
  </div>
  )
}

export default Brazil
