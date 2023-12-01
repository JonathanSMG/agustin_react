
import React, { useState, useEffect } from 'react';

export const DifusionForm = ({ onSubmit, onClose }) => {
  const initialDifusionData = {
    tituloDifusion: '',
    mediosDifusion: '',
  };

  const [difusionData, setDifusionData] = useState({ ...initialDifusionData });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDifusionData({
      ...difusionData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener las difusiones existentes del localStorage
    const storedDifusiones = JSON.parse(localStorage.getItem('difusionData')) || [];

    // Agregar la nueva difusión a la lista
    storedDifusiones.push(difusionData);

    // Actualizar el localStorage con la lista actualizada de difusiones
    localStorage.setItem('difusionData', JSON.stringify(storedDifusiones));

    // Llamar a la función onSubmit con los datos de la difusión
    onSubmit(difusionData);

    // Limpiar el formulario después de enviar
    setDifusionData({ ...initialDifusionData });
  };

  return (
    <div id="formulario-difusion" className="contenido">
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario de difusión */}
        <label htmlFor="tituloDifusion">Título de la Difusión:</label>
        <input
          type="text"
          id="tituloDifusion"
          name="tituloDifusion"
          value={difusionData.tituloDifusion}
          onChange={handleChange}
          required
        />

        <label htmlFor="mediosDifusion">Medios de Difusión:</label>
        <textarea
          id="mediosDifusion"
          name="mediosDifusion"
          value={difusionData.mediosDifusion}
          onChange={handleChange}
          required
        ></textarea>

        <div className="form-buttons">
          <button id="registro-alumnos" type="submit">GENERAR DIFUSIÓN</button>
        </div>
      </form>
    </div>
  );
};
