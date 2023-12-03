import React, { useState } from 'react';

export const ProyectoForm = ({ onSubmit, onClose }) => {
  const initialFormData = {
    tituloProyecto: '',
    descripcion: '',
    responsable: '',
    departamento: '',
    fechaInicio: '',
    fechaFin: '',
  };

  const [proyectoData, setProyectoData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProyectoData({
      ...proyectoData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Validar campos obligatorios
  if (!proyectoData.tituloProyecto || !proyectoData.responsable || !proyectoData.departamento || !proyectoData.fechaInicio) {
    alert('Por favor, complete los campos obligatorios.');
    return;
  }

  // Validar fechas (puedes utilizar una librería como moment.js para una validación más robusta)
  if (proyectoData.fechaInicio && proyectoData.fechaFin && proyectoData.fechaInicio > proyectoData.fechaFin) {
    alert('La fecha de inicio no puede ser posterior a la fecha de fin.');
    return;
  }

  // Obtener los proyectos existentes del localStorage
  const storedProyectos = JSON.parse(localStorage.getItem('proyectoData')) || [];

  // Agregar el nuevo proyecto a la lista
  storedProyectos.push(proyectoData);

  // Actualizar el localStorage con la lista actualizada de proyectos
  localStorage.setItem('proyectoData', JSON.stringify(storedProyectos));

  // Llamar a la función onSubmit con los datos del proyecto
  onSubmit(proyectoData);

  // Limpiar el formulario después de enviar
  setProyectoData({ ...initialFormData });
};


  return (
    <div id="formulario-proyectos" className="contenido">
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario de proyectos */}
        <label htmlFor="tituloProyecto">Título del Proyecto:</label>
        <input
          type="text"
          id="tituloProyecto"
          name="tituloProyecto"
          value={proyectoData.tituloProyecto}
          onChange={handleChange}
          required
        />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={proyectoData.descripcion}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="responsable">Responsable:</label>
        <input
          type="text"
          id="responsable"
          name="responsable"
          value={proyectoData.responsable}
          onChange={handleChange}
          required
        />

        <label htmlFor="departamento">Departamento:</label>
        <input
          type="text"
          id="departamento"
          name="departamento"
          value={proyectoData.departamento}
          onChange={handleChange}
          required
        />

        <label htmlFor="fechaInicio">Fecha de Inicio:</label>
        <input
          type="date"
          id="fechaInicio"
          name="fechaInicio"
          value={proyectoData.fechaInicio}
          onChange={handleChange}
          required
        />

        <label htmlFor="fechaFin">Fecha de Fin:</label>
        <input
          type="date"
          id="fechaFin"
          name="fechaFin"
          value={proyectoData.fechaFin}
          onChange={handleChange}
          required
        />

        <div>
          <button id="registro-proyectos" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
