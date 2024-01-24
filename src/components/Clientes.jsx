import React from "react";
import google from "../assets/google.svg";
import "../styles/Clientes.css";
export const Clientes = () => {
  return (
    <div className="clientesContainer" id="hrefclientes">
      <h1>Clientes conformes</h1>
      <div className="clientesListContainer">
        <div className="listClientes">
          <p>
            {" "}
            Excelente servicio técnico, respondió a mis preguntas y me dio
            muchos consejos para mantener mi equipo actualizado. Para recomendar
            realmente
          </p>
            <label>
              <img src={google} alt="" />
              <h2>Brian A.</h2>
            </label>
        </div>
        <div className="listClientes">
          <p>
            {" "}
            Mi computadora funciona mejor que nunca, y eso que la tengo hace 4
            años, realizó unos cambios de componentes y limpieza. Lo contactaré
            de nuevo en el futuro!
          </p>
          <label>
            <img src={google} alt="" />
            <h2>Iara Guzdam.</h2>
          </label>
        </div>
        <div className="listClientes">
          <p>
            {" "}
            Solucionó mi problema rápidamente y me dio explicaciones claras. Su
            atención al cliente lo destaca entre otras experiencias que tuve.
            ¡Se los recomiendo!
          </p>
          <label>
            <img src={google} alt="" />
            <h2>Miguel Aguilera.</h2>
          </label>
        </div>
      </div>
    </div>
  );
};
