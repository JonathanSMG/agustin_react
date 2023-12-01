import React, { useEffect, useState } from 'react';

export const AsignaturaSection = () => {
  const [asignaturasData, setAsignaturasData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedAsignaturasData = JSON.parse(localStorage.getItem('asignaturas'));

    // Si hay datos almacenados, actualiza el estado
    if (storedAsignaturasData) {
      setAsignaturasData(storedAsignaturasData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="asignaturas" className="consulta-section">
      <h2>REGISTRO DE ASIGNATURAS</h2>
      {asignaturasData.map((asignatura, index) => (
        <div key={index}>
          <h3>Asignatura {index + 1}</h3>
          <ul>
            {Object.keys(asignatura).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {asignatura[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

