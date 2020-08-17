import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FuncComponent from './components/FuncComponent';
import MyComponent from './components/MyComponent';

function App() {
  return (
    // atributos predeterminados de HTML - type, value, src, id, style
    <div className="App" style={{ background: "cornflowerblue"}}>
      {/* 

      <ClassComponent/>
      <FuncComponent movie="Pinocchio" /> 

      */}

      <MyComponent />

      {/*          city="Barcelona" es un prop ( datos que pasamos al MyComponent )  */}
      <MyComponent city="Barcelona" className="my-component"/>
    </div>
  );
}

export default App;


// https://i.imgur.com/v896ecx.jpg
// https://i.imgur.com/ZquC84W.jpg
