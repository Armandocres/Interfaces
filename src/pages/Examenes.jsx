import React from 'react'
import Header from '../components/header/Header';
import Materia from '../components/Materia/Materia';
import ExamenesStads from '../components/Examenes/ExamenesStads';
import CardCirculo from '../components/CardCirculo/CardCirculo';
import Botones from '../components/botones/Botones';
import flutter from '../utils/img/flutter.svg';
import "../styles/StylesPages/examenes.css";
const Examenes = () => {
  return (
    <>
      <Header />
      <Materia
      Materia="Matematicas"
      Profesor="Antonio Guzmán"
      Imagen={flutter}/>
      <Botones />
      <div className='ContainerExamenes'>
        <ExamenesStads />
        <ExamenesStads />
        <ExamenesStads />
        <ExamenesStads />
      </div>
      <CardCirculo />
    </>
  );
}
export default Examenes;