import React, { useEffect, useState } from 'react';

export const AsignaturaSection = () => {
  const [asignaturasData, setAsignaturasData] = useState([]);
  const [newAsignatura, setNewAsignatura] = useState({
    nombre: '',
    codigo: '',
    creditos: '',
    horas: '',
    profesor: '',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedAsignaturasData = JSON.parse(localStorage.getItem('asignaturas'));

    // Si hay datos almacenados, actualiza el estado
    if (storedAsignaturasData) {
      setAsignaturasData(storedAsignaturasData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewAsignatura({
      ...newAsignatura,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAsignatura = () => {
    setAsignaturasData([...asignaturasData, newAsignatura]);
    localStorage.setItem('asignaturas', JSON.stringify([...asignaturasData, newAsignatura]));
    setNewAsignatura({
      nombre: '',
      codigo: '',
      creditos: '',
      horas: '',
      profesor: '',
    });
  };

  const handleRemoveAsignatura = (index) => {
    const updatedAsignaturas = [...asignaturasData];
    updatedAsignaturas.splice(index, 1);
    setAsignaturasData(updatedAsignaturas);
    localStorage.setItem('asignaturas', JSON.stringify(updatedAsignaturas));
  };

  return (
    <section id="asignaturas" className="consulta-section">
      <h2>REGISTRO DE ASIGNATURAS</h2>
      {asignaturasData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Código</th>
              <th>Créditos</th>
              <th>Horas</th>
              <th>Profesor</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {asignaturasData.map((asignatura, index) => (
              <tr key={index}>
                <td>{asignatura.nombre}</td>
                <td>{asignatura.codigo}</td>
                <td>{asignatura.creditos}</td>
                <td>{asignatura.horas}</td>
                <td>{asignatura.profesor}</td>
                <td>
                  <button onClick={() => handleRemoveAsignatura(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de asignaturas disponibles.</p>
      )}
    </section>
  );
};
