const express = require('express');
const mongoose = require('./db'); // Asegúrate de importar tu archivo de configuración de Mongoose
const Entrada = require('./models/Entrada');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/entradas', upload.single('imagen'), async (req, res) => {
  const nuevaEntrada = new Entrada({
    titulo: req.body.titulo,
    imagen: `/uploads/${req.file.filename}`,
    texto: req.body.texto,
    seccion: req.body.seccion,
  });

  try {
    await nuevaEntrada.save();
    res.status(201).send(nuevaEntrada);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});
