import React from 'react';
import { Link } from 'react-router-dom';
import "./botones.css";
const Botones = () => {
  return (
    <div className='BotonesContainer'>
      <Link to='/home/curso/recurso' className='LinksBotones'>Recursos</Link>
      <Link to='/home/curso/examen' className='LinksBotones'>Examenes</Link>
      <Link to='/home/curso/resumen' className='LinksBotones'>Resumen</Link>
      <Link to='/home/informacion' className='LinksBotones'>Información</Link>
    </div>
  );
}
export default Botones;