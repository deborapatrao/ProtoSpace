import React from 'react'
import GroupImg from './group-illustration.jpg'


const OurStory = () => {
  return (
    <section className='content-section'>
      <div className='text-content'>
          <h2>
            Our Story
          </h2>
          <p>What started as a reminiscent of being a Biology student, grew into a promising opportunity for research disciplines in education.</p>
          <p>When one of our founders was a Biology undergrad, she was frustrated about having to juggle multiple papers and files to get through an experiment. Protospace was created to solve research workflow inefficiencies faced by instructors and students at Langara College.</p>
      </div>
      <img src={GroupImg} alt="Team illustrattion" />
    </section>
  )
}

export default OurStory;