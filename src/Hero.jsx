import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center ">
        <div className="hero-title">
          <h1>Contentful CMS </h1>
          <p>
            Discover a curated list of
            innovative projects that I’ve worked on, showcasing my skills in
            development, design, and problem-solving. Each project is a unique
            journey, highlighting my commitment to delivering impactful
            solutions.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero  