import React from 'react';
import Header from '../components/header/Header';
import CardDescription from '../components/CardDesc/CardDescription';
import CardCurso from '../components/CardCursos/CardCursos';
import Footer from '../components/footer/Footer';
import curso from '../utils/img/materia.svg';
import house from '../utils/img/house.svg';
import nuxt from '../utils/img/nuxt.svg';
import data from '../utils/img/data.svg';
import flutter from '../utils/img/flutter.svg';
import interfaz from '../utils/img/interfaces.svg';
import "../styles/StylesPages/curso.css";
const Cursos = () => {
  return (
    <>
      <Header />
      <CardDescription className='desc'
      dias="30"
      fecha="01/01/2021"
      duracion="30"
      />
      <h3>Mis cursos</h3>
      <div className='Cursos__grid'>
        <CardCurso
        materia="Matematicas"
        cali="10.00"
        curso={curso}
        />
        <CardCurso
        materia="Español"
        cali="7.9"
        curso={house}
        />
        <CardCurso
        materia="Computación"
        cali="8.9"
        curso={nuxt}
        />
        <CardCurso
        materia="Historia"
        cali="6.9"
        curso={data}
        />
        <CardCurso
        materia="Quimica"
        cali="4.9"
        curso={flutter}
        />
        <CardCurso
        materia="Ingles"
        cali="2.9"
        curso={interfaz}
        />
      </div>
        <Footer />
    </>
  );
}
export default Cursos;