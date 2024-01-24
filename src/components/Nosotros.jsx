import React from "react";
import imagen from "../assets/procesador.webp";
import "../styles/Nosotros.css";
export const Nosotros = () => {
  return (
    <div className="nosotrosContainer" id="hrefnosotros">
      <div className="containerImagenNosotros">
        <img src={imagen} alt="" />
      </div>
      <div className="containerTextNosotros">
        <h1>Nosotros</h1>
        <p>
          Nos enfocamos en ofrecer soluciones integrales para optimizar el
          rendimiento y la productividad de las computadoras de nuestros
          clientes. Utilizamos las mejores prácticas de seguridad para
          garantizar la protección de los datos y la información. Contamos con
          planes de mantenimiento, reparación y consultoría que permiten actuar
          como un Gerente de Sistemas, evitando y resolviendo los problemas de
          la empresa de manera preventiva, como así también usuarios
          particulares. Además, nuestro servicio está disponible en CABA y
          Buenos Aires, brindando una atención personalizada y cercana a
          nuestros clientes. Estamos comprometidos en ofrecer una experiencia de
          usuario de alta calidad y en asegurarnos de que su empresa cuente con
          un entorno tecnológico confiable y seguro.
        </p>
      </div>
    </div>
  );
};
