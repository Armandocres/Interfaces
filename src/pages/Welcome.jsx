import React from 'react';
import { Link } from 'react-router-dom';
import welcome from '../utils/img/welcome.svg';
import "../styles/StylesPages/welcome.css";
const Welcome = () => {
  return (
    <>
      <figure className="figure">
        <img src={welcome} alt="imagen que da la bienvenida"/>
      </figure>
      <div className="Text">
        <p className="Text__p1">¡Bienvenido!Comienza con la nueva experiencia de aprendizaje</p>
        <p className="Text__p2">Empieza tomando el tutorial</p>
        <button className="btn1link" type="button">Comenzar </button>
        <Link to="/home/curso" className="btn2link" type="button">Saltar</Link>
      </div>
    </>
  );
}
export default Welcome;