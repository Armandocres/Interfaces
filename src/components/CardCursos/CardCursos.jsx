import React from 'react';
import { Link } from 'react-router-dom';
import "./cardcurso.css";
const CardCursos = ({materia, cali, curso}) => {
  return (
    <div className='container'>
      <Link className='linksah3' to="/home/curso/recurso">
        <h3>materia: {materia}</h3>
      </Link>
      <figure className='container__figure'>
        <img src={curso} alt="imagen del curso"/>
      </figure>
      <p>Calificacion: {cali}</p>
    </div>
  );
}
export default CardCursos;