import React from 'react'
import { FaFileAlt } from 'react-icons/fa';
import './examenesstads.css';
const ExamenesStads = ({Fecha, Preguntas,Tiempo}) => {
  return (
    <div className='ExamenesC'>
      <div className='ExamenesContainer'>
        <figure className='ExamenesContainer__figure'>
          <FaFileAlt className='icons'/>
        </figure>
        <div>
          <h2>Examen 1</h2>
          <p>Recursos 1 y 2</p>
        </div>
      </div>
      <div className='ContainerStadisticas'>
        <p>Fecha: {Fecha}</p>
        <p>Preguntas: {Preguntas}</p>
        <p>Tiempo: {Tiempo}</p>
        <span className='plast'>Calificacion: </span>
        <span>Sin calificar</span>
      </div>
    </div>
  );
}
export default ExamenesStads;