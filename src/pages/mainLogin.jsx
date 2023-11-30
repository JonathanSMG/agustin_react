import React, { useState } from 'react';
import '../css/main_login.css';
import { EstudianteForm } from '../registros/EstudianteForm';
import { DocenteForm } from '../registros/DocenteForm';
import { AsignaturaForm } from '../registros/AsignaturaForm';
import { PersonalForm } from '../registros/PersonalForm';

export const MainLogin = (props) => {
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
  const [showAlumnoForm, setShowAlumnoForm] = useState(false);
  const [showDocenteForm, setShowDocenteForm] = useState(false);
  const [showAsignaturaForm, setShowAsignaturaForm] = useState(false);
  const [showPersonalForm, setShowPersonalForm] = useState(false);

  const toggleForm = (formType) => {
    setShowAlumnoForm(formType === 'alumno' ? !showAlumnoForm : false);
    setShowDocenteForm(formType === 'docente' ? !showDocenteForm : false);
    setShowAsignaturaForm(formType === 'asignatura' ? !showAsignaturaForm : false);
    setShowPersonalForm(formType === 'personal' ? !showPersonalForm : false);
    
  };

  const handleCloseForms = () => {
    setShowAlumnoForm(false);
    setShowDocenteForm(false);
    setShowAsignaturaForm(false);
    setShowPersonalForm(false);
  };

  const handleAlumnoSubmit = (data) => {
    console.log('Formulario de alumno enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handleDocenteSubmit = (data) => {
    console.log('Formulario de docente enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handleAsignaturaSubmit = (data) => {
    console.log('Formulario de asignatura enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handlePersonalSubmit = (data) => {
    console.log('Formulario de personal enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  return (
    <div>
 <header className="cabeza-mainlogin">
        <nav id="navbar_mainlogin">
          <img id="logo-mainlogin" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo-mainlogin" />
          <div id="navbar_buttons_mainlogin">
            <div id="nav-links-mainlogin">
               <button onClick={() => props.onFormSwitch('main')}>INICIO</button>
              <button onClick={() => props.onFormSwitch('procesos')}>PROCESOS</button>
              <button onClick={() => props.onFormSwitch('consultas')}>CONSULTAS</button>
            </div>
          </div>
        </nav>
      </header>
	        <h1 className="titulo" align="center">¡BIENVENIDO!</h1>

            <div className="registros-container">
        <div className="mainlogin-container">
          <button id="toggle-alumnos" onClick={() => toggleForm('alumno')}>
            <img id="img-est" src={process.env.PUBLIC_URL + '/estudiante.png'} alt="Estudiante" />
            Registrar Alumno
          </button>
          {showAlumnoForm && <EstudianteForm onSubmit={handleAlumnoSubmit} onClose={handleCloseForms} />}
        </div>

        <div className="mainlogin-form">
          <button id="toggle-docentes" onClick={() => toggleForm('docente')}>
            <img id="img-est" src={process.env.PUBLIC_URL + '/docente.png'} alt="Docente" />
            Registrar Docente
          </button>
          {showDocenteForm && <DocenteForm onSubmit={handleDocenteSubmit} onClose={handleCloseForms} />}
        </div>
      </div>

      <div className="registros-container">
        <div className="mainlogin-container">
          <button id="toggle-asignaturas" onClick={() => toggleForm('asignatura')}>
            <img id="img-est" src={process.env.PUBLIC_URL + '/asign.png'} alt="Asignatura" />
            Registrar Asignatura
          </button>
          {showAsignaturaForm && <AsignaturaForm onSubmit={handleAsignaturaSubmit} onClose={handleCloseForms} />}
        </div>
        <div className="mainlogin-form">
          <button id="toggle-personal" onClick={() => toggleForm('personal')}>
            <img id="img-est" src={process.env.PUBLIC_URL + '/personal.png'} alt="Personal" />
            Registrar Personal
          </button>
          {showPersonalForm && <PersonalForm onSubmit={handlePersonalSubmit} onClose={handleCloseForms} />}
        </div>
      </div>

  <footer className='bajada'>
        <div className="footer-bottom">
          <p>&copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos reservados.</p>
        </div>
      </footer>
	  </div>
  );
};
