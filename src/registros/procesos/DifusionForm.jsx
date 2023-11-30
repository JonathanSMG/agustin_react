
import React, { useState, useEffect } from 'react';

export const DifusionForm = ({ onSubmit, onClose }) => {
  const initialDifusionData = {
    tituloDifusion: '',
    mediosDifusion: '',
    // Puedes agregar otros campos según sea necesario
  };

  const [difusionData, setDifusionData] = useState({ ...initialDifusionData });

  useEffect(() => {
    // Guardar datos en localStorage cuando difusionData cambie
    localStorage.setItem('difusionFormData', JSON.stringify(difusionData));
  }, [difusionData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDifusionData({
      ...difusionData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función onSubmit con los datos de la difusión
    onSubmit(difusionData);
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
