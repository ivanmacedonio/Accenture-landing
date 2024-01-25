import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Clientes } from "../components/Clientes";
import { Contacto } from "../components/Contacto";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { Nosotros } from "../components/Nosotros";
import { Seccion1 } from "../components/Seccion1";
import { Servicios } from "../components/Servicios";
import { Trabajos } from "../components/Trabajos";
import "../styles/MainPage.css";
export const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarImagenes = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    cargarImagenes();
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <div className="loadingContainer">
          <Loader></Loader>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition={{duration: 0.7}}>
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
          </motion.div>
        </AnimatePresence>
      )}
    </React.Fragment>
  );
};
