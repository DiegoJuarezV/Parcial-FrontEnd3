import React from 'react'
import CardBienvenida from '../Styles/Card.module.css'

const Card = ( {data} ) => {
  
  return (
    <section className={CardBienvenida.sectionCard}>
      <h3>Hola, Bienvenido {data.nombreCompleto}</h3>
      <h4>Su pelicula favorita es {data.peliculaFav}</h4>
    </section>
  )
}

export default Card;