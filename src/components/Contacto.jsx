import React from "react";
import "../styles/Contacto.css";
export const Contacto = () => {
  return (
    <div className="contactoContainer" id="hrefcontacto">
      <div className="sideA"></div>
      <div className="sideB">
        <h1>Contacto</h1>
        <h3>En breve te respondemos...</h3>
        <div className="formContacto">
          <form>
            <input type="text" name="" id="" placeholder="Nombre" />
            <input type="number" name="" id="" placeholder="Teléfono"  />
            <input type="text" name="" id="double" placeholder="Email"  />
            <input type="text" name="" id="message" placeholder="Mensaje"  />
            <button type="submit" id="double">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
