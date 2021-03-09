import React from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import "./materiales.css";
const Materiales = ({clase,formato,Tamaño}) => {
  return (
    <div className='Containers'>
      <figure className='Container__figures'>
        <FaFilePdf className='iconEs'/>
      </figure>
      <div className='Container__stads'>
        <div className='Container__stads--span'>
          <span>Clase {clase}</span>
          <span><FaEyeSlash /> no visto </span>
        </div>
        <p>Introducción al curso</p>
        <div className='Container__stads--span'>
          <span>tipo: {formato}</span>
          <span>Tamaño: {Tamaño}</span>
        </div>
      </div>
    </div>
  );
}
export default Materiales;