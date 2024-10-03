const express = require('express');
const { createNote, getNotes, deleteNote } = require('../controllers/noteController');

const router = express.Router();

// Ruta para obtener y crear notas
router.route('/')
  .get(getNotes)
  .post(createNote);

// Ruta para eliminar una nota por ID
router.route('/:id')
  .delete(deleteNote);

module.exports = router;
