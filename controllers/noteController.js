const Note = require('../models/noteModel');

// Crear una nota
exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
};

// Obtener todas las notas
exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

// Eliminar una nota
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.status(204).end();
};// Luis Alberto Zambrana 
