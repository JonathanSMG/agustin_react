import React, { useEffect, useState } from 'react';

export const DifusionInvestigacionSection = () => {
  const [difusionesData, setDifusionesData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedDifusionesData = JSON.parse(localStorage.getItem('difusionData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedDifusionesData) {
      setDifusionesData(storedDifusionesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="difusion-investigacion" className="consulta-section">
      <h2>REGISTRO DE DIFUSION DE INVESTIGACION</h2>
      {difusionesData.map((difusion, index) => (
        <div key={index}>
          <h3>Difusión {index + 1}</h3>
          <ul>
            {Object.keys(difusion).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {difusion[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

