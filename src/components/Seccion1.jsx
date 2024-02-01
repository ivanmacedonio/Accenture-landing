import React from "react";
import arrow from '../assets/arrow.svg';
import "../styles/Seccion1.css";
export const Seccion1 = () => {
  return (
    <div className="seccion1Container">
      <div className="seccion1Text">
        <h1>Soluciones Informáticas</h1>
        <p>
          Ofrecemos soluciones integrales para optimizar el rendimiento y
          seguridad de las computadoras de nuestros clientes en CABA y Buenos
          Aires.{" "}
        </p>
        <label>
        <img src={arrow} alt="" />
        <a href="#hrefnosotros">Ver más</a>
        </label>
      </div>
    </div>
  );
};