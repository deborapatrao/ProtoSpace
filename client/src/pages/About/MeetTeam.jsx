import React from 'react'
import TeamImg from './team.jpg'


const MeetTeam = () => {
  return (
    <div className="full-background">
      <section className='content-section'>
        <div className='text-content'>
          <h2>
            Meet the team
          </h2>
          <p>Working in a diverse team drives innovation, challenging norms to shape a product of the future. Our teammates are experts in Biology, Social Sciences, Design, and Development.</p>
        </div>
        <img src={TeamImg} alt="Protospace team" className='team-img'/>
      </section>
    </div>
  )
}

export default MeetTeam;