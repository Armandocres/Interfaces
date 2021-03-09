import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import ReactDOM from 'react-dom';
import { FaUnlock } from "react-icons/fa";
import { FaTools } from 'react-icons/fa';
import "./modal.css";
const Modal = (props) => {
  const { handleSubmit, errors, register } = useForm()
  const submitForm = (data) => {
    console.log(data)
  }
  const [datos, setDatos] = useState({
    curso: "",
    password: ""
  })
  const handleChange = (event) =>{
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  if(!props.isOpen){
    return null;
  }
  return (
    ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal_container'>
        <button onClick={props.onClose} className='RegresaModal' type="button">x</button>
        <form className="formularioModal" onSubmit={handleSubmit(submitForm)}>
          <p className='DatosModal'>Incripcion a Curso</p>
          <p>Digita la clave y cointraseña del curso</p>
            <label htmlFor="">
              <FaTools className="iconModal"/>
              <input
              name="curso"
              id='curso'
              onChange={handleChange}
              type="text"
              placeholder="Clave del curso"
              ref={register({
                required: 'La clave del grupo es requerido',
                minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
              })}
              />
            </label>
            <span className="is-dangerModal">{ errors.curso && errors.curso.message }</span>
            <label htmlFor="">
              <FaUnlock className="iconModal"/>
              <input
              name="password"
              type="text"
              onChange={handleChange}
              placeholder="Contraseña del curso"
              id='password'
              ref={register({
                required: 'La contraseña de usuario es requerido',
                minLength: { value: 5, message: 'Ingresa al menos 5 carácteres' }
              })}
              />
            </label>
            <span className="is-dangerModal">{ errors.password && errors.password.message }</span>
            <Link to='/home/curso' className="buttonModal" type="button">Inscribirse</Link>
            <p className='ParrafoModal'>Si no tines clave o contraseña ponte en contacto con tu profesore</p>
          </form>
          {props.children}
      </div>
    </div>, document.getElementById('modal'))
  );
}
export default Modal;