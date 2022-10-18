import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { useLocalStorage } from "../useLocalStorage";
import { v4 as uuidv4 } from "uuid"
import "../hojas-de-estilo/TareaFormulario.css";

function TareaFormulario(props) {
  
  const [input, setInput] = useState("");

  
  const manejarCambio = e => {
    setInput(e.target.value)
  };
  
  const manejarEnvio = e => {
    
    //Para que el formulario no vuelva a cargar la página al enviarlo:
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    //Que se pase la tarea Nueva cuando se active el prop OnSubmit
    props.onSubmit(tareaNueva);
  };

  //Configuramos el LocalStorage
  
  const [text, setText] = useLocalStorage("text", "")
  
  return(
        <form 
          className="tarea-formulario"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onSubmit={manejarEnvio}>
            <input
              className="tarea-input"
              type="text"
              placeholder="Escribe una Tarea"
              name="texto"
              onChange={manejarCambio}
            />
            <button 
              className="tarea-boton"
              // onClick={agregarTarea}
              >
              Agregar tarea
            </button>
        </form>    
    );
}

export default TareaFormulario;