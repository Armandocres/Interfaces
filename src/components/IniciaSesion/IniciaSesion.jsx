import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../../utils/img/sesionsv.svg';
import "./iniciasesion.css";
const IniciaSesion = () => {
  return (
    <>
      <header className="header">
          <h1>Selecciona tu rol</h1>
          <div className="header__btn">
            <button className="btn1" type="button">Alumno</button>
            <button className="btn2" type="button">Profesor</button>
          </div>
        </header>
          <figure className="section__figure">
            <img src={imagen} alt="imagen del profesor"/>
          </figure>
        <div className="section">
          <p>Descubre la mejor experiencia para realizar examenes</p>
          <Link to="/home/signup" className="btn1" type="button">Registrate</Link>
          <Link to="/home/signin" className="btn2" type="button">Inicia sesión</Link>
        </div>
    </>
  );
}
export default IniciaSesion;