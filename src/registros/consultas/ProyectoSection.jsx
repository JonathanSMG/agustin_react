import React, { useEffect, useState } from 'react';

export const ProyectoSection = () => {
  const [proyectosData, setProyectosData] = useState([]);
  const [newProyecto, setNewProyecto] = useState({
    tituloProyecto: '',
    descripcion: '',
    responsable: '',
    departamento: '',
    fechaInicio: '',
    fechaFin: '',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedProyectosData = JSON.parse(localStorage.getItem('proyectoData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedProyectosData) {
      setProyectosData(storedProyectosData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewProyecto({
      ...newProyecto,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProyecto = () => {
    setProyectosData([...proyectosData, newProyecto]);
    localStorage.setItem('proyectoData', JSON.stringify([...proyectosData, newProyecto]));
    setNewProyecto({
      tituloProyecto: '',
      descripcion: '',
      responsable: '',
      departamento: '',
      fechaInicio: '',
      fechaFin: '',
    });
  };

  const handleRemoveProyecto = (index) => {
    const updatedProyectosData = [...proyectosData];
    updatedProyectosData.splice(index, 1);
    setProyectosData(updatedProyectosData);
    localStorage.setItem('proyectoData', JSON.stringify(updatedProyectosData));
  };

  return (
    <section id="proyectos-investigacion" className="consulta-section">
      <h2>REGISTRO DE PROYECTOS DE INVESTIGACION</h2>
      {proyectosData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Título del Proyecto</th>
              <th>Descripción</th>
              <th>Responsable</th>
              <th>Departamento</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectosData.map((proyecto, index) => (
              <tr key={index}>
                <td>{proyecto.tituloProyecto}</td>
                <td>{proyecto.descripcion}</td>
                <td>{proyecto.responsable}</td>
                <td>{proyecto.departamento}</td>
                <td>{proyecto.fechaInicio}</td>
                <td>{proyecto.fechaFin}</td>
                <td>
                  <button onClick={() => handleRemoveProyecto(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de proyectos disponibles.</p>
      )}
    </section>
  );
};
