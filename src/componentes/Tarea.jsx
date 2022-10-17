import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    //Si la tarea está completada (el prop completada es true), se asignan2 clases. Si es false, solo 1.
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-iconos">
      </div>
      <AiOutlineCloseCircle 
        className="tarea-icono"
      />
    </div>
  );
}

export default Tarea;
