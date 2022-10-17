import React from 'react';
import './App.css';
import LogoFreeCodeCamp from './componentes/LogoFreeCodeCamp';
import Tarea from "./componentes/Tarea";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCodeCamp />
      <div className="tareas-lista-principal">
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
      {/* <Tarea 
        texto="Aprender React"

        /> */}
    </div>
    </div>
  );
}

export default App;
