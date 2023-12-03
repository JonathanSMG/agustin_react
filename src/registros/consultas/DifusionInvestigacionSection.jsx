import React, { useEffect, useState } from 'react';

export const DifusionInvestigacionSection = () => {
  const [difusionesData, setDifusionesData] = useState([]);
  const [newDifusion, setNewDifusion] = useState({
    tituloDifusion: '',
    mediosDifusion: '',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedDifusionesData = JSON.parse(localStorage.getItem('difusionData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedDifusionesData) {
      setDifusionesData(storedDifusionesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewDifusion({
      ...newDifusion,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDifusion = () => {
    setDifusionesData([...difusionesData, newDifusion]);
    localStorage.setItem('difusionData', JSON.stringify([...difusionesData, newDifusion]));
    setNewDifusion({
      tituloDifusion: '',
      mediosDifusion: '',
    });
  };

  const handleRemoveDifusion = (index) => {
    const updatedDifusionesData = [...difusionesData];
    updatedDifusionesData.splice(index, 1);
    setDifusionesData(updatedDifusionesData);
    localStorage.setItem('difusionData', JSON.stringify(updatedDifusionesData));
  };

  return (
    <section id="difusion-investigacion" className="consulta-section">
      <h2>REGISTRO DE DIFUSION DE INVESTIGACION</h2>
      {difusionesData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Título de la Difusión</th>
              <th>Medios de Difusión</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {difusionesData.map((difusion, index) => (
              <tr key={index}>
                <td>{difusion.tituloDifusion}</td>
                <td>{difusion.mediosDifusion}</td>
                <td>
                  <button onClick={() => handleRemoveDifusion(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de difusiones disponibles.</p>
      )}

    </section>
  );
};
