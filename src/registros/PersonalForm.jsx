import React, { useState } from 'react';

export const PersonalForm = ({ onSubmit, onClose }) => {
    const initialFormData = {
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
      const personalData = { ...formData };
      const storedPersonal = JSON.parse(localStorage.getItem('personal')) || [];
      storedPersonal.push(personalData);
      localStorage.setItem('personal', JSON.stringify(storedPersonal));
  
      // Limpiar el formulario
      setFormData({ ...initialFormData });
  
      // Mostrar alerta de registro exitoso
      alert('Registro de personal realizado correctamente.');
  
      // Cerrar el formulario
      onClose();
    };
  return (
    <div id="formulario-personal" className="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombres:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

        <label htmlFor="apellido">Apellidos:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleInputChange} required />

        <label htmlFor="cedula">Cédula / Pasaporte:</label>
        <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleInputChange} required />

        <label htmlFor="sexo">Género:</label>
        <select id="sexo" name="sexo" value={formData.sexo} onChange={handleInputChange}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input type="text" id="nacionalidad" name="nacionalidad" value={formData.nacionalidad} onChange={handleInputChange} required />

        <label htmlFor="correo">Dirección de correo electrónico:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />

        <label htmlFor="telefono">Número de teléfono:</label>
        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} required />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleInputChange} required />

        <label htmlFor="rol">Rol:</label>
        <input type="text" id="rol" name="rol" value={formData.rol} onChange={handleInputChange} required />

        <label htmlFor="area">Área de trabajo:</label>
        <input type="text" id="area" name="area" value={formData.area} onChange={handleInputChange} required />

        <label htmlFor="tipo_contrato">Tipo de contrato:</label>
        <select id="tipo_contrato" name="tipo_contrato" value={formData.tipo_contrato} onChange={handleInputChange}>
          <option value="Tiempo completo">Tiempo completo</option>
          <option value="Medio tiempo">Medio tiempo</option>
          <option value="Contrato temporal">Contrato temporal</option>
        </select>

        <button id="registro-alumnos" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};
