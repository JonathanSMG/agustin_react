import React, { useEffect, useState } from 'react';

export const DocenteSection = () => {
  const [docentesData, setDocentesData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedDocentesData = JSON.parse(localStorage.getItem('docentes'));

    // Si hay datos almacenados, actualiza el estado
    if (storedDocentesData) {
      setDocentesData(storedDocentesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="docentes" className="consulta-section">
      <h2>REGISTRO DE DOCENTES</h2>
      {docentesData.map((docente, index) => (
        <div key={index}>
          <h3>Docente {index + 1}</h3>
          <ul>
            {Object.keys(docente).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {docente[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

