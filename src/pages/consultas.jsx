import React from 'react';
import { AlumnoSection } from '../registros/consultas/AlumnoSection';
import {DocenteSection} from '../registros/consultas/DocenteSection'; 
import {AsignaturaSection} from '../registros/consultas/AsignaturaSection'; 
import {PersonalSection} from '../registros/consultas/PersonalSection'; 
import {SolicitudSection} from '../registros/consultas/SolicitudSection'; 
import {HorarioSection} from '../registros/consultas/HorarioSection'; 
import {ProyectoSection} from '../registros/consultas/ProyectoSection'; 
import {DifusionInvestigacionSection} from '../registros/consultas/DifusionInvestigacionSection'; 

import '../css/consultas.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

export const Consultas = (props) => {
  return (
    <div>
 <header className="cabeza-mainlogin">
      <nav id="navbar">
      <img id="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo" />
        <div id="navbar_buttons">
          <div id="nav-links">
          <button onClick={() => props.onFormSwitch('main')}>INICIO</button>
          <button onClick={() => props.onFormSwitch('procesos')}>PROCESOS</button>
          <button onClick={() => props.onFormSwitch('mainlogin')}>MENU</button>
          </div>
        </div>
      </nav>
    </header>

      <h1 className="titulo" style={{ textAlign: 'center' }}>¡BIENVENIDO AL PANEL DE CONSULTAS!</h1>

      <div className="consultas-container">
  <div className="column">
    {/* Sección de Alumnos */}
    <div className="column-content">
      <AlumnoSection />
    </div>

    {/* Sección de Docentes */}
    <div className="column-content">
      <DocenteSection />
    </div>

    {/* Sección de Asignaturas */}
    <div className="column-content">
      <AsignaturaSection />
    </div>

    {/* Sección de Personal */}
    <div className="column-content">
      <PersonalSection />
    </div>
  </div>

  <div className="column">
    {/* Sección de Solicitud */}
    <div className="column-content">
      <SolicitudSection />
    </div>

    {/* Sección de Horarios */}
    <div className="column-content">
      <HorarioSection />
    </div>

    {/* Sección de Proyectos de Investigación */}
    <div className="column-content">
      <ProyectoSection />
    </div>

    {/* Sección de Difusión de Investigación */}
    <div className="column-content">
      <DifusionInvestigacionSection />
    </div>
  </div>
</div>
<footer className='bajada'>
        <div className="footer-bottom">
          <p>&copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

