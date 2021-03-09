import React from 'react';
import notfound from '../utils/img/404.jpg';
import "../styles/StylesPages/notfound.css";
const NotFound = () => {
  return (
    <figure className='Notfound'>
      <img src={notfound} alt="not found"/>
    </figure>
  );
}
export default NotFound;