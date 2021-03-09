import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import sigin from '../utils/img/sigin.svg';
import "../styles/StylesPages/sigin.css";
const SignIn = () => {
  const { handleSubmit, errors, register } = useForm()
  const submitForm = (data) => {
    console.log(data)
    document.location.href = '/home/curso';
  }
  const [datos, setDatos] = useState({
    username: "",
    password: ""
  })
  const handleChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <Link to='/home' type='button'><FaArrowLeft className='FaArrowleftSignin'/></Link>
      <figure className="figure">
        <img src={sigin} alt="imagen de signin"/>
      </figure>
      <span className='welcome'>Bienvenido</span>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="">
          <FaUser className="icon"/>
          <input
          name='username'
          id='username'
          onChange={handleChange}
          type="text"
          placeholder="username"
          ref={register({
            required: 'El nombre de usuario es requerido',
            minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
          })}
          />
        </label>
        <span className="is-danger">{ errors.username && errors.username.message }</span>
        <label htmlFor="">
          <FaUnlock className="icon"/>
          <input
          name='password'
          id='password'
          onChange={handleChange}
          type="text"
          placeholder="Contraseña"
          ref={register({
            required: 'La contraseña de usuario es requerido',
            minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
          })}
          />
        </label>
        <span className="is-danger">{ errors.password && errors.password.message }</span>
        <button className="btn" type="submit">Iniciar Sesión</button>
      </form>
      <div className="Social">
        <FaFacebook className="Socials"/>
        <FaGoogle className="Socials"/>
        <FaTwitter className="Socials"/>
      </div>
      <p className="Signup">¿No tienes cuenta?</p>
    </>
  );
}
export default SignIn;