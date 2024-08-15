import React, { useState } from 'react'
import FormRegistro from "../Styles/Formulario.module.css"
import Card from './Card'
import { validarEmail, validarPelicula, validarUsuario } from '../utils/validations'

const Form = () => {
  const [customer, setCustomer] = useState({
    peliculaFav: "",
    nombreCompleto: "",
    email: ""
  })

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();

    const isMovieValid = validarPelicula(customer.peliculaFav);
    const isNameValid = validarUsuario(customer.nombreCompleto);
    const isEmailValid = validarEmail(customer.email);

    if (isMovieValid && isNameValid && isEmailValid) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSumbit} className={FormRegistro.formCss}>
        <label>Pelicula favorita:</label>
        <input 
          type="text" 
          name='peliculaFav'
          placeholder='Ingresa tu pelicula favorita'
          value={customer.peliculaFav}
          onChange={handleChange} 
          className={FormRegistro.inputCss} />
        <label >Nombre y apellido:</label>
        <input 
          type="text" 
          name='nombreCompleto'
          placeholder='Ingresa tu nombre'
          value={customer.nombreCompleto}
          onChange={handleChange} 
          className={FormRegistro.inputCss} />
        <label>Email:</label>
        <input 
          type="email" 
          name='email'
          placeholder='Ingresa un correo electrónico'
          value={customer.email}
          onChange={handleChange} 
          className={FormRegistro.inputCss} />
        <button>Registrarse</button>
      </form>

      {submitted && !error && (
        <Card data={customer} />
      )}

      {error && (
        <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}
    </>
  )
}

export default Form;