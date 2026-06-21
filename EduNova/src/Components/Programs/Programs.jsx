import React, { useState } from 'react'
import { motion } from "framer-motion"
import './Programs.css'

import Program_1 from '../../assets/Program-1.jpg'
import Program_2 from '../../assets/Program-2.jpg'
import Program_3 from '../../assets/Program-3.jpg'

import Program_icon_1 from '../../assets/Program-icon-1.png'
import Program_icon_2 from '../../assets/Program-icon-2.png'
import Program_icon_3 from '../../assets/Program-icon-3.png'

const Programs = () => {

  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e, setState) => {
    const card = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - card.left
    const y = e.clientY - card.top

    const centerX = card.width / 2
    const centerY = card.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setState({ x: rotateX, y: rotateY })
  }

  const reset = (setState) => {
    setState({ x: 0, y: 0 })
  }

  const data = [
    {
      img: Program_1,
      icon: Program_icon_1,
      title: "Graduation Degree"
    },
    {
      img: Program_2,
      icon: Program_icon_2,
      title: "Masters Degree"
    },
    {
      img: Program_3,
      icon: Program_icon_3,
      title: "Post Graduation"
    }
  ]

  return (
    <div className='programs'>

      {data.map((item, i) => (

        <motion.div
          key={i}
          className='program'
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          onMouseMove={(e) => handleMouseMove(e, setRotate)}
          onMouseLeave={() => reset(setRotate)}
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          }}
        >

          <img src={item.img} alt="" className="program-img" />

          <div className="glow"></div>

          <div className="caption">
            <img src={item.icon} alt="" />
            <p>{item.title}</p>
          </div>

        </motion.div>

      ))}

    </div>
  )
}

export default Programs