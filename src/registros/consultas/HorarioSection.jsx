import React, { useEffect, useState } from 'react';

export const HorarioSection = () => {
  const [horariosData, setHorariosData] = useState([]);
  const [newHorario, setNewHorario] = useState({
    asignaturas: '',
    periodo: '',
    facultad: '',
    carrera: '',
    semestre: 1,
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedHorariosData = JSON.parse(localStorage.getItem('horarioData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedHorariosData) {
      setHorariosData(storedHorariosData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewHorario({
      ...newHorario,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddHorario = () => {
    setHorariosData([...horariosData, newHorario]);
    localStorage.setItem('horarioData', JSON.stringify([...horariosData, newHorario]));
    setNewHorario({
      asignaturas: '',
      periodo: '',
      facultad: '',
      carrera: '',
      semestre: 1,
    });
  };

  const handleRemoveHorario = (index) => {
    const updatedHorariosData = [...horariosData];
    updatedHorariosData.splice(index, 1);
    setHorariosData(updatedHorariosData);
    localStorage.setItem('horarioData', JSON.stringify(updatedHorariosData));
  };

  return (
    <section id="horarios" className="consulta-section">
      <h2>REGISTRO DE HORARIOS</h2>
      {horariosData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Asignaturas</th>
              <th>Periodo</th>
              <th>Facultad</th>
              <th>Carrera</th>
              <th>Semestre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {horariosData.map((horario, index) => (
              <tr key={index}>
                <td>{horario.asignaturas}</td>
                <td>{horario.periodo}</td>
                <td>{horario.facultad}</td>
                <td>{horario.carrera}</td>
                <td>{horario.semestre}</td>
                <td>
                  <button onClick={() => handleRemoveHorario(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de horarios disponibles.</p>
      )}
    </section>
  );
};
