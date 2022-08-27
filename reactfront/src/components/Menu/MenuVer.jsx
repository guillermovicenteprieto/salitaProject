import { Link } from "react-router-dom";

const MenuVer = (props) => {
  return (
    <div>
      <div id="caja_menu" style={{ textAlign: "left" }}>
        <nav className="navbar navbar-expand-lg navbar-light fondo-argentina">
          <div className="container">
            <label className="navbar-brand h5 text-light">
              {" "}
              App Consultorio Salita{" "}
            </label>

            <button
              className="navbar-toggler text-primary bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              arial-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  to="/login"
                  className="nav-link h5 text-center text-light"
                >
                  Login
                </Link>

                <Link
                  to="/registro"
                  className="nav-link h5 text-center text-light"
                >
                  Registro
                </Link>

                <Link
                  to="/listar"
                  className="nav-link h5 text-center text-light"
                >
                  Pacientes
                </Link>

                <Link
                  to="/calendario"
                  className="nav-link h5 text-center text-light"
                >
                  Turnos
                </Link>

                {/* <Link
                  to="/estadistica"
                  className="nav-link h5 text-center text-light"
                  //onClick={f_estadistica}
                >
                  Estadística
                </Link> */}

                <Link
                  to="/medicos"
                  className="nav-link h5 text-center text-light"
                >
                  Médicos
                </Link>

                <Link
                  to="/administrativos"
                  className="nav-link h5 text-center text-light"
                >
                  Administrativos
                </Link>

                <Link
                  to="/login"
                  className="nav-link h5 text-center text-light"
                  // style={{ color: "blue" }}
                  //onClick={cerrarSesion}
                >
                  Cerrar sesión
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuVer;
