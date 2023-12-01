import React, { useEffect, useState } from 'react';

export const PersonalSection = () => {
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    // Obtener datos del localStorage
    const storedPersonalData = JSON.parse(localStorage.getItem('personal'));

    // Si hay datos almacenados, actualiza el estado
    if (storedPersonalData) {
      setPersonalData(storedPersonalData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <section id="personal" className="consulta-section">
      <h2>REGISTRO DEL PERSONAL</h2>
      {personalData.map((persona, index) => (
        <div key={index}>
          <h3>Personal {index + 1}</h3>
          <ul>
            {Object.keys(persona).map((key, innerIndex) => (
              <li key={innerIndex}>
                <strong>{key}:</strong> {persona[key]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
