import React from 'react'
import HeroImg from './researchers.png'


const Hero = () => {
  return (
    <section className="hero">
      <h2>
        Our vision is to ensure quality education by optimizing your research workflow
      </h2>
      <img src={HeroImg} alt="researchers illustration" />
    </section>
  )
}

export default Hero;
