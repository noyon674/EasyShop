import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className='footer-div'>
        <div className="left">
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/discount'>Discount</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/about'>About us</NavLink>
            <NavLink to='/contact'>Contact us</NavLink>
          </nav>
          <div className="social-icon">
            <a href=""><RiFacebookLine /></a>
            <a href=""><RiLinkedinLine /></a>
            <a href=""><FaYoutube /></a>
            <a href=""><FiInstagram /></a>
          </div>
        </div>
        <div className="middle">
          <p><FaPhoneAlt/> +880 1889010237</p>
          <p><IoMdMail/> abc@gmail.com</p>
          <address>32/A, Mirpur-10, DHaka</address>
        </div>
        <div className="right">
          <form action="">
            <input 
            type="text"
            placeholder='Subscribe'
            name='subscribe' />
            <button className='btn'>Subscribe</button>
          </form>
        </div>
    </div>
  )
}

export default Footer