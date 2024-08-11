import React, { useState } from 'react';
import axios from 'axios';

const Administracion = () => {
  const [titulo, setTitulo] = useState('');
  const [imagen, setImagen] = useState(null);
  const [texto, setTexto] = useState('');
  const [seccion, setSeccion] = useState('news');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('imagen', imagen);
    formData.append('texto', texto);
    formData.append('seccion', seccion);

    try {
      await axios.post('http://tu-api-url.com/entradas', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Entrada creada exitosamente');
    } catch (error) {
      console.error('Error al crear la entrada:', error);
      alert('Hubo un error al crear la entrada');
    }
  };

  return (
    <div className="admin-container">
      <h1>Panel de Administración</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label>Texto</label>
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Sección</label>
          <select value={seccion} onChange={(e) => setSeccion(e.target.value)}>
            <option value="news">Noticias</option>
            <option value="health">Salud</option>
            <option value="trips">Viajes</option>
            <option value="workshops">Talleres</option>
            <option value="benefits">Beneficios</option>
          </select>
        </div>
        <button type="submit">Crear Entrada</button>
      </form>
    </div>
  );
};

export default Administracion;
