import "./ListaOpciones.css";

const ListaOpciones = ({
  nombreInput,
  placeHolder,
  valor,
  actualizarValor,
  equipos,
}) => {
  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>{nombreInput}</label>
      <select value={valor} placeholder={placeHolder} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo...
        </option>

        {equipos.map((equipo, i) => (
          <option key={i} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
