import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import './cardatos.css';
const CardDatos = ({Curso, Clave, Profesor}) => {
  return (
    <div>
      <div className='MateriasDatos'>
        <p className='title'>Curso</p>
        <span className='spanes'>{Curso}</span>
        <span className='spanes'>Clave: {Clave}</span>
      </div>
      <div className='MateriasProfesor'>
        <div className='MateriasProfesor__datos'>
          <p className='title'>Profesor</p>
          <p>{Profesor}</p>
        </div>
        <div>
          <span><FaEnvelope className='icones'/></span>
          <span><FaStar className='icones'/>4.1</span>
        </div>
      </div>
      <div className='dats'>
        <p className='title'>Descripcion</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo odit aperiam laudantium tempore minima provident ducimus.</p>
      </div>
      <div className='desactivar'>
        <h2 className='h2'>Anular inscripcion <FaTrash className='trash'/></h2>
      </div>
    </div>
  );
}
export default CardDatos;