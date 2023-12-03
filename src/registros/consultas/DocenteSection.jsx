import React, { useEffect, useState } from 'react';

export const DocenteSection = () => {
  const [docentesData, setDocentesData] = useState([]);
  const [newDocente, setNewDocente] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: '',
    especialidad: '',
    sexo: 'Masculino',
    nacionalidad: '',
    identificacion: '',
    direccion: '',
    facultad: '',
    carrera: '',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedDocentesData = JSON.parse(localStorage.getItem('docentes'));

    // Si hay datos almacenados, actualiza el estado
    if (storedDocentesData) {
      setDocentesData(storedDocentesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewDocente({
      ...newDocente,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDocente = () => {
    setDocentesData([...docentesData, newDocente]);
    localStorage.setItem('docentes', JSON.stringify([...docentesData, newDocente]));
    setNewDocente({
      nombre: '',
      apellido: '',
      cedula: '',
      correo: '',
      telefono: '',
      especialidad: '',
      sexo: 'Masculino',
      nacionalidad: '',
      identificacion: '',
      direccion: '',
      facultad: '',
      carrera: '',
    });
  };

  const handleRemoveDocente = (index) => {
    const updatedDocentes = [...docentesData];
    updatedDocentes.splice(index, 1);
    setDocentesData(updatedDocentes);
    localStorage.setItem('docentes', JSON.stringify(updatedDocentes));
  };

  return (
    <section id="docentes" className="consulta-section">
      <h2>REGISTRO DE DOCENTES</h2>
      {docentesData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Especialidad</th>
              <th>Sexo</th>
              <th>Nacionalidad</th>
              <th>Identificación</th>
              <th>Dirección</th>
              <th>Facultad</th>
              <th>Carrera</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {docentesData.map((docente, index) => (
              <tr key={index}>
                <td>{docente.nombre}</td>
                <td>{docente.apellido}</td>
                <td>{docente.cedula}</td>
                <td>{docente.correo}</td>
                <td>{docente.telefono}</td>
                <td>{docente.especializacion}</td>
                <td>{docente.sexo}</td>
                <td>{docente.nacionalidad}</td>
                <td>{docente.identificacion}</td>
                <td>{docente.direccion}</td>
                <td>{docente.facultad}</td>
                <td>{docente.carrera}</td>
                <td>
                  <button onClick={() => handleRemoveDocente(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de docentes disponibles.</p>
      )}

    </section>
  );
};
