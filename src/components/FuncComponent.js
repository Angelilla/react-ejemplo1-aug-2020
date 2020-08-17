// el atajo rfce

import React from 'react';

// El componente funcional puede recibir `props` (datos desde fuera)
// Otros componentes pueden inyectar datos
function FuncComponent(props) {

  // Los valores devueltos del return son lo que componente muestra
  return (
    <div>
      <h2>Peliculas Favoritas</h2>
      <h4> PROPS: {props.movie} </h4>
      <ul>
        <li>Guardians of the galaxy</li>
        <li>The Warrios</li>
        <li>Inception</li>
      </ul>
    </div>
  )
}

export default FuncComponent;
