import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const DownloadPopUp = (props: any) => {

  const handleDescarga = () => {
    const descarga = document.createElement('a');
    descarga.href = props.imgsrc;
    descarga.download = 'Paisaje-Argentina.jpg';
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  function handleClose() {
    props.setShowPopup(false);
  }

  const variantes = {
    visible: { opacity: 1, transition:{duration: 0.25}, x: 0, y: 0},
    visible1: { opacity: 1, transition:{duration: 1}, x: 0, y: 0},
    visible2: { opacity: 1, transition:{duration: 1}, x: 0, y: 0},
    visible3: { opacity: 1, transition:{duration: 1}, x: 0, y: 0},
    hidden: {opacity: 0},
    hidden1: { opacity: 0, x: -1000 },
    hidden2: { opacity: 0, x: 1000 },
    hidden3: { opacity: 0, y: 100 }
  }

    return ( 
      <motion.div variants={variantes} initial="hidden" animate="visible" className="popup h-[100vh] grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container px-12 py-8 rounded-lg flex flex-col z-50 justify-center items-center bg-transparent max-w-screen-lg">
          <motion.img variants={variantes} initial="hidden1" animate="visible1" src={logo} className="pb-6 w-40" />
          <motion.img variants={variantes} initial="hidden2" animate="visible2" className="rounded-lg md:max-h-[50vh] w-auto" src={props.imgsrc} />
          <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-4 sm:gap-0">
            <motion.div variants={variantes} initial="hidden3" animate="visible3" onClick={handleClose}><IconButtomRight name={"Volver"} /></motion.div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a variants={variantes} initial="hidden3" animate="visible3" onClick={handleDescarga}><IconButtomLeft name={"Descargar fondo"} /></motion.a>
              <motion.a variants={variantes} initial="hidden3" animate="visible3" href={props.linksrc}><IconButtomRightDark name={"Trabajar aquí"} /></motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    )
}