import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'


import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ?setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
    setMobileMenu(!mobileMenu);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className='logo'/>
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        <li>
           <button className='btn'>Contact Us</button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
