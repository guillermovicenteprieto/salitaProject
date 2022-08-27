import express from "express";
import {
  getAllPacientes,
  getPaciente,
  createPaciente,
  updatePaciente,
  deletePaciente,
} from "../controllers/pacientesController.js";
const routePacientes = express.Router();

routePacientes.get("/", getAllPacientes);
routePacientes.get("/:id", getPaciente);
routePacientes.post("/", createPaciente);
routePacientes.put("/:id", updatePaciente);
routePacientes.delete("/:id", deletePaciente);

export default routePacientes;