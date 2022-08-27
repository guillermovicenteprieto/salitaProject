import React from "react";
import { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react/";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEventModal from "./AddEventModal";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";

const URI = "http://localhost:8000/calendario";

const Calendario = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [events, setEvents] = useState([]);

  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent({
      start: moment(event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title,
    });
  };

  async function handleEventAdd(data) {
    // await axios.post("/calendario/createEvent", data.event);
    await axios.post(URI, data.event);
  }

  async function handleDatesSet(data) {
    const response = await axios.get(
      URI
      // moment(data.start).toISOString() + "&end=" + moment(data.end).toISOString()
    );
    setEvents(response.data);
  }

  return (
    <div className="container">
      <button
        className="btn btn-success mt-3"
        onClick={() => setModalIsOpen(true)}
      >
        Agregar turno
      </button>

      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          locale={"es"}
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          editable={true}
          initialView="dayGridMonth"
          eventAdd={(event) => handleEventAdd(event)}
          datesSet={(date) => handleDatesSet(date)}
        />
      </div>

      <AddEventModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        onEventAdded={(event) => {
          onEventAdded(event);
        }}
      />
    </div>
  );
};

export default Calendario;
