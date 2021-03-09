import React from 'react'
import { FaTrophy } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import "./footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <FaTrophy className='iconFo'/>
      <FaHome className='iconFo'/>
      <FaUser className='iconFo'/>
    </div>
  );
}
export default Footer;