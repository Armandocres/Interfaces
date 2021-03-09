import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import "./header.css"
const Header = () => {
  return (
    <div className='Header'>
      <FaBars className='fas'/>
      <h2>Exámenes en liena</h2>
      <FaSun className='fas'/>
    </div>
  );
}
export default Header;