import { motion } from "framer-motion";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import "../styles/Header.css";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="headerGeneralcontainer">
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={logo} alt="" />
        </div>
        <div className="linksContainer">
          <a>Inicio</a>
          <a href="#hrefservicios">Servicio</a>
          <a href="#hrefnosotros">Nosotros</a>
          <a href="#hrefclientes">Clientes</a>
          <a id="contact" href="#hrefcontacto">
            Contacto
          </a>
        </div>
        <div
          className="linksContainerMobile"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <motion.div whileTap={{ scale: 1.2 }}>
            {" "}
            <img src={menu} alt="" />
          </motion.div>
        </div>
      </div>
      <motion.div
        className="desplegable"
        animate={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}
        transition={{ duration: 0.5 }}
      >
        <a>Inicio</a>
        <a href="#hrefservicios">Servicio</a>
        <a href="#hrefnosotros">Nosotros</a>
        <a href="#hrefclientes">Clientes</a>
        <a id="contact" href="#hrefcontacto">
          Contacto
        </a>
      </motion.div>
    </div>
  );
};
