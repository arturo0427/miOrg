import { useState } from "react";
import BotonCrear from "../BotonCrear/BotonCrear";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./Formulario.css";
import { v4 as uuid } from "uuid";

const Formulario = ({ registrarColaborador, equipos, crearEquipo }) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoFormulario = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto
          nombreInput="Nombre"
          placeHolder="Ingresar Nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <CampoTexto
          nombreInput="Puesto"
          placeHolder="Ingresar Puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <CampoTexto
          nombreInput="Foto"
          placeHolder="Ej: https://github.com/arturo0427.png"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones
          nombreInput="Equipo"
          placeHolder="Seleccionar Equipo"
          valor={equipo}
          actualizarValor={setEquipo}
          equipos={equipos}
        />
        <BotonCrear botonNombre="Crear" />
      </form>

      <form onSubmit={manejarNuevoFormulario}>
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <CampoTexto
          nombreInput="Titulo"
          placeHolder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <CampoTexto
        type="color"
          nombreInput="Color"
          placeHolder="Ingresar el color en formato Hex"
          required
          valor={color}
          actualizarValor={setColor}
        />
        <BotonCrear botonNombre="Registrar equipo" />
      </form>
    </section>
  );
};

export default Formulario;
