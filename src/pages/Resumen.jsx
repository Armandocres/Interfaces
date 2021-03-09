import React from 'react'
import Header from '../components/header/Header';
import Materia from '../components/Materia/Materia';
import CardCirculo from '../components/CardCirculo/CardCirculo';
import Botones from '../components/botones/Botones';
import flutter from '../utils/img/flutter.svg';
import '../styles/StylesPages/resumen.css';
const Recursos = () => {
  return (
    <>
      <Header />
      <Materia
      Materia="Matematicas"
      Profesor="Antonio Guzmán"
      Imagen={flutter}/>
      <Botones />
      <CardCirculo />
      <CardCirculo />
      <CardCirculo />
      <CardCirculo />
      <h1 className='h1'>Promedio final: </h1>
    </>
  );
}
export default Recursos;