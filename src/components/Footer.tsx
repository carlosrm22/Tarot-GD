import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-section">
          <h3>Aviso de Uso y Discreción</h3>
          <p>Este sitio web ha sido desarrollado para uso exclusivo de los iniciados en el nivel de <strong>Practicus 3=8</strong> de la <strong>Orden Hermética de la Aurora Dorada</strong>. En consecuencia, se exige la mayor discreción en el manejo y divulgación del contenido aquí presentado.</p>
        </section>

        <section className="footer-section">
          <h3>Libre de Derechos de Autor</h3>
          <p>Todo el material disponible en esta web es de uso libre y público, sin derechos de autor, dado que procede de fuentes que han sido publicadas de forma abierta. En particular, se han tomado referencias de los escritos de Israel Regardie sobre la Aurora Dorada, principalmente su obra:</p>
          <blockquote>
            <strong>Israel Regardie.</strong><br />
            <em>The Golden Dawn: The Original Account of the Teachings, Rites and Ceremonies of the Hermetic Order.</em> 1937.
          </blockquote>
        </section>

        <section className="footer-section">
          <h3>Disclaimers y Condiciones de Uso</h3>
          <ol>
            <li><strong>Fines Informativos:</strong> La información contenida en este sitio se proporciona únicamente con fines de estudio y no reemplaza las enseñanzas o directrices formales de la Orden u otros organismos iniciáticos.</li>
            <li><strong>Responsabilidad del Usuario:</strong> El uso de los textos, rituales o métodos expuestos en esta web es responsabilidad exclusiva del practicante. Quien los implemente asume todo riesgo y consecuencias derivadas de su práctica.</li>
            <li><strong>No Sustituye Asesoría Profesional:</strong> El contenido de esta web no debe entenderse como asesoría médica, psicológica, legal o de cualquier otro ámbito profesional.</li>
            <li><strong>Privacidad y Seguridad:</strong> Se exhorta a los usuarios a mantener bajo estricta confidencialidad cualquier información esotérica o personal que intercambien mediante este sitio o sus secciones privadas.</li>
            <li><strong>Propiedad Intelectual:</strong> Aunque el contenido se haya obtenido de fuentes libres de derechos o de dominio público, en caso de citar extractos completos o fragmentos sustanciales, se recomienda respetar la referencia bibliográfica correspondiente.</li>
          </ol>
        </section>

        <section className="footer-section">
          <h3>Uso Exclusivo de Miembros Iniciados</h3>
          <p>Al acceder y utilizar este sitio, el usuario declara ser miembro iniciado en el grado de Practicus 3=8, o estar en proceso de iniciación supervisada, aceptando así los lineamientos éticos y de discreción propios de la Tradición de la Orden Hermética de la Aurora Dorada.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;