import React, { useEffect, useState } from "react";
import '../css/main.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

export const Main = (props) => {
    const [animationLoaded, setAnimationLoaded] = useState(false);

    useEffect(() => {
        // Agregar event listener para manejar el scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío asegura que el event listener se agregue solo una vez al montar el componente

    useEffect(() => {
        // Cargar la animación cuando el componente se monta
        handleScroll();

        // Indicar que la animación ha sido cargada
        setAnimationLoaded(true);
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
      };
      
      const handleScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((element) => {
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          }
        });
      };
    
      useEffect(() => {
        // Agregar event listeners cuando el componente se monta
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
    
        // Limpiar event listeners cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('load', handleScroll);
        };
      }, []); // El array vacío asegura que los event listeners se agreguen solo una vez al montar el componente    

  return (
    <div>
      {/* BARRA DE NAVEGACION */}
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

      <br />

      {/* CONTENEDOR DE TITULO MAIN*/}
      <hr className="fade-in" color="black" width="530px" />
      <div className="fade-in" id="tituloL"></div>

      <h1 id="titulo" align="center" className="fade-in">
        VICERRECTORADO DE INVESTIGACIÓN
      </h1>

      <hr className="fade-in" color="black" width="530px" />
      <div className="fade-in" id="tituloR"></div>
      <br />

      {/* CONTENEDOR DE IMG Y SOBRE VICERRECTORADO */}
      <div className="container">
        <div className="image">
          <img src={process.env.PUBLIC_URL + '/main_container.jpg'} alt="main contenedor" className="fade-in" />

        </div>

        <div className="text">
          <p className="fade-in">
            En el Vicerrectorado de Investigación de la Universidad Laica Eloy
            Alfaro de Manabí (ULEAM), estamos profundamente comprometidos con el
            fomento y el apoyo a la investigación académica, científica y
            tecnológica de la más alta calidad. Creemos en el poder transformador
            de la investigación y su capacidad para enriquecer el conocimiento en
            todas las áreas. Nuestra visión es ser un faro de excelencia
            investigativa en la región, impulsando el progreso y la innovación.
          </p>
        </div>
      </div>

      <br /><br />
      {/* CONTENEDOR DE MISION*/}
      <div className="container">
        <div className="mission">
          <h2 align="center" className="fade-in">MISIÓN</h2>

          <p className="fade-in">
            Promover y fortalecer la investigación en todas las áreas del
            conocimiento, contribuyendo al desarrollo y al avance de la ciencia y
            la tecnología en la región. Trabajamos para apoyar a nuestros
            investigadores y estudiantes en la búsqueda del conocimiento,
            proporcionando recursos, orientación y un entorno propicio para el
            desarrollo de investigaciones innovadoras.
          </p>
        </div>

        {/* CONTENEDOR DE VISION*/}
        <div className="vision">
          <h2 align="center" className="fade-in">VISIÓN</h2>

          <p className="fade-in">
            Buscamos convertirnos en un referente nacional e internacional en la
            generación de conocimiento e innovación. Queremos impulsar proyectos
            de investigación multidisciplinarios que aborden desafíos relevantes
            para la sociedad, promoviendo el desarrollo sostenible y el bienestar
            de la comunidad.
          </p>
        </div>
      </div>

      <br /><br />

      {/* CONTENEDOR DE LOS OBJETIVOS */}
      <div className="container">
        <div className="objectives">
          <h2 align="center" className="fade-in">Objetivos</h2>

          <ul className="fade-in">
            <li>
              Fomentar la investigación de calidad en todas las áreas académicas.
            </li>
            <li>
              Promover la colaboración interdisciplinaria entre investigadores y
              estudiantes.
            </li>
            <li>
              Facilitar la difusión de resultados de investigación a través de
              conferencias y publicaciones.
            </li>
          </ul>
        </div>

        {/* CONTENEDOR DE LOS SERVICIOS */}
        <div className="services">
          <h2 align="center" className="fade-in">Servicios</h2>

          <ul className="fade-in">
            <li>
              Asesoramiento y apoyo en la formulación y ejecución de proyectos de
              investigación.
            </li>
            <li>
              Acceso a laboratorios de última generación y recursos para la
              investigación.
            </li>
            <li>
              Eventos y conferencias relacionados con la investigación y la
              innovación.
            </li>
          </ul>
        </div>
      </div>

      <br /><br />

      {/* CONTENEDOR DEL CONTACTO Y MAPS */}
      <div className="contact-map">
        {/* CONTACTO */}
        <div className="contact-info fade-in">
          <h2>CONTÁCTANOS</h2>

          <p>
            Si tienes alguna consulta o necesitas más información, no dudes en
            ponerte en contacto con nosotros. Estamos aquí para apoyarte en tus
            proyectos de investigación y desarrollo.
          </p>

          <ul>
            <li>
              <b>Dirección:</b> Circunvalación – Vía San Mateo, Manta – Manabí –
              Ecuador
            </li>
            <li><b>Teléfono:</b> 2625095</li>
            <li><b>Correo Electrónico:</b> contacto@uleam.edu.ec</li>
            <li>
              <b>Horario de Atención:</b> Lunes a Viernes de 7:00 AM - 5:00 PM
            </li>
          </ul>

          <p>
            Únete a nosotros en nuestra misión de descubrimiento, innovación y
            transformación. En el Vicerrectorado de Investigación de la ULEAM,
            creemos en el poder de la investigación para cambiar el mundo.
            ¡Bienvenido a nuestro apasionante viaje de exploración del
            conocimiento!
          </p>
        </div>

        {/* MAPS */}
        <div className="map-container fade-in">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d997.3165317264444!2d-80.74699754339903!3d-0.9532607237990267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1suleam!5e0!3m2!1ses-419!2sec!4v1697589551919!5m2!1ses-419!2sec"
            width="600"
            height="420"
            style={{ border: 8 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <br /><br />

      {/* PIE DE PAGINA */}
      <footer>
        <div className="footer-bottom fade-in">
          <p>
            &copy; 2023 Vicerrectorado de Investigación, ULEAM. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
