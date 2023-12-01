import React, { useEffect, useState } from 'react';

export const SolicitudSection = () => {
  const [solicitudesData, setSolicitudesData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedSolicitudesData = JSON.parse(localStorage.getItem('solicitudFormData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedSolicitudesData) {
      setSolicitudesData(storedSolicitudesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="solicitudes" className="consulta-section">
      <h2>REGISTRO DE SOLICITUDES</h2>
      {solicitudesData.map((solicitud, index) => (
        <div key={index}>
          <h3>Solicitud {index + 1}</h3>
          <ul>
            {Object.keys(solicitud).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {solicitud[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
