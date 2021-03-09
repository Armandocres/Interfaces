import React from 'react'
import Header from '../components/header/Header';
import Materia from '../components/Materia/Materia';
import CardDatos from '../components/CardDatos/CarDatos';
import Botones from '../components/botones/Botones';
import flutter from '../utils/img/flutter.svg';
const Informacion = () => {
  return (
    <>
      <Header />
      <Materia
      Materia="Matematicas"
      Profesor="Antonio Guzmán"
      Imagen={flutter}/>
      <Botones />
      <CardDatos
      Curso="Matematicas"
      Clave="12345"
      Profesor="Antonio Guzmán"
      />
      </>
  );
}
export default Informacion;