import express from "express";
import {
    createEvent,
    getEvents
} from "../controllers/calendarController.js";

const routeCalendar = express.Router();

routeCalendar.post("/", createEvent);
routeCalendar.get("/", getEvents);

export default routeCalendar;

