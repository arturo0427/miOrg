import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import React from "react";

const Colaborador = ({
  colaborador,
  equipo,
  colorPrimario,
  eliminarColaborador,
  id,
  like,
}) => {
  // https://github.com/arturo0427.png

  
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="eliminar"
        onClick={() => eliminarColaborador(colaborador.id)}
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={colaborador.foto} alt="Imagen" />
      </div>
      <div className="info">
        <h4>{colaborador.nombre}</h4>
        <h5>{colaborador.puesto}</h5>

        {colaborador.fav ? (
          <AiFillHeart
            onClick={() => {
              like(colaborador.id);
            }}
            color="red"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              like(colaborador.id);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
