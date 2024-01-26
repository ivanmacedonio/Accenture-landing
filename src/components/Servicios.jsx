import { motion } from "framer-motion";
import React from "react";
import cableado from "../assets/cableadop.svg";
import control from "../assets/control.svg";
import hand from "../assets/hand.svg";
import licencia from "../assets/licencia.svg";
import lock from "../assets/lock.svg";
import pc from "../assets/pc.svg";
import "../styles/Servicios.css";
export const Servicios = () => {
  return (
    <div className="serviciosContainer" id="hrefservicios">
      <div className="serviciosText">
        <h1>Servicios</h1>
        <h3>
          Contamos con planes de mantenimiento, reparación y consultoría para
          prevenir y solucionar problemas, orientado a empresas y usuarios
          particulares.
        </h3>
      </div>

      <motion.div
        className="serviciosList"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="cardServicios">
          <img src={pc} alt="" />
          <h2>Servicio Técnico</h2>
          <p>
            Servicio técnico para Apple, PC, notebook, servers, All in One,
            monitores e impresoras. Todas las marcas, todos los modelos
          </p>
        </div>
        <div className="cardServicios">
          <img src={hand} alt="" />
          <h2>Asesoramiento</h2>
          <p>
            Brindamos asesoría personalizada para armar PCs según las
            necesidades de cada cliente, con software adecuado para un alto
            rendimiento y eficiencia
          </p>
        </div>
        <div className="cardServicios">
          <img src={lock} alt="" />
          <h2>Seguridad y Monitoreo</h2>
          <p>
            Instalación de cámaras de seguridad, sistemas domiciliarios y para
            empresas, protección las 24 hs y monitoreo desde tu celular
          </p>
        </div>
        <div className="cardServicios">
          <img src={control} alt="" />
          <h2>Control de Acceso</h2>
          <p>
            Instalación y configuración de Sistemas de control de acceso con
            huella o pin. Software de gestión para control de horario y acceso
          </p>
        </div>
        <div className="cardServicios">
          <img src={cableado} alt="" />
          <h2>Cableado Estructurado</h2>
          <p>
            Tendido de cableado estructurado y certificación de puestos. Armado
            de Redes cableadas y WiFi
          </p>
        </div>
        <div className="cardServicios">
          <img src={licencia} alt="" />
          <h2>Licencias de software</h2>
          <p>
            Software legal y auditorias. Relevamiento de tu infraestructura e
            informe de tu estado actual del licenciamiento de software
          </p>
        </div>
      </motion.div>
    </div>
  );
};
