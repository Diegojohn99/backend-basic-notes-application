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
};

//editar una nota
exports.updateNote = async (req,res) =>{
  try{
    const { id } = req.params;
    const { title, content } = req.body;

    //Encuentra y actualiza la nota
    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      {new: true } //devuelve la nueva version de la nota
    );

    if(!updateNote){
      return res.status(404).json({ message: `Nota no encontrada`})
    }

    res.status(200).json(updateNote);
  } catch(error){
    res.status(500).json({message: `Error al actualizar la nota`})
  }
};
