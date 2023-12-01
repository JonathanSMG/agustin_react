import React, { useState } from 'react';
import '../css/process.css';
import { HorariosForm } from '../registros/procesos/HorariosForm';
import { SolicitudForm } from '../registros/procesos/SolicitudForm';
import { ProyectoForm } from '../registros/procesos/ProyectoForm';
import { DifusionForm } from '../registros/procesos/DifusionForm';

export const Procesos = (props) => {
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
  const [showHorariosForm, setShowHorariosForm] = useState(false);
  const [showSolicitudesForm, setShowSolicitudesForm] = useState(false);
  const [showProyectosForm, setShowProyectosForm] = useState(false);
  const [showDifusionForm, setShowDifusionForm] = useState(false);

  const toggleForm = (formType) => {
    setShowHorariosForm(formType === 'horarios' ? !showHorariosForm : false);
    setShowSolicitudesForm(formType === 'solicitudes' ? !showSolicitudesForm : false);
    setShowProyectosForm(formType === 'proyectos' ? !showProyectosForm : false);
    setShowDifusionForm(formType === 'difusion' ? !showDifusionForm : false);
  };

  const handleCloseForms = () => {
    setShowHorariosForm(false);
    setShowSolicitudesForm(false);
    setShowProyectosForm(false);
    setShowDifusionForm(false);
  };

  const handleHorariosSubmit = (data) => {
    console.log('Formulario de horarios enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handleSolicitudesSubmit = (data) => {
    console.log('Formulario de solicitudes enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handleProyectosSubmit = (data) => {
    console.log('Formulario de proyectos enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  const handleDifusionSubmit = (data) => {
    console.log('Formulario de difusión enviado:', data);
    setFormData({ ...initialFormData });
    handleCloseForms();
  };

  return (
    <div>
        <header className="cabeza">
        <nav id="navbar">
          <img id="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo" />
          <div id="navbar_buttons">
            <div id="nav-links">
              <button onClick={() => props.onFormSwitch('main')}>INICIO</button>
              <button onClick={() => props.onFormSwitch('mainlogin')}>MENU</button>
              <button onClick={() => props.onFormSwitch('consultas')}>CONSULTAS</button>
            </div>
          </div>
        </nav>
      </header>
      <h1 className="titulo" align="center">¡BIENVENIDO!</h1>

      <div className="main-container">
        <div className="process-container">
          <button id="toggle-horarios" onClick={() => toggleForm('horarios')}>
   <img id="img-est" src={process.env.PUBLIC_URL + '/horario.png'} alt="horario" />
            GENERAR HORARIOS
			</button>
          {showHorariosForm && <HorariosForm onSubmit={handleHorariosSubmit} onClose={handleCloseForms} />}
        </div>

        <div className="process-form">
          <button id="toggle-solicitudes" onClick={() => toggleForm('solicitudes')}>
            <img id="img-est" src={process.env.PUBLIC_URL + '/soli.png'} alt="Generar Solicitudes" />
            GENERAR SOLICITUDES
          </button>
          {showSolicitudesForm && <SolicitudForm onSubmit={handleSolicitudesSubmit} onClose={handleCloseForms} />}
        </div>
      </div>

      <div className="main-container">
        <div className="process-container">
          <button id="toggle-proyectos" onClick={() => toggleForm('proyectos')}>
             <img id="img-est" src={process.env.PUBLIC_URL + '/inv.png'} alt="Generar Proyectos de Investigación" />
            GENERAR PROYECTOS DE INVESTIGACIÓN
          </button>
          {showProyectosForm && <ProyectoForm onSubmit={handleProyectosSubmit} onClose={handleCloseForms} />}
        </div>
        <div className="process-form">
        <button id="toggle-difusion" onClick={() => toggleForm('difusion')}>
           <img id="img-est" src={process.env.PUBLIC_URL + '/dif.png'} alt="Generar Difusión de Investigación" />
            GENERAR DIFUSIÓN DE INVESTIGACIÓN
          </button>
          {showDifusionForm && <DifusionForm onSubmit={handleDifusionSubmit} onClose={handleCloseForms} />}
        </div>
      </div>

         <footer className='bajada'>
    <div class="footer-bottom">
        <p>&copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos reservados.</p>
    </div>
   </footer>
    </div>
  );
};
