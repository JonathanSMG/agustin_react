import React, { useEffect, useState } from 'react';

export const SolicitudSection = () => {
  const [solicitudesData, setSolicitudesData] = useState([]);
  const [newSolicitud, setNewSolicitud] = useState({
    tipoSolicitud: '',
    descripcion: '',
    adjunto: null,
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedSolicitudesData = JSON.parse(localStorage.getItem('solicitudFormData'));

    // Si hay datos almacenados, actualiza el estado
    if (storedSolicitudesData) {
      setSolicitudesData(storedSolicitudesData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewSolicitud({
      ...newSolicitud,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setNewSolicitud({
      ...newSolicitud,
      adjunto: e.target.files[0],
    });
  };

  const handleAddSolicitud = () => {
    setSolicitudesData([...solicitudesData, newSolicitud]);
    localStorage.setItem('solicitudFormData', JSON.stringify([...solicitudesData, newSolicitud]));
    setNewSolicitud({
      tipoSolicitud: '',
      descripcion: '',
      adjunto: null,
    });
  };

  const handleRemoveSolicitud = (index) => {
    const updatedSolicitudesData = [...solicitudesData];
    updatedSolicitudesData.splice(index, 1);
    setSolicitudesData(updatedSolicitudesData);
    localStorage.setItem('solicitudFormData', JSON.stringify(updatedSolicitudesData));
  };

  return (
    <section id="solicitudes" className="consulta-section">
      <h2>REGISTRO DE SOLICITUDES</h2>
      {solicitudesData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Tipo de Solicitud</th>
              <th>Descripción</th>
              <th>Adjunto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {solicitudesData.map((solicitud, index) => (
              <tr key={index}>
                <td>{solicitud.tipoSolicitud}</td>
                <td>{solicitud.descripcion}</td>
                <td>{solicitud.adjunto}</td>
                <td>
                  <button onClick={() => handleRemoveSolicitud(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de solicitudes disponibles.</p>
      )}
    </section>
  );
};
