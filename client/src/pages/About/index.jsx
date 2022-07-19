import React from 'react'
import HeaderNav from "../Header/index";
import Footer from "../Footer/Index";
import Hero from './Hero';
import MeetTeam from './MeetTeam';
import OurStory from './OurStory';
import Team from './Team';

export default function About() {
  return (
    <div className='about-page'>
        <HeaderNav />

        <main>
            <Hero />
            <MeetTeam />
            <OurStory /> 
            <Team />
        </main>

        <Footer />
    </div>
  )
}