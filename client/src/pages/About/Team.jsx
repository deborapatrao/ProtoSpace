import React from 'react'
import AlexImg from './alex-orlov.jpg'
import AngelineImg from './angeline-espiritu.jpg'
import DeboraImg from './debora-correia.jpg'
import GabrielImg from './gabriel-cordeiro.jpg'
import MarkImg from './mark-eco.jpg'
import PhatImg from './phat-thuan-nguyen.jpg'
import SiulyImg from './siuly-tamex.jpg'


const Team = () => {
  return (
    <section className='team-section'>
      <div className='text-content'>
          <h2>
            Connect with us
          </h2>
          <p>Interested to know more? The nerds are here to help!</p>
      </div>
      <div className="team-profiles">
        <div className="team-member">
            <img src={AngelineImg} alt="Angeline Espiritu" />
            <h3 className="team-member__name">Angeline Espiritu</h3>
            <div className="tem-member__position">
                <p>Project Manager</p>
                <p>UI/UX Designer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={MarkImg} alt="Mark Wilton Eco" />
            <h3 className="team-member__name">Mark Wilton Eco</h3>
            <div className="tem-member__position">
                <p>Lead UX Designer</p>
                <p>UI Designer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={PhatImg} alt="Phat Thuan Nguyen" />
            <h3 className="team-member__name">Phat Thuan Nguyen</h3>
            <div className="tem-member__position">
                <p>Lead UI Designer</p>
                <p>UX Designer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={AlexImg} alt="Alex Orlov" />
            <h3 className="team-member__name">Alex Orlov</h3>
            <div className="tem-member__position">
                <p>Lead Developer</p>
                <p>Full-stack Developer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={DeboraImg} alt="Debora Patrao Correia" />
            <h3 className="team-member__name">Debora Patrao Correia</h3>
            <div className="tem-member__position">
                <p>Front-end Developer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={GabrielImg} alt="Gabriel Cordeiro" />
            <h3 className="team-member__name">Gabriel Cordeiro</h3>
            <div className="tem-member__position">
                <p>Full-stack Developer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

        <div className="team-member">
            <img src={SiulyImg} alt="Siuly Tamex" />
            <h3 className="team-member__name">Siuly Tamex</h3>
            <div className="tem-member__position">
                <p>Full-stack Developer</p>
            </div>
            <div className="team-member__links">
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
                <a href="">
                    <span className='visually-hidden'>email</span>
                    <i aria-hidden="true"></i>
                </a>
            </div>
            </div>

      </div>
    </section>
  )
}

export default Team;