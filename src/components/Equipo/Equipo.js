import { useState } from "react";
import Colaborador from "../Colaborador/Colaborador";
import "./Equipo.css";

const Equipo = ({
  equipo,
  colorPrimario,
  colorSecundario,
  colaboradores,
  eliminarColaborador,
  actualizarColor,
  like,
}) => {
  const bg = {
    backgroundColor: colorSecundario,
  };

  const borderBottom = {
    borderBottom: `4px solid ` + colorPrimario,
  };

  const colorInput = (e) => {
    e.preventDefault();
    const color = e.target.value;
    actualizarColor(color, equipo.id);
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={bg}>
          <input
            type="color"
            className="input-color"
            value={colorSecundario}
            onChange={colorInput}
          />
          <h3 style={borderBottom}>{equipo.titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, i) => (
              <Colaborador
                key={i}
                colaborador={colaborador}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
