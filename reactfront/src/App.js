import "./App.css";
import Modal from "react-modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MenuVer from "./components/Menu/MenuVer";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import Estadistica from "./components/Estadistica/Estadistica";
import ListPacientes from "./components/Pacientes/ListPacientes";
import EditPacientes from "./components/Pacientes/EditPacientes";
import Paciente from "./components/Pacientes/Paciente";
import CrearPacientes from "./components/Pacientes/CrearPaciente";
import Medicos from "./components/Medicos/Medicos";
import Administrativos from "./components/Administrativos/Administrativos";
import Calendario from "./components/Calendario/Calendario";
Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <MenuVer />
        <Routes>
          <Route path="/" element={<ListPacientes />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registro" element={<Registro />} />
          <Route path="/listar" element={<ListPacientes />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route exact path="/estadistica" element={<Estadistica />} />
          <Route exact path="/medicos" element={<Medicos />} />
          <Route exact path="/administrativos" element={<Administrativos />} />
          <Route path="/editar/:id" element={<EditPacientes />} />
          <Route path="/ver/:id" element={<Paciente />} />
          <Route path="/eliminar/:id" element={<Paciente />} />
          <Route path="/crear" element={<CrearPacientes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
