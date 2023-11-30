import React, { useState,useRef  } from 'react';
import '../css/signup.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

export const Signup = (props) => {
  const nombreInput = useRef(null);
  const apellidoInput = useRef(null);
  const numeroCedulaInput = useRef(null);
  const correoInput = useRef(null);
  const contraseñaInput = useRef(null);
  const confirmarContrasenaInput = useRef(null);
  const celularInput = useRef(null);
  const direccionInput = useRef(null);

  const [nombreMensaje, setNombreMensaje] = useState('');
  const [apellidoMensaje, setApellidoMensaje] = useState('');
  const [numeroCedulaMensaje, setNumeroCedulaMensaje] = useState('');
  const [correoMensaje, setCorreoMensaje] = useState('');
  const [contraseñaMensaje, setContraseñaMensaje] = useState('');
  const [confirmarContrasenaMensaje, setConfirmarContrasenaMensaje] = useState('');
  const [celularMensaje, setCelularMensaje] = useState('');
  const [direccionMensaje, setDireccionMensaje] = useState('');

  const validarNombre = () => {
    const valor = nombreInput.current.value.trim();
    if (valor === '') {
      setNombreMensaje('⚠️ Este campo no puede estar vacío');
    } else if (valor.length < 3) {
      setNombreMensaje('⚠️ Debe tener al menos 3 caracteres');
    } else {
      setNombreMensaje('');
    }
  };
  
  const validarApellido = () => {
    const valor = apellidoInput.current.value.trim();
    if (valor === '') {
      setApellidoMensaje('⚠️ Este campo no puede estar vacío');
    } else if (valor.length < 3) {
      setApellidoMensaje('⚠️ Debe tener al menos 3 caracteres');
    } else {
      setApellidoMensaje('');
    }
  };
  
  const validarNumeroCedula = () => {
    const valor = numeroCedulaInput.current.value.trim();
    if (valor === '') {
      setNumeroCedulaMensaje('⚠️ Este campo no puede estar vacío');
    } else if (valor.length !== 10) {
      setNumeroCedulaMensaje('⚠️ Debe tener exactamente 10 números');
    } else {
      setNumeroCedulaMensaje('');
    }
  };
  
  const validarCorreo = () => {
    const valor = correoInput.current.value.trim();
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === '') {
      setCorreoMensaje('⚠️ Este campo no puede estar vacío');
    } else if (!expresionCorreo.test(valor)) {
      setCorreoMensaje('⚠️ Ingresa un correo electrónico válido');
    } else {
      setCorreoMensaje('');
    }
  };
  
  const validarContraseña = () => {
    const valor = contraseñaInput.current.value.trim();
    if (valor === '') {
      setContraseñaMensaje('⚠️ Este campo no puede estar vacío');
    } else if (valor.length < 8) {
      setContraseñaMensaje('⚠️ La contraseña debe tener al menos 8 caracteres');
    } else {
      setContraseñaMensaje('');
    }
  };
  
  const validarConfirmarContraseña = () => {
    const contraseña = contraseñaInput.current.value.trim();
    const confirmarContraseña = confirmarContrasenaInput.current.value.trim();
  
    if (confirmarContraseña === '') {
      setConfirmarContrasenaMensaje('⚠️ Este campo no puede estar vacío');
    } else if (contraseña !== confirmarContraseña) {
      setConfirmarContrasenaMensaje('⚠️ Las contraseñas no coinciden');
    } else {
      setConfirmarContrasenaMensaje('');
    }
  };
  
  const validarCelular = () => {
    const valor = celularInput.current.value.trim();
    if (valor === '') {
      setCelularMensaje('⚠️ Este campo no puede estar vacío');
    } else if (valor.length !== 10) {
      setCelularMensaje('⚠️ Debe tener exactamente 10 números');
    } else {
      setCelularMensaje('');
    }
  };
  
  const validarDireccion = () => {
    const valor = direccionInput.current.value.trim();
    if (valor === '') {
      setDireccionMensaje('⚠️ Este campo no puede estar vacío');
    } else {
      setDireccionMensaje('');
    }
  };
  const handleRegistro = () => {
    // Restablecer mensajes de éxito/error
    setNombreMensaje('');
    setApellidoMensaje('');
    setNumeroCedulaMensaje('');
    setCorreoMensaje('');
    setContraseñaMensaje('');
    setConfirmarContrasenaMensaje('');
    setCelularMensaje('');
    setDireccionMensaje('');
  
    // Validar campos nuevamente antes de procesar el registro
    validarNombre();
    validarApellido();
    validarNumeroCedula();
    validarCorreo();
    validarContraseña();
    validarConfirmarContraseña();
    validarCelular();
    validarDireccion();
  
    // Verificar si hay algún mensaje de error
    if (
      nombreMensaje !== '' ||
      apellidoMensaje !== '' ||
      numeroCedulaMensaje !== '' ||
      correoMensaje !== '' ||
      contraseñaMensaje !== '' ||
      confirmarContrasenaMensaje !== '' ||
      celularMensaje !== '' ||
      direccionMensaje !== ''
    ) {
      // Mostrar mensaje de error
      alert('Por favor, corrige los errores antes de registrar.');
    } else {
      // Si no hay mensajes de error, proceder con el registro
      const nuevoUsuario = {
        nombre: nombreInput.current.value.trim(),
        apellido: apellidoInput.current.value.trim(),
        numeroCedula: numeroCedulaInput.current.value.trim(),
        correo: correoInput.current.value.trim(),
        contraseña: contraseñaInput.current.value.trim(),
        celular: celularInput.current.value.trim(),
        direccion: direccionInput.current.value.trim(),
      };
  
      // Verificar que todos los campos estén llenos antes de agregar a la lista
      if (
        nuevoUsuario.nombre &&
        nuevoUsuario.apellido &&
        nuevoUsuario.numeroCedula &&
        nuevoUsuario.correo &&
        nuevoUsuario.contraseña &&
        nuevoUsuario.celular &&
        nuevoUsuario.direccion
      ) {
        // Obtener la lista de usuarios almacenados en localStorage
        const listaUsuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
  
        // Agregar el nuevo usuario a la lista
        listaUsuarios.push(nuevoUsuario);
  
        // Guardar la lista actualizada en localStorage
        localStorage.setItem('Usuarios', JSON.stringify(listaUsuarios));
  
        // Restablecer campos y mensajes
        nombreInput.current.value = '';
        apellidoInput.current.value = '';
        numeroCedulaInput.current.value = '';
        correoInput.current.value = '';
        contraseñaInput.current.value = '';
        confirmarContrasenaInput.current.value = '';
        celularInput.current.value = '';
        direccionInput.current.value = '';
  
        // Restablecer mensajes de éxito
        alert('Registro exitoso');
        props.onFormSwitch('login');
      } else {
        // Mostrar mensaje de error si algún campo está vacío
        alert('Por favor, completa todos los campos antes de registrar.');
      }
    }
  };
  

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
	  <div id="signup-container-reg">
  <div className="signup-form-princi" >
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ flex: 1, padding: 20 }}>
      <h2 id="h2">REGISTRO</h2>
      <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" ref={nombreInput} onBlur={validarNombre} required />
        <span style={{ color: 'red' }}>{nombreMensaje}</span>

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" ref={apellidoInput} onBlur={validarApellido} required />
        <span style={{ color: 'red' }}>{apellidoMensaje}</span>

        <label htmlFor="numeroCedula">Número de Cédula:</label>
        <input type="text" id="numeroCedula" name="numeroCedula" ref={numeroCedulaInput} onBlur={validarNumeroCedula} required />
        <span style={{ color: 'red' }}>{numeroCedulaMensaje}</span>

        <label htmlFor="correo">Correo Electrónico:</label>
        <input type="email" id="correo" name="correo" ref={correoInput} onBlur={validarCorreo} required />
        <span style={{ color: 'red' }}>{correoMensaje}</span>
      </div>

      
      <div style={{ flex: 1, padding: 20 }}>
        <h2> </h2>
        <label htmlFor="celular">Celular:</label>
        <input type="text" id="celular" name="celular" ref={celularInput} onBlur={validarCelular} required />
        <span style={{ color: 'red' }}>{celularMensaje}</span>

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" ref={direccionInput} onBlur={validarDireccion} required />
        <span style={{ color: 'red' }}>{direccionMensaje}</span>

         <label htmlFor="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" ref={contraseñaInput} onBlur={validarContraseña} required />
        <span style={{ color: 'red' }}>{contraseñaMensaje}</span>

        <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
        <input type="password" id="confirmarContraseña" name="confirmarContraseña" ref={confirmarContrasenaInput} onBlur={validarConfirmarContraseña} required />
        <span style={{ color: 'red' }}>{confirmarContrasenaMensaje}</span>

      </div>
    </div>
    <div style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
        <button id="boton" onClick={handleRegistro} >
          Registrar
        </button>
      </div>
	</div>
	   </div>

     {/* PIE DE PAGINA */}
     <footer>
          <div className="footer-botton">
            <p>
              &copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
  </div>
  );
};

