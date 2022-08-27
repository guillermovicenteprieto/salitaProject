import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/pacientes";

const EditPacientes = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDNI] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail]  = useState("");
  const [nacimiento, setNacimiento] = useState("")
  const [barrio, setBarrio] = useState("");
  const [cargo, setCargo] = useState("");
  const [art, setArt] = useState("");
  const [enfermedades, setEnfermedades] = useState("");
  const [alergias, setAlergias] = useState("");
  const [consulta, setConsulta] = useState("");

  const navigate = useNavigate();
  //procedimiento editar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${URI}/${id}`, {
      nombre,
      apellido,
      dni,
      direccion,
      telefono, 
      mail,
      nacimiento,
      barrio,
      cargo,
      art,
      enfermedades,
      alergias,
      consulta,
    });
    navigate("/");
  };
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
      setCargo(response.data.cargo);
      setArt(response.data.art);
      setEnfermedades(response.data.enfermedades);
      setAlergias(response.data.alergias);
      setConsulta(response.data.consulta);
    });
  }, [id]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <h4> Editar Paciente - Consultas</h4>
          <form onSubmit={update}>
            <div className="form-group mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">DNI</label>
              <input
                type="text"
                className="form-control"
                value={dni}
                onChange={(e) => setDNI(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>


            <div className="form-group mb-3">
              <label className="form-label">Correo</label>
              <input
                type="text"
                className="form-control"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Fecha de nacimiento</label>
              <input
                type="text"
                className="form-control"
                value={nacimiento}
                onChange={(e) => setNacimiento(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Barrio</label>
              <input
                type="text"
                className="form-control"
                value={barrio}
                onChange={(e) => setBarrio(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label"> Cargo</label>
              <input
                type="text"
                className="form-control"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Art</label>
              <input
                type="text"
                className="form-control"
                value={art}
                onChange={(e) => setArt(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Enfermedades</label>
              <input
                type="text"
                className="form-control"
                value={enfermedades}
                onChange={(e) => setEnfermedades(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Alergias</label>
              <input
                type="text"
                className="form-control"
                value={alergias}
                onChange={(e) => setAlergias(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Consulta</label>
              <textarea
                type="text"
                className="form-control"
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary m-3">
              Editar
            </button>
          </form>

          <Link to={`/`}>
            <button className="btn btn-success m-3">
              <i className="fas fa-home"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditPacientes;
