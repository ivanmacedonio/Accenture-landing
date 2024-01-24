import React from "react";
import { Clientes } from "../components/Clientes";
import { Contacto } from "../components/Contacto";
import { Header } from "../components/Header";
import { Nosotros } from "../components/Nosotros";
import { Seccion1 } from "../components/Seccion1";
import { Servicios } from "../components/Servicios";
import { Trabajos } from "../components/Trabajos";
import "../styles/MainPage.css";
export const MainPage = () => {
  return (
    <div className="mainpageContainer">
      <div className="headerMain">
        <Header></Header>
      </div>
      <div className="mainpage">
        <Seccion1></Seccion1>
        <Servicios></Servicios>
        <Nosotros></Nosotros>
        <Clientes></Clientes>
        <Trabajos></Trabajos>
        <Contacto></Contacto>
      </div>
    </div>
  );
};
