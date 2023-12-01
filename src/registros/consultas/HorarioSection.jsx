import React, { useEffect, useState } from 'react';

export const HorarioSection = () => {
  const [horariosData, setHorariosData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedHorariosData = JSON.parse(localStorage.getItem('horarioData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedHorariosData) {
      setHorariosData(storedHorariosData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="horarios" className="consulta-section">
      <h2>REGISTRO DE HORARIOS</h2>
      {horariosData.map((horario, index) => (
        <div key={index}>
          <h3>Horario {index + 1}</h3>
          <ul>
            {Object.keys(horario).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {horario[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

