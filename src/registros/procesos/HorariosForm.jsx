import React, { useState } from 'react';

export const HorariosForm = ({ onSubmit, onClose }) => {
  const initialHorarioData = {
    asignaturas: '',
    periodo: '',
    facultad: '',
    carrera: '',
    semestre: 1,
  };

  const [horarioData, setHorarioData] = useState({ ...initialHorarioData });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setHorarioData({
      ...horarioData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validar campos obligatorios
    if (!horarioData.asignaturas || !horarioData.periodo || !horarioData.facultad || !horarioData.carrera) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }
  
    // Validar que el semestre sea un número entero positivo
    if (!Number.isInteger(horarioData.semestre) || horarioData.semestre < 1) {
      alert('Por favor, ingrese un número entero positivo para el semestre.');
      return;
    }
  
    // Obtener los horarios existentes del localStorage
    const storedHorarios = JSON.parse(localStorage.getItem('horarioData')) || [];
  
    // Agregar el nuevo horario a la lista
    storedHorarios.push(horarioData);
  
    // Actualizar el localStorage con la lista actualizada de horarios
    localStorage.setItem('horarioData', JSON.stringify(storedHorarios));
  
    // Llamar a la función onSubmit con los datos del horario
    onSubmit(horarioData);
  
    // Limpiar el formulario después de enviar
    setHorarioData({ ...initialHorarioData });
  };


  return (
    <div id="formulario-horarios" class="contenido">
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario de horarios */}
        <label htmlFor="asignaturas">Asignaturas:</label>
        <input
          type="text"
          id="asignaturas"
          name="asignaturas"
          value={horarioData.asignaturas}
          onChange={handleChange}
          required
        />

        <label htmlFor="periodo">Periodo:</label>
        <input
          type="text"
          id="periodo"
          name="periodo"
          value={horarioData.periodo}
          onChange={handleChange}
          required
        />

        <label htmlFor="facultad">Facultad:</label>
        <input
          type="text"
          id="facultad"
          name="facultad"
          value={horarioData.facultad}
          onChange={handleChange}
          required
        />

        <label htmlFor="carrera">Carrera:</label>
        <input
          type="text"
          id="carrera"
          name="carrera"
          value={horarioData.carrera}
          onChange={handleChange}
          required
        />

        <label htmlFor="semestre">Semestre:</label>
        <input
          type="number"
          id="semestre"
          name="semestre"
          value={horarioData.semestre}
          onChange={handleChange}
          required
        />

        <div >
          <button id="registro-alumnos" type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

