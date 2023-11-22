import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Helmy</span> 👋
      <br />A Frontend Developer from Egypt
    </h1>
  ),
  2: (
    <InfoBox
      text="junior frontend developer"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple project to success over the years. curious about the impact?"
      link="/projects"
      btnText="visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dav? I`m just a few keystrokes away"
      link="/contact"
      btnText="Let`s talk"
    />
  ),
}

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null
}

export default HomeInfo
