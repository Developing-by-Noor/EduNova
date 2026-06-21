import React, { useRef } from 'react'

import './Testimonials.css'
import Next_icon from '../../assets/Next-icon.png'
import Back_icon from '../../assets/Back-icon.png'
import User_1 from '../../assets/User-1.png'
import User_2 from '../../assets/User-2.png'
import User_4 from '../../assets/User-4.png'
import User_5 from '../../assets/User-5.png'

const Testmonials = () => {

  const  slider = useRef();
  let tx = 0;
  const slideForward = () => { 
   
   if(tx > -50){
    tx -= 25
   }
slider.current.style.transform = `translateX(${tx}%)`

  }
  const slideBackward = () => {
   if(tx < 0){
    tx += 25
   }
slider.current.style.transform = `translateX(${tx}%)`

  }


  return (
    <div className='testimonials'>
        <img src={Next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={Back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_1} alt="" />
                  <div>
                    <h3>Adeline Jackson</h3>
                    <span>EduNova, USA</span>
                  </div>
                </div>
                <p>"EduNova completely transformed my learning experience. The teachers are incredibly supportive and always ready to guide us. I gained not only academic knowledge but also confidence in myself."</p>
              </div>
            </li>

             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_2} alt="" />
                  <div>
                    <h3>Elizabeth Henry </h3>
                    <span>EduNova, USA</span>
                  </div>
                </div>
                <p>"The practical approach to teaching at EduNova helped me understand real-world applications of my subjects. I feel more prepared for my future career than ever before."</p>
              </div>
            </li>

          
             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_4} alt="" />
                  <div>
                    <h3>Emmett Micah</h3>
                    <span>EduNova, USA</span>
                  </div>
                </div>
                <p>"From mentorship programs to leadership opportunities, EduNova offers everything a student needs to grow. It has been one of the best decisions of my academic journey."</p>
              </div>
            </li>

             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={User_5} alt="" />
                  <div>
                    <h3>Zachary Adrian </h3>
                    <span>EduNova, USA</span>
                  </div>
                </div>
                <p>"EduNova is more than just an institution — it’s a community. The supportive faculty and collaborative atmosphere helped me achieve my goals with confidence."</p>
              </div>
            </li>


          </ul>
        </div>
      
    </div>
  )
}

export default Testmonials
