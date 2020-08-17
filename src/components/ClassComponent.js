// componente de clase nos permite guardar un estado - tiene `state`
// puede recibir datos desde fuera - por los `props`

import React, { Component } from 'react';
// el atajo para crear el componente de clase - rcc + Tab

class ClassComponent extends Component {
  // `state` - es un objeto que nos permite tener datos privados que pertenecen solo a este componente 
  state = {
    name: 'Pepito',
    age: 26,
    img: 'https://pickaface.net/gallery/avatar/20130325_120204_3808_pepito.png'
  }
  // se puede mostrar y actualizar (con this.setState() )

  // el metodo render es obligatorio en los componentes de clase
  // los valores devueltos del return del render son elementos/componentes JSX
  render() {
    return(
      <div>
        <img src={this.state.img} alt="avatar of pepito"/>
        <p> Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    )
  }

}
export default ClassComponent;