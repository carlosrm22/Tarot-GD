/**
 * @fileoverview Componente principal de la aplicación de Tarot.
 * Gestiona la visualización de los Arcanos Mayores, el sistema de autenticación,
 * y la interacción con el Árbol de la Vida.
 */

import React, { useState, useEffect } from 'react';
import './App.css';
import arcanosMayoresData from './Arcanos_Mayores_Tarot.json';
import { ArcanosMayores, Carta } from './types/tarot';
import Nav from './components/Nav.tsx';
import Lecturas from './components/Lecturas.tsx';
import TodasLasCartas from './components/TodasLasCartas.tsx';

/**
 * Componente principal App
 *
 * Características principales:
 * - Sistema de autenticación para iniciados
 * - Visualización interactiva de las cartas del Tarot
 * - Integración con el Árbol de la Vida
 * - Sistema de temas claro/oscuro
 * - Gestión de estados para cartas y detalles
 *
 * @component
 * @returns {JSX.Element} Aplicación completa de Tarot
 */
function App() {
  // Carga los datos de los Arcanos Mayores
  const { arcanos: { arcanos_mayores } } = arcanosMayoresData as ArcanosMayores;

  /**
   * Estado para gestionar las cartas volteadas
   * @type {Object.<number, boolean>}
   */
  const [cartasVolteadas, setCartasVolteadas] = useState<{ [key: number]: boolean }>({});

  /**
   * Estado para gestionar los detalles expandidos de cada carta
   * @type {Object.<string, boolean>}
   */
  const [detallesExpandidos, setDetallesExpandidos] = useState<{
    [key: string]: boolean;
  }>({});

  /**
   * Verifica si la sesión del usuario ha expirado
   * @returns {boolean} true si la sesión es válida
   */
  const isSessionValid = () => {
    const expirationTime = localStorage.getItem('sessionExpiration');
    if (!expirationTime) return false;
    return parseInt(expirationTime) > Date.now();
  };

  /**
   * Estado de autenticación del usuario
   * @type {boolean}
   */
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isInitiated') === 'true' && isSessionValid();
  });

  // Estados adicionales
  const [fraseMistica, setFraseMistica] = useState('');
  const [error, setError] = useState('');

  /**
   * Estado del tema (claro/oscuro)
   * Se inicializa con la preferencia del sistema
   */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Efectos para gestionar el tema
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //if (fraseMistica.toUpperCase() === "KHABS AM PEKHT") {
    if (fraseMistica.toUpperCase() === "QUIERO PENE") {
      setIsAuthenticated(true);
      localStorage.setItem('isInitiated', 'true');
      // Establecer expiración en 24 horas
      const expirationTime = Date.now() + (1 * 60 * 60 * 1000);
      localStorage.setItem('sessionExpiration', expirationTime.toString());
      setError('');
    } else {
      setError('La frase mística es incorrecta. Medita y vuelve a intentar.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isInitiated');
    localStorage.removeItem('sessionExpiration');
    setFraseMistica('');
    setError('');
    setCartasVolteadas({});
    setDetallesExpandidos({});
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const getImagePath = (numero: number, nombre: string) => {
    const nombresEspeciales: { [key: string]: string } = {
      "La Sacerdotisa": "La Gran Sacerdotisa",
      "El Carro": "La Carroza",
      "La Rueda de la Fortuna": "La Rueda de la Fortuna",
      "Templanza": "La Templanza",
    };

    const nombreArchivo = nombresEspeciales[nombre] || nombre;
    return `${process.env.PUBLIC_URL}/images/${numero} ${nombreArchivo}.png`;
  };

  const toggleCard = (numero: number) => {
    setCartasVolteadas(prev => ({
      ...prev,
      [numero]: !prev[numero]
    }));
  };

  const toggleAllDetalles = (cartaId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const detalles = ["numero", "hebreo", "signo", "atribucion", "sendero", "significado"];
    const algunoExpandido = detalles.some(detalle => isDetalleExpandido(cartaId, detalle));

    const nuevoEstado = { ...detallesExpandidos };
    detalles.forEach(detalle => {
      nuevoEstado[`${cartaId}-${detalle}`] = !algunoExpandido;
    });

    setDetallesExpandidos(nuevoEstado);
  };

  const toggleDetalle = (cartaId: number, detalle: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const key = `${cartaId}-${detalle}`;
    setDetallesExpandidos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isDetalleExpandido = (cartaId: number, detalle: string) => {
    return detallesExpandidos[`${cartaId}-${detalle}`] || false;
  };

  // Verificar la expiración periódicamente
  useEffect(() => {
    const checkSession = () => {
      if (isAuthenticated && !isSessionValid()) {
        handleLogout();
      }
    };

    const interval = setInterval(checkSession, 60000); // Verificar cada minuto
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const [mostrarTodasLasCartas, setMostrarTodasLasCartas] = useState(true);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="login-container">
          <form onSubmit={handleLogin} className="login-form">
            <h2>Portal de Iniciados</h2>
            <p>Ingresa la frase mística para acceder al conocimiento oculto.</p>
            <div className="input-group">
              <input
                type="text"
                value={fraseMistica}
                onChange={(e) => setFraseMistica(e.target.value)}
                placeholder="Frase Mística"
                className="mystic-input"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">
              Iniciar el Viaje
            </button>
            <p className="hint">
              Pista: Luz en Extensión (en el lenguaje de los antiguos egipcios)
            </p>
          </form>
        </div>
      ) : (
        <>
          <Nav
            isDarkMode={isDarkMode}
            onThemeToggle={toggleTheme}
            onLogout={handleLogout}
          />
          <main>
            <Lecturas
              cartas={arcanos_mayores}
              getImagePath={getImagePath}
            />
            <TodasLasCartas
              cartas={arcanos_mayores}
              getImagePath={getImagePath}
            />
          </main>
        </>
      )}
      <p className="donation-message">
        Si te gusta el proyecto, págame dinero para que pueda seguir trabajando
        en él ok?
      </p>
      <footer className="footer">
        <div className="footer-content">
          <h2>Aviso de Uso y Discreción</h2>
          <p>
            Este sitio web ha sido desarrollado para uso exclusivo de los
            iniciados en el nivel de <strong>Practicus 3=8</strong> de la{" "}
            <strong>Orden Hermética de la Aurora Dorada</strong>. En
            consecuencia, se exige la mayor discreción en el manejo y
            divulgación del contenido aquí presentado.
          </p>

          <h2>Libre de Derechos de Autor</h2>
          <p>
            Todo el material disponible en esta web es de uso libre y público,
            sin derechos de autor, dado que procede de fuentes que han sido
            publicadas de forma abierta. En particular, se han tomado
            referencias de los escritos de Israel Regardie sobre la Aurora
            Dorada, principalmente su obra:
          </p>

          <blockquote>
            <strong>Israel Regardie.</strong>
            <br />
            <em>
              The Golden Dawn: The Original Account of the Teachings, Rites and
              Ceremonies of the Hermetic Order.
            </em>{" "}
            1937.
          </blockquote>

          <p>
            En los apartados relativos al Tarot, se complementa con extractos de
            la misma bibliografía.
          </p>

          <h2>Disclaimers y Condiciones de Uso</h2>
          <ul>
            <li>
              <strong>Fines Informativos:</strong> La información contenida en
              este sitio se proporciona únicamente con fines de estudio y no
              reemplaza las enseñanzas o directrices formales de la Orden u
              otros organismos iniciáticos.
            </li>
            <li>
              <strong>Responsabilidad del Usuario:</strong> El uso de los
              textos, rituales o métodos expuestos en esta web es
              responsabilidad exclusiva del practicante. Quien los implemente
              asume todo riesgo y consecuencias derivadas de su práctica.
            </li>
            <li>
              <strong>No Sustituye Asesoría Profesional:</strong> El contenido
              de esta web no debe entenderse como asesoría médica, psicológica,
              legal, espiritual o de cualquier otro ámbito.
            </li>
            <li>
              <strong>Privacidad y Seguridad:</strong> Se exhorta a los usuarios
              a mantener bajo estricta confidencialidad cualquier información
              esotérica o personal que intercambien mediante este sitio o sus
              secciones privadas.
            </li>
            <li>
              <strong>Propiedad Intelectual:</strong> Aunque el contenido se
              haya obtenido de fuentes libres de derechos o de dominio público,
              en caso de citar extractos completos o fragmentos sustanciales, se
              recomienda respetar la referencia bibliográfica correspondiente.
            </li>
          </ul>

          <h2>Uso Exclusivo de Miembros Iniciados</h2>
          <p>
            Al acceder y utilizar este sitio, el usuario declara ser miembro
            iniciado en el grado de Practicus 3=8, o estar en proceso de
            iniciación supervisada, aceptando así los lineamientos éticos y de
            discreción propios de la Tradición de la Orden Hermética de la
            Aurora Dorada.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
