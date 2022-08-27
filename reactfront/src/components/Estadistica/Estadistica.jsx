import React from "react";

const Estadistica = () => {
  
  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>
      <div className="h3">resumen</div>

      <div className="table-responsive">
        {/* <div className="container"> */}
        <div
          className="row row-cols-1 row-cols-md-3 g-2"
          style={{ padding: 5 }}
        >
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">titulo</h5>
                <p className="card-text">texto a reemplazar</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">titulo</h5>
                <p className="card-text">texto a reemplazar</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">titulo</h5>
                <p className="card-text">texto a reemplazar</p>
              </div>
            </div>
          </div>

          {/* <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">titulo</h5>
                <p className="card-text">texto a reemplazar</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Estadistica;
