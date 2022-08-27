import React from "react";

const Medicos = () => {
  return (
    <div style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">Administrativos</div>

      <div >

        <div
          className="col-md-12"
          style={{ padding: 5 }}
        >
          <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apellido</h5>
                <p className="card-text">Teléfono</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div>

          <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apellido</h5>
                <p className="card-text">Teléfono</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div>

          <div className="col m-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Apellido</h5>
                <p className="card-text">Teléfono</p>
                <p className="card-text">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicos;
