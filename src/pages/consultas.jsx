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

      <h1 style={{ textAlign: 'center' }}>¡BIENVENIDO AL PANEL DE CONSULTAS!</h1>

      <div className="contact-container">
      {/* Sección de Alumnos */}
      <AlumnoSection />

      {/* Sección de Docentes */}
      <DocenteSection />

      {/* Sección de Asignaturas */}
      <AsignaturaSection />

      {/* Sección de Personal */}
      <PersonalSection />

      {/* Sección de Solicitud */}
      <SolicitudSection />

      {/* Sección de Horarios */}
      <HorarioSection />

      {/* Sección de Proyectos de Investigación */}
      <ProyectoSection />

      {/* Sección de Difusión de Investigación */}
      <DifusionInvestigacionSection />
    </div>
    </div>
  );
}

