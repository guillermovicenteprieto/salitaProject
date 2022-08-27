import axios from "axios";
import { useEffect, useState } from "react";

const URI = "http://localhost:8000/pacientes";

const BuscarPaciente = async () => {
  const [pacientes, setPacientes] = useState([]);
  useEffect(() => {
    getAllPacientes();
  }
  , []);

  const getAllPacientes = async () => {
    const response = await axios.get(URI);
    setPacientes(response.data);
  }
  
  return (
    <div className="container">
      <h1>Paciente</h1>
      </div>
  );
};

export default BuscarPaciente;
