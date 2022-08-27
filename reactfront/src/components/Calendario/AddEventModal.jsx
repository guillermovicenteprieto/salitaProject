import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import moment from "moment";
import "moment/locale/es";
import { useState } from "react";

export default function ({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Apellido"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div>
          <label>Fecha y Hora</label>
          <Datetime locale="es" value={start} onChange={(date) => setStart(date)} />
        </div>

        {/* <div>
            <label>End Date</label>
            <Datetime value={end} onChange={date => setEnd(date)} />
        </div> */}

        <button className="btn btn-success mt-1">Agregar turno</button>
      </form>
    </Modal>
  );
}
