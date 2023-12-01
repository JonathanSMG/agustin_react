import React, { useEffect, useState } from 'react';

export const ProyectoSection = () => {
  const [proyectosData, setProyectosData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedProyectosData = JSON.parse(localStorage.getItem('proyectoData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedProyectosData) {
      setProyectosData(storedProyectosData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="proyectos-investigacion" className="consulta-section">
      <h2>REGISTRO DE PROYECTOS DE INVESTIGACION</h2>
      {proyectosData.map((proyecto, index) => (
        <div key={index}>
          <h3>Proyecto {index + 1}</h3>
          <ul>
            {Object.keys(proyecto).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {proyecto[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
