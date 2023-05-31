import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = ({
  nombreInput,
  placeHolder,
  required,
  valor,
  actualizarValor,
  type = "text",
}) => {
  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

 
  return (
    <div className={`campo campo-${type}`}>
      <label>{nombreInput}</label>
      <input
        type={type}
        placeholder={placeHolder}
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default CampoTexto;
