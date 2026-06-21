import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import Play_icon from '../../assets/Play-icon.png'
const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img
          src={Play_icon}
          alt=""
          className='play-icon'
          onClick={() => setPlayState(true)}
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>At our institution, we believe that true leadership begins with quality education. Our mission is to empower future leaders by providing an environment where knowledge, creativity, and character grow together.
        We focus not only on academic excellence but also on critical thinking, innovation, and confidence building. Through modern teaching methods and a supportive learning community, we prepare students to face global challenges with integrity and vision.</p>
       
        <p>Through mentorship, leadership opportunities, and collaborative learning experiences, we guide students to become confident decision-makers and responsible global citizens. We believe education is not just about earning a degree — it is about building character, developing vision, and creating leaders who will shape a better tomorrow.</p>
        <p>With a commitment to innovation, excellence, and lifelong learning, we continue to empower young minds to dream bigger, achieve higher, and lead with purpose.</p>

      </div>
    </div>
  )
}

export default About
