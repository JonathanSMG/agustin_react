import React, { useState, useEffect } from 'react';

export const ProyectoForm = ({ onSubmit, onClose }) => {
  const initialFormData = {
    tituloProyecto: '',
    descripcion: '',
    responsable: '',
    departamento: '',
    fechaInicio: '',
    fechaFin: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  useEffect(() => {
    // Cargar datos almacenados en localStorage cuando el componente se monta
    const storedData = localStorage.getItem('proyectoFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier validación adicional si es necesario

    // Llamar a la función onSubmit con los datos del proyecto
    onSubmit(formData);

    // Guardar datos en localStorage
    localStorage.setItem('proyectoFormData', JSON.stringify(formData));
  };

  return (
    <div id="formulario-proyectos" class="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="tituloProyecto">Título del Proyecto:</label>
        <input
          type="text"
          id="tituloProyecto"
          name="tituloProyecto"
          value={formData.tituloProyecto}
          onChange={handleChange}
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="responsable">Responsable del Proyecto:</label>
        <input
          type="text"
          id="responsable"
          name="responsable"
          value={formData.responsable}
          onChange={handleChange}
          required
        />

        <label htmlFor="departamento">Departamento:</label>
        <input
          type="text"
          id="departamento"
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
          required
        />

        <label htmlFor="fechaInicio">Fecha de Inicio:</label>
        <input
          type="date"
          id="fechaInicio"
          name="fechaInicio"
          value={formData.fechaInicio}
          onChange={handleChange}
          required
        />

        <label htmlFor="fechaFin">Fecha de Finalización:</label>
        <input
          type="date"
          id="fechaFin"
          name="fechaFin"
          value={formData.fechaFin}
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
