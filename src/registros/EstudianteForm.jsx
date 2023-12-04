import React, { useState } from 'react';

export const EstudianteForm = ({ onSubmit, onClose }) => {
    const initialFormData = {
      nombre: '',
      apellido: '',
      cedula: '',
      facultad: '',
      carrera: '',
      correo: '',
      celular: '',
      pais: '',
      provincia_residencia: '',
      provincia: '',
      ciudad: '',
      religion: '',
      sexo: 'Masculino',
      estado_civil: 'Soltero',
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
      if (!formData.nombre || !formData.apellido || !formData.cedula || !formData.correo || !formData.celular) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }
    
      // Validación de formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
      }
    
      // Validación de formato de número de celular
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.celular)) {
        alert('Por favor, ingrese un número de celular válido.');
        return;
      }
    
      // Validación de longitud de campos (nombre y apellido)
      const minLength = 3;
      if (formData.nombre.length < minLength || formData.apellido.length < minLength) {
        alert(`Por favor, ingrese un nombre y apellido con al menos ${minLength} caracteres.`);
        return;
      }
    
      // Verificación de campo numérico (cedula)
      if (isNaN(formData.cedula)) {
        alert('Por favor, ingrese una cédula válida.');
        return;
      }
    
      // Guardar en localStorage
      const estudianteData = { ...formData };
      const storedEstudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
      storedEstudiantes.push(estudianteData);
      localStorage.setItem('estudiantes', JSON.stringify(storedEstudiantes));
    
      // Limpiar el formulario
      setFormData({ ...initialFormData });
    
      // Mostrar alerta de registro exitoso
      alert('Estudiante registrado correctamente.');
    
      // Cerrar el formulario
      onClose();
    };
  return (
    <div id="formulario-estudiantes" className="contenido">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombres:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required />

        <label htmlFor="apellido">Apellidos:</label>
        <input type="text" id="apellido" name="apellido" value={formData.apellido} onChange={handleInputChange} required />

        <label htmlFor="cedula">Cédula / Pasaporte:</label>
        <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleInputChange} required />

        <label htmlFor="facultad">Facultad:</label>
        <input type="text" id="facultad" name="facultad" value={formData.facultad} onChange={handleInputChange} required />

        <label htmlFor="carrera">Carrera:</label>
        <input type="text" id="carrera" name="carrera" value={formData.carrera} onChange={handleInputChange} required />

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required />

        <label htmlFor="celular">Celular:</label>
        <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleInputChange} required />

        <label htmlFor="pais">País de residencia:</label>
        <input type="text" id="pais" name="pais" value={formData.pais} onChange={handleInputChange} required />

        <label htmlFor="provincia_residencia">Provincia de residencia:</label>
        <input type="text" id="provincia_residencia" name="provincia_residencia" value={formData.provincia_residencia} onChange={handleInputChange} required />

        <label htmlFor="provincia">Provincia:</label>
        <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleInputChange} required />

        <label htmlFor="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleInputChange} required />

        <label htmlFor="religion">Religión:</label>
        <input type="text" id="religion" name="religion" value={formData.religion} onChange={handleInputChange} required />

        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" name="sexo" value={formData.sexo} onChange={handleInputChange}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <label htmlFor="estado_civil">Estado civil:</label>
        <select id="estado_civil" name="estado_civil" value={formData.estado_civil} onChange={handleInputChange}>
          <option value="Soltero">Soltero</option>
          <option value="Casado">Casado</option>
          <option value="Divorciado">Divorciado</option>
          <option value="Viudo">Viudo</option>
        </select>

        <button id="registro-alumnos" type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};
