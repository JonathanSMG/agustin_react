import React, { useState } from 'react';

export const AsignaturaForm = ({ onSubmit, onClose }) => {
  const initialFormData = {
    nombre: '',
    codigo: '',
    creditos: '',
    horas: '',
    profesor: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.nombre || !formData.codigo || !formData.creditos || !formData.horas || !formData.profesor) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    // Guardar en localStorage
    const asignaturaData = { ...formData };
    const storedAsignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    storedAsignaturas.push(asignaturaData);
    localStorage.setItem('asignaturas', JSON.stringify(storedAsignaturas));

    // Limpiar el formulario
    setFormData({ ...initialFormData });

    // Mostrar alerta de registro exitoso
    alert('Registro de asignatura realizado correctamente.');

    // Cerrar el formulario
    onClose();
  };

  return (
    <div id="formulario-asignaturas" className="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre de la Asignatura:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

        <label htmlFor="codigo">Código de la Asignatura:</label>
        <input type="text" id="codigo" name="codigo" value={formData.codigo} onChange={handleInputChange} required />

        <label htmlFor="creditos">Créditos:</label>
        <input type="number" id="creditos" name="creditos" value={formData.creditos} onChange={handleInputChange} required />

        <label htmlFor="horas">Horas Semanales:</label>
        <input type="number" id="horas" name="horas" value={formData.horas} onChange={handleInputChange} required />

        <label htmlFor="profesor">Docente:</label>
        <input type="text" id="profesor" name="profesor" value={formData.profesor} onChange={handleInputChange} required />

        <button id="registro-alumnos" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};
