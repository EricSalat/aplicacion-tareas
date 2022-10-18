import React, { useState } from "react";
import "../hojas-de-estilo/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid"

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

  
  return(
        <form 
          className="tarea-formulario"
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