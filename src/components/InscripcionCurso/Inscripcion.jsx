import React, { useState } from 'react';
import Modal from '../ModalInscripcion/Modal';
import inscripcion from '../../utils/img/inscripcioncurso.svg';
import "./inscripcion.css";
const Inscripcion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='ContainerInscription'>
      <figure className='ContainerInscription__figureins'>
        <img src={inscripcion} alt="foto de inscripcion"/>
      </figure>
      <div className='ContainerInscription__datos'>
        <p className='ContainerInscription__datos--parrafo'>Inscribete a tu primer curso</p>
        <button onClick={()=> setIsModalOpen(true)} className='boton'>Inscribete a tu primer curso</button>
        <Modal isOpen={isModalOpen} onClose={ () => setIsModalOpen(false)}/>
      </div>
    </div>
  );
}
export default Inscripcion;