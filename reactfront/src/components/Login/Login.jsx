import {  useState } from "react";
import { Link } from "react-router-dom";
import MenuVer from "../Menu/MenuVer";

const Login = () => {
  const [login, setLogin] = useState("false")
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function inicioSesion(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (user.length === 0 || email.length === 0 || pass.length === 0) {
      alert("Complete sus datos por favor");
    } else {
      if (user === "admin" && email === "123@123.net" && pass === "123") {
        setLogin("true")
        document.getElementById("formLogin").style.display="none"
      } else {
        setLogin("false")
        alert("Error de usuario, correo  o contraseña")
        document.getElementById("user").value = ""
        document.getElementById("email").value = ""
        document.getElementById("pass").value = ""
        document.getElementById("user").focus();
      }
    }
  }

  return (
    <div
      className="container fondo-argentina" 
      style={{ marginTop: 20, padding: 20, borderRadius: 20 }}
    >
      <div className="p-1">
        <div className="p-1">
          <div className="container mt-3 col-sm-8 col-lg-4 col-md-6" id="formLogin">
            <h3 className="text-center text-light">LOGIN</h3>
            <div className="p-1 ">
              <form action="/login" method="POST" id="form_login">
              {/* <form  id="form_login"> */}
                <div className="form-group m-2">
                  <label className="m-1" for="nombre">
                    Nombre
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Ingrese su nombre de Usuario"
                    onChange={(e) => setUser(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-group m-2">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Ingrese su email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group m-2">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Ingrese su password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="container text-center">
                {/* <button type="submit" className="btn btn-success mt-3 p-2">
                    Ingresar
                  </button> */}
                  <button type="submit" className="btn btn-success mt-3 p-2" onClick={inicioSesion}>
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="container text-center">
              <h6 className="text-center">
                Debe registrarse para poder acceder
              </h6>
              <Link to={`/registro`}>
                <button className="btn btn-primary m-1">Ir al Registro</button>
              </Link>
            </div>
          </div>
            {
              //si login true: se muestra menú y con la prop user para usar en Menú
              login ==="true" && <MenuVer user={user}/>
            }
        </div>
      </div>
    </div>
  );
};

export default Login;
