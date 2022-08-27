import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div>
      <div
        className="container fondo-argentina"
        style={{ marginTop: 20, padding: 20, borderRadius: 20 }}
      >
        <div className="container mt-3 col-sm-8 col-lg-4 col-md-6">
          <h3 className="text-center text-light">REGISTRO</h3>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="p-2 ">
              <form
                className="form"
                action="/registro"
                method="post"
                // role="form"
                autocomplete="off"
                enctype="multipart/form-data"
              >
                <div className="form-group  m-2">
                  <label className="m-1">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Ingrese su nombre"
                    className="form-control"
                    type="text"
                    required
                    autoFocus
                  />
                </div>

                <div className="form-group  m-2">
                  <label className="m-1">Apellido</label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Ingrese su apellido"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group  m-2">
                  <label className="m-1">Dirección</label>
                  <input
                    id="adress"
                    name="adress"
                    placeholder="Ingrese su dirección"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group  m-2">
                  <label className="m-1">Edad</label>
                  <input
                    id="age"
                    name="age"
                    placeholder="Ingrese su edad"
                    className="form-control"
                    type="number"
                    required
                  />
                </div>

                <div className="form-group  m-2">
                  <label className=" m-2">Teléfono</label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="Ingrese su teléfono"
                    className="form-control"
                    type="tel"
                    required
                  />
                </div>

                <div className="form-group  m-2">
                  <label className="m-1">Suba una foto de perfil</label>
                  <input
                    className="form-control"
                    id="image"
                    name="image"
                    type="file"
                  />
                </div>
                <hr className="text-light m-1" />
                <h4 className="form-group  m-3 text-warning">
                  Los siguientes datos se le solicitarán para realizar el LOGIN
                </h4>

                <div className="form-group  m-2">
                  <label className="m-1" for="nombre">
                    Nombre de Usuario
                  </label>
                  <input
                    id="username"
                    name="username"
                    placeholder="Ingrese su nombre de Usuario"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group m-2">
                  <label className="  m-1" for="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    placeholder="Ingrese su email"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>

                <div className="form-group m-2">
                  <label className=" m-1" for="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    placeholder="Ingrese su password"
                    className="form-control"
                    type="password"
                    required
                  />
                </div>

                <div className="container text-center">
                  <input
                    className="btn btn-primary mt-3"
                    type="submit"
                    value="Confirmar"
                  />
                </div>
              </form>
            </div>

            <hr />
            <Link to={`/login`}>
              <button className="btn btn-success m-1">Ir al Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
