import React from 'react';
import "./materia.css";
const Materia = ({Materia, Profesor, Imagen}) => {
  return (
    <div className='ContainerM'>
      <div className='ContainerM__stadsprofesor'>
        <h1 className='ContainerM__stadsprofesor--title'>{Materia}</h1>
        <p>Profesor: {Profesor}</p>
      </div>
        <figure className='ContainerM__figure'>
          <img src={Imagen} alt="imagen del container"/>
        </figure>
    </div>
  );
}
export default Materia;