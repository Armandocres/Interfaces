import React from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import "./cardcirculo.css";
const CardCirculo = () => {
  return (
    <div className='Circulo'>
      <figure>
        <FaCircleNotch className='iconcirculo'/>
      </figure>
      <div>
        <p>Promedio: 0%</p>
        <p>Progreso: 0%</p>
        <p>Aprovado: 0%</p>
        <p>Reprobado: 0%</p>
      </div>
    </div>
  );
}
export default CardCirculo;