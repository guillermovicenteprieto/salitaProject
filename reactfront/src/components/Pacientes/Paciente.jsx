import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/pacientes";

const Paciente = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail]  = useState("");
  const [nacimiento, setNacimiento] = useState("")
  const [barrio, setBarrio] = useState("");
  // const [cargo, setCargo] = useState("");
  const [art, setArt] = useState("");
  const [enfermedades, setEnfermedades] = useState("");
  const [alergias, setAlergias] = useState("");
  const [consulta, setConsulta] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    axios.get(`${URI}/${id}`).then((response) => {
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setDNI(response.data.dni);
      setDireccion(response.data.direccion);
      setTelefono(response.data.telefono);
      setMail(response.data.mail);
      setNacimiento(response.data.nacimiento)
      setBarrio(response.data.barrio);
      // setCargo(response.data.cargo);
      setArt(response.data.art);
      setEnfermedades(response.data.enfermedades);
      setAlergias(response.data.alergias);
      setConsulta(response.data.consulta);
      setAvatar(response.data.avatar);
    });
  }, [id]);

  return (
    <Box>
      <Box>
        <Avatar src={avatar} />
      </Box>
      <Box>
        <h4>
        Nombre y Apellido: {nombre} {apellido}
        </h4>
      </Box>
      <Box>
        <h4>DNI: {dni}</h4>
      </Box>
      <Box>
        <h4>Dirección: {direccion}</h4>
      </Box>
      <Box>
        <h4>Teléfono:{telefono}</h4>
      </Box>
      <Box>
        <h4>Correo: {mail}</h4>
      </Box>
      <Box>
        <h4>Fecha de Nacimiento: {nacimiento}</h4>
      </Box>
      <Box>
        <h4>Barrio: {barrio}</h4>
      </Box>
      {/* <Box>
        <h4>Cargo: {cargo}</h4>
      </Box> */}
      <Box>
        <h4>ART: {art}</h4>
      </Box>
      <Box>
        <h4>Enfermedades: {enfermedades}</h4>
      </Box>
      <Box>
        <h4>Alergias: {alergias}</h4>
      </Box>
      <Box>
        <h4>Consultas: {consulta}</h4>
      </Box>

      <Box>
        <Link to={`/editar/${id}`}>
          <button className="btn btn-info mt-3">
            <i className="fas fa-edit"></i>
          </button>
        </Link>
      </Box>
      <hr />
      <Link to={`/`}>
        <button className="btn btn-success m-3">
          <i className="fas fa-home"></i>
        </button>
      </Link>
    </Box>
  );
};

export default Paciente;
