import PacientesModel from "../models/PacientesModel.js";

export const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await PacientesModel.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaciente = async (req, res) => {
  try {
    const paciente = await PacientesModel.findByPk(req.params.id);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPaciente = async (req, res) => {
  try {
    const paciente = await PacientesModel.create(req.body);
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePaciente = async (req, res) => {
  try {
    const paciente = await PacientesModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ paciente });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePaciente = async (req, res) => {
  try {
    const paciente = await PacientesModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ paciente });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
