import React, { useState } from 'react';
import '../css/main_login.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

export const DocenteForm = ({ onSubmit, onClose }) => {
  const initialFormData = {
    nombre: '',
    apellido: '',
    cedula: '',
    sexo: 'Masculino',
    nacionalidad: '',
    identificacion: '',
    correo: '',
    telefono: '',
    direccion: '',
    especializacion: '',
    facultad: '',
    carrera: '',
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.nombre || !formData.apellido || !formData.cedula || !formData.correo || !formData.telefono) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    // Guardar en localStorage
    const docenteData = { ...formData };
    const storedDocentes = JSON.parse(localStorage.getItem('docentes')) || [];
    storedDocentes.push(docenteData);
    localStorage.setItem('docentes', JSON.stringify(storedDocentes));

    // Limpiar el formulario
    setFormData({ ...initialFormData });

    // Mostrar alerta de registro exitoso
    alert('Docente registrado correctamente.');

    // Cerrar el formulario
    onClose();
  };

  return (
    <div id="formulario-docentes" className="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombres:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

        <label htmlFor="apellido">Apellidos:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleInputChange} required />

        <label htmlFor="cedula">Cédula / Pasaporte:</label>
        <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleInputChange} required />

        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" name="sexo" value={formData.sexo} onChange={handleInputChange}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input type="text" id="nacionalidad" name="nacionalidad" value={formData.nacionalidad} onChange={handleInputChange} required />

        <label htmlFor="identificacion">Número de identificación o pasaporte:</label>
        <input type="text" id="identificacion" name="identificacion" value={formData.identificacion} onChange={handleInputChange} required />

        <label htmlFor="correo">Dirección de correo electrónico:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />

        <label htmlFor="telefono">Número de teléfono:</label>
        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} required />

        <label htmlFor="especializacion">Área de especialización:</label>
        <input type="text" id="especializacion" name="especializacion" value={formData.especializacion} onChange={handleInputChange} required />

        <label htmlFor="facultad">Facultad a inscribirse:</label>
        <input type="text" id="facultad" name="facultad" value={formData.facultad} onChange={handleInputChange} required />

        <label htmlFor="carrera">Carrera a inscribirse:</label>
        <input type="text" id="carrera" name="carrera" value={formData.carrera} onChange={handleInputChange} required />

        <button id="registro-alumnos" type="submit">
          ENVIAR
        </button>
      </form>
      
    </div>
  );
};
