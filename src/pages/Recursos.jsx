import React from 'react'
import Header from '../components/header/Header';
import Materia from '../components/Materia/Materia';
import Materiales from '../components/Materiales/Materiales';
import Botones from '../components/botones/Botones';
import flutter from '../utils/img/flutter.svg';
import "../styles/StylesPages/recursos.css";
const Recursos = () => {
  return (
    <>
      <Header />
      <Materia
      Materia="Matematicas"
      Profesor="Antonio Guzmán"
      Imagen={flutter}/>
      <Botones />
      <div className='Stads'>
        <Materiales
        clase="1"
        formato="pdf"
        Tamaño="10 min"
        />
        <Materiales
        clase="1"
        formato="pdf"
        Tamaño="10 min"
        />
        <Materiales
        clase="1"
        formato="pdf"
        Tamaño="10 min"
        />
        <Materiales
        clase="1"
        formato="pdf"
        Tamaño="10 min"
        />
        <Materiales
        clase="1"
        formato="pdf"
        Tamaño="10 min"
        />
      </div>
    </>
  );
}
export default Recursos;