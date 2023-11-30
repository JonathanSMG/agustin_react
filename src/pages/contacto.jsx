import React from 'react';
import '../css/contact.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

export const Contacto = (props) => {
  return (
    <div> 
       <header className="cabeza">
            <nav id="navbar">
            <img id="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo" />

            <div id="navbar_buttons">
                <div id="nav-links">
                <button onClick={() => props.onFormSwitch('main')}>INICIO</button>
                <button onClick={() => props.onFormSwitch('login')}>INICIAR SESIÓN</button>
                <button onClick={() => props.onFormSwitch('signup')}>REGISTRARSE</button>
                <button onClick={() => props.onFormSwitch('contacto')}>CONTACTO</button>
                </div>
            </div>
            </nav>
        </header>  
    <div className="main-container">
      <div className="contacto-container">
        <h2>CONTACTO</h2>
        <p>
          Nos enorgullece recibir sus consultas y mensajes. <br />Por favor,
          complete el formulario a continuación para ponerse en contacto con
          nosotros.
        </p>
        <img src={process.env.PUBLIC_URL + '/contact.gif'} alt="Contacto" />
      </div>

      {/* Formulario de Contacto */}
      <div className="contacto-form">
        <h3 align="center">Formulario de Contacto</h3>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="correo">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

          <button id="enviar">Enviar</button>

        </form>
      </div>
    </div>
    <footer>
      <div class="footer-bottom">
        <p>
          &copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
    </div>
  );
};

