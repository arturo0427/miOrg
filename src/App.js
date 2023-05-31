import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";
import hexToRgba from "hex-to-rgba";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Arturo Muñoz",
      puesto: "Desarrollador",
      foto: "https://github.com/arturo0427.png",
      equipo: "Front End",
      fav: true,
    },
    {
      id: uuid(),
      nombre: "Pedro López",
      puesto: "Desarrollador",
      foto: "https://github.com/arturo0427.png",
      equipo: "DevOps",
      fav: false,
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id != id
    );
    setColaboradores(nuevosColaboradores);
  };

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorSecundario = hexToRgba(color, 0.25);
        equipo.colorPrimario = hexToRgba(color, 0.6);
      }

      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  //Like
  const like = (id) => {
    
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id == id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });

    setColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo, i) => {
        return (
          <Equipo
            key={i}
            equipo={equipo}
            colorPrimario={equipo.colorPrimario}
            colorSecundario={equipo.colorSecundario}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        );
      })}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
