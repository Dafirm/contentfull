import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center ">
        <div className="hero-title">
          <h1>Contentful CMS </h1>
          <p>
            Small batch brunch tattooed lumbersexual, paleo yuccie tbh plaid.
            Bespoke intelligentsia +1, thundercats viral pok pok slow-carb
            master cleanse vape tumeric williamsburg unicorn. Health goth
            microdosing fit, sustainable aesthetic quinoa shabby chic. Pickled
            next level mustache pug fit messenger bag palo santo blue bottle
            tbh.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  );
}

export default Hero  