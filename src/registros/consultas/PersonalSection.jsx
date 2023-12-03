import React, { useEffect, useState } from 'react';

export const PersonalSection = () => {
  const [personalData, setPersonalData] = useState([]);
  const [newPersona, setNewPersona] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    sexo: 'Masculino',
    nacionalidad: '',
    correo: '',
    telefono: '',
    direccion: '',
    rol: '',
    area: '',
    tipo_contrato: 'Tiempo completo',
  });

  useEffect(() => {
    // Obtener datos del localStorage
    const storedPersonalData = JSON.parse(localStorage.getItem('personal'));

    // Si hay datos almacenados, actualiza el estado
    if (storedPersonalData) {
      setPersonalData(storedPersonalData);
    }
  }, []); // La dependencia vacía asegura que el efecto solo se ejecute una vez al montar el componente

  const handleInputChange = (e) => {
    setNewPersona({
      ...newPersona,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPersona = () => {
    setPersonalData([...personalData, newPersona]);
    localStorage.setItem('personal', JSON.stringify([...personalData, newPersona]));
    setNewPersona({
      nombre: '',
      apellido: '',
      cedula: '',
      sexo: 'Masculino',
      nacionalidad: '',
      correo: '',
      telefono: '',
      direccion: '',
      rol: '',
      area: '',
      tipo_contrato: 'Tiempo completo',
    });
  };

  const handleRemovePersona = (index) => {
    const updatedPersonalData = [...personalData];
    updatedPersonalData.splice(index, 1);
    setPersonalData(updatedPersonalData);
    localStorage.setItem('personal', JSON.stringify(updatedPersonalData));
  };

  return (
    <section id="personal" className="consulta-section">
      <h2>REGISTRO DEL PERSONAL</h2>
      {personalData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Sexo</th>
              <th>Nacionalidad</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Rol</th>
              <th>Área</th>
              <th>Tipo de Contrato</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personalData.map((persona, index) => (
              <tr key={index}>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.cedula}</td>
                <td>{persona.sexo}</td>
                <td>{persona.nacionalidad}</td>
                <td>{persona.correo}</td>
                <td>{persona.telefono}</td>
                <td>{persona.direccion}</td>
                <td>{persona.rol}</td>
                <td>{persona.area}</td>
                <td>{persona.tipo_contrato}</td>
                <td>
                  <button onClick={() => handleRemovePersona(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos de personal disponibles.</p>
      )}
    </section>
  );
};
