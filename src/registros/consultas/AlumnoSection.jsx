import React, { useEffect, useState } from 'react';

export const AlumnoSection = () => {
  const [alumnosData, setAlumnosData] = useState([]);
  const [newAlumno, setNewAlumno] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    facultad: '',
    carrera: '',
    correo: '',
    celular: '',
    pais: '',
    provincia_residencia: '',
    provincia: '',
    ciudad: '',
    religion: '',
    sexo: 'Masculino',
    estado_civil: 'Soltero',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedAlumnosData = JSON.parse(localStorage.getItem('estudiantes'));

    // Si hay datos almacenados, actualiza el estado
    if (storedAlumnosData) {
      setAlumnosData(storedAlumnosData);
    }
  }, []);

  const handleInputChange = (e) => {
    setNewAlumno({
      ...newAlumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddAlumno = () => {
    setAlumnosData([...alumnosData, newAlumno]);
    localStorage.setItem('estudiantes', JSON.stringify([...alumnosData, newAlumno]));
    setNewAlumno({
      nombre: '',
      apellido: '',
      cedula: '',
      facultad: '',
      carrera: '',
      correo: '',
      celular: '',
      pais: '',
      provincia_residencia: '',
      provincia: '',
      ciudad: '',
      religion: '',
      sexo: 'Masculino',
      estado_civil: 'Soltero',
    });
  };

  const handleRemoveAlumno = (index) => {
    const updatedAlumnos = [...alumnosData];
    updatedAlumnos.splice(index, 1);
    setAlumnosData(updatedAlumnos);
    localStorage.setItem('estudiantes', JSON.stringify(updatedAlumnos));
  };

  return (
    <section id="alumnos" className="alumno-section">
      <h2>REGISTRO DE ALUMNOS</h2>
      {alumnosData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Facultad</th>
              <th>Carrera</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>País</th>
              <th>Provincia Residencia</th>
              <th>Provincia</th>
              <th>Ciudad</th>
              <th>Religión</th>
              <th>Sexo</th>
              <th>Estado Civil</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosData.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.cedula}</td>
                <td>{alumno.facultad}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.correo}</td>
                <td>{alumno.celular}</td>
                <td>{alumno.pais}</td>
                <td>{alumno.provincia_residencia}</td>
                <td>{alumno.provincia}</td>
                <td>{alumno.ciudad}</td>
                <td>{alumno.religion}</td>
                <td>{alumno.sexo}</td>
                <td>{alumno.estado_civil}</td>
                <td>
                  <button onClick={() => handleRemoveAlumno(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de alumnos disponibles.</p>
      )}
  
    </section>
  );
};
