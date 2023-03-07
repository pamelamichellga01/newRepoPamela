import React from 'react'

const Card = ({nombre,comidaFavorita}) => {
  return (
    <div >
        <h3>Hola {nombre}!</h3>
        <h3>Tu comida favorita es:</h3>
        <h3>{comidaFavorita}</h3>
    </div>
  )
}

export default Card