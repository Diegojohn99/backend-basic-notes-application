const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api/notes', noteRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


