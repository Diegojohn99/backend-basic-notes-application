const express = require('express');
const { createNote, getNotes, deleteNote, updateNote } = require('../controllers/noteController');

const router = express.Router();

// Ruta para obtener y crear notas
router.route('/')
  .get(getNotes)
  .post(createNote);

// Ruta para eliminar y editar una nota por ID
router.route('/:id')
  .delete(deleteNote)
  .put(updateNote);

module.exports = router;
