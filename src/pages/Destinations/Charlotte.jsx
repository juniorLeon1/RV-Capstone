import React from 'react'
import "../../styles/Charlotte.css"

const Charlotte = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Charlotte</h1>
    </header>
    <div className="container">
      <div className="main-content">
        <section className='main-content-title'>
          <h2>Eco-Friendly Places</h2>
        </section>
        <section>
          <img src={require("../../images/RV_Freedom_Park.png")} alt='' className='img' />
          <h2>Freedom Park</h2>
          <p>Freedom Park is a 98-acre park in Charlotte, North Carolina. The park has paved trails, tennis/volleyball courts, sport/athletic fields and playground equipment.</p>
        </section>
        <section>
          <img src={require("../../images/RV_Wing_Haven.jpeg")} alt='' className='img' />
          <h2>Wing Haven</h2>
          <p>A respite for birds and other wildlife and a welcoming place to discover the beauty and wonders of nature.</p>
        </section>
        <section>
          <img src={require("../../images/RV_McDowell.webp")} alt='' className='img' />
          <h2>McDowell Nature Center and Preserve</h2>
          <p>Provides educational programs and resources at the County’s oldest and largest nature preserve. </p>
        </section>
      </div>
      <div className="side-content">
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
          <img src={require("../../images/RV_Flower_Child.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Flower Child</h2>
            <p>On a simple, soul-satisfying mission to serve positively delicious vibes to the Charlotte community. Chock full of nourishing goodness our made-from-scratch menu caters to all lifestyles from vegetarian and vegan, to meat-eating and gluten-free to keto and paleo.</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Living_Kitchen.jpeg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Living Kitchen</h2>
            <p>Living Kitchen is your local hot spot for organic plant-based cuisine. Our vegan food creations are enjoyed by everyone!</p>
          </section>
        </section>
        <section className='food-container'>
          <img src={require("../../images/RV_Bean_Vegan.jpg")} alt='' className='img' />
          <section className='food-content'>
            <h2>Bean Vegan Cuisine</h2>
            <p>100% vegan comfort foods! From burgers to breakfast, BBQ to buffalo fingers, and everything in between, our menu offers the kind of variety vegans in the area crave. We create fantastic flavors that vegans and non-vegans alike will love. Come on in and experience it for yourself. It’s good y’all!</p>
          </section>
        </section>
      </div>
    </div>
  </div>
  )
}

export default Charlotte
