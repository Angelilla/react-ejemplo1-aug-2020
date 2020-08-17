import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'Sarah'
  }

  render() {
    console.log(this.props);
    

    return(
      <div> 
        <p> Hello {this.state.name}  </p>
        <p>Welcome to {this.props.city} </p>
      </div>
    );
  }
}

export default MyComponent;


// Cada componente de React es un objeto. Cada componente de clase de React tiene dos 
// objetos mas dentro - el objeto `state` y `props`