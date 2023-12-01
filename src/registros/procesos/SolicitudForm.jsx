import React, { useState, useEffect } from 'react';

export const SolicitudForm = ({ onSubmit, onClose }) => {
  const initialSolicitudData = {
    tipoSolicitud: '',
    descripcion: '',
    adjunto: null,
  };

  const [solicitudData, setSolicitudData] = useState({ ...initialSolicitudData });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Si el campo es de tipo archivo, manejarlo de manera especial
    const fieldValue = type === 'file' ? files[0] : value;

    setSolicitudData({
      ...solicitudData,
      [name]: fieldValue,
    });
  };

  const handleFileUpload = () => {
    // Simular la subida del archivo (puedes ajustar esto según tus necesidades)
    console.log('Simulando subida del archivo:', solicitudData.adjunto?.name);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Modificar el valor de adjunto para que siempre sea un enlace de Google
  const solicitudConEnlace = {
    ...solicitudData,
    adjunto: 'https://www.google.com', // Cambia esto según tu necesidad
  };

  // Obtener las solicitudes existentes del localStorage
  const storedSolicitudes = JSON.parse(localStorage.getItem('solicitudFormData')) || [];

  // Agregar la nueva solicitud a la lista
  storedSolicitudes.push(solicitudConEnlace);

  // Actualizar el localStorage con la lista actualizada de solicitudes
  localStorage.setItem('solicitudFormData', JSON.stringify(storedSolicitudes));

  // Llamar a la función onSubmit con los datos de la solicitud
  onSubmit(solicitudConEnlace);

  // Subir el archivo adjunto simulado
  handleFileUpload();

  // Limpiar el formulario después de enviar
  setSolicitudData({ ...initialSolicitudData });
};

  return (
    <div id="formulario-solicitudes" className="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="tipoSolicitud">Tipo de Solicitud:</label>
        <input
          type="text"
          id="tipoSolicitud"
          name="tipoSolicitud"
          value={solicitudData.tipoSolicitud}
          onChange={handleChange}
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={solicitudData.descripcion}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="adjunto">Adjunto:</label>
        <input
          type="file"
          id="adjunto"
          name="adjunto"
          onChange={handleChange}
          required
        />

        <div className="form-buttons">
          <button id="registro-alumnos" type="submit">GENERAR</button>
        </div>
      </form>
    </div>
  );
};
