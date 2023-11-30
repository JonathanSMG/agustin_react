import React, { useState, useEffect } from 'react';

export const HorariosForm = ({ onSubmit, onClose }) => {
  const initialHorarioData = {
    asignaturas: '',
    periodo: '',
    facultad: '',
    carrera: '',
    semestre: 1,
  };

  const [horarioData, setHorarioData] = useState({ ...initialHorarioData });

  useEffect(() => {
    // Cargar datos almacenados en localStorage cuando el componente se monta
    const storedData = localStorage.getItem('horarioData');
    if (storedData) {
      setHorarioData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHorarioData({
      ...horarioData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar datos en localStorage
    localStorage.setItem('horarioData', JSON.stringify(horarioData));

    // Llamar a la función onSubmit con los datos del horario
    onSubmit(horarioData);
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

