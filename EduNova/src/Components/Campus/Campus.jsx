import React from 'react'
import './Campus.css'
import Gallery_1 from '../../assets/Gallery-1.png'
import Gallery_2 from '../../assets/Gallery-2.png'
import Gallery_3 from '../../assets/Gallery-3.png'
import Gallery_4 from '../../assets/Gallery-4.png'
import White_arrow from '../../assets/White-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={Gallery_1} alt="" />
        <img src={Gallery_2} alt="" />
        <img src={Gallery_3} alt="" />
        <img src={Gallery_4} alt="" />
      </div>
      <a href="https://www.instagram.com/edunovaeducation/" className='btn dark-btn'>See more here <img src={White_arrow} alt="" /></a>
    </div>
  )
}

export default Campus
