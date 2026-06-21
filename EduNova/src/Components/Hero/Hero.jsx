import React from 'react'
import { useNavigate } from "react-router-dom"
import './Hero.css'
import arrow from '../../assets/arrow.png'

const Hero = () => {

    const navigate = useNavigate()

    const handleExplore = () => {
        navigate("/explore")
    }

    return (
        <div className='hero container'>
            <div className='hero-text hero-animate'>

                <h1 className="hero-title">
                    Empowering Future Leaders Through Excellence in Education
                </h1>

                <p className="hero-desc">
                    Our cutting-edge is designed to empower students with the knowledge,
                    skills and experiences needed to excel in the dynamic field of education.
                </p>

                <button className="btn hero-btn" onClick={handleExplore}>
                    Explore more <img className="hero-arrow" src={arrow} alt="Arrow" />
                </button>

            </div>
        </div>
    )
}

export default Hero

