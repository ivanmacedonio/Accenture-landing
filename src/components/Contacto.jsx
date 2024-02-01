import React from "react";
import "../styles/Contacto.css";
export const Contacto = () => {
  return (
    <div className="contactoContainer" id="hrefcontacto">
      <div className="sideA"></div>
      <div className="sideB">
        <h1>Contactate con nosotros.</h1>
        <h3>En breve te respondemos...</h3>
        <div className="formContacto">
          <form>
            <label>
              <p>Nombre</p>
              <input type="text" name="" id="" placeholder="Nombre" />
            </label>
            <label>
              <p>Teléfono</p>
              <input type="number" name="" id="" placeholder="Teléfono" />
            </label>
            <label id="double">
              <p>Email</p>
              <input type="text" name=""  placeholder="Email"/>
            </label>
            <label  id="message">
              <p>Mensaje</p>
              <input type="text" name="" placeholder="Mensaje" />
            </label>
            <button type="submit" >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
