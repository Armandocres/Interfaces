import React from 'react'
import { FaReact } from 'react-icons/fa';
import "./cardescription.css";
const CardDescription = ({dias, fecha, duracion}) => {
  return (
    <div className='Container'>
      <div className='Container__description'>
        <span className='Container__description--title'> <strong>Siguiente examen </strong></span>
        <span>Faltan {dias} dias</span>
        <p> <strong> Examen Mátematicas parcial 1 </strong> </p>
        <span> <strong> Fecha: {fecha} </strong></span>
        <span> <strong>Duración: {duracion}min </strong></span>
      </div>
      <div className='Containerimg'>
        <figure className='Containerimg__figure'>
          <FaReact />
        </figure>
      </div>
    </div>
   );
}
export default CardDescription;