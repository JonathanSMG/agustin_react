import React, { useEffect, useState } from 'react';

export const AlumnoSection = () => {
    const [alumnosData, setAlumnosData] = useState([]);

    useEffect(() => {
      // Obtener datos del localStorage
      const storedAlumnosData = JSON.parse(localStorage.getItem('estudiantes'));
  
      // Si hay datos almacenados, actualiza el estado
      if (storedAlumnosData) {
        setAlumnosData(storedAlumnosData);
      }
    }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente
  
    return (
        <section id="alumnos" className="consulta-section">
          <h2>REGISTRO DE ALUMNOS</h2>
          {alumnosData.map((alumno, index) => (
            <div key={index}>
              <h3>Estudiante {index + 1}</h3>
              <ul>
                {Object.keys(alumno).map((key, innerIndex) => (
                  <li key={innerIndex}>
                    <strong>{key}:</strong> {alumno[key]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      );
    }