import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUser } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import sigup from '../utils/img/join.svg';
import "../styles/StylesPages/sigin.css";
const SignUp = () => {
  const { handleSubmit, errors, register } = useForm()
  const submitForm = (data) => {
    console.log(data)
    document.location.href = '/home/curso';
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [datos, setDatos] = useState({
    username: "",
    email: "",
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
        <img src={sigup} alt=""/>
      </figure>
      <span className='welcome'>Bienvenido</span>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <label htmlFor="">
          <FaUser className="icon"/>
          <input
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
          value={datos.username}
          ref={register({
            required: 'El nombre de usuario es requerido',
            minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
          })}
          />
        </label>
        <span className="is-danger">{ errors.username && errors.username.message }</span>
        <label htmlFor="">
          <FaEnvelope className="icon"/>
          <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={datos.email}
          ref={register({
            required: 'El e-mail es requerido',
            pattern: { value: /^\S+@\S+$/i, message: 'El e-mail no es valido'}
          })}
          />
        </label>
        <span className="is-danger">{ errors.email && errors.email.message }</span>
        <label htmlFor="">
          <input
          name="password"
          type={passwordShown ? "text" : "password"}
          placeholder="Contraseña"
          onChange={handleChange}
          value={datos.password}
          ref={register({
            required: 'La contraseña de usuario es requerido',
            minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
          })}
          />
        <i onClick={togglePasswordVisiblity}><FaUnlock /></i>
        </label>
        <span className="is-danger">{ errors.email && errors.email.message }</span>
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
export default SignUp;