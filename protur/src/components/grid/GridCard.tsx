import React, { useState } from 'react';
import { Download } from '../../containers/download/normal';
import logo from '../../../public/logoblack.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { Close } from 'grommet-icons';



function GridCard(props:any) {
  const handleDescarga = () => {
    const descarga = document.createElement('a');
    descarga.href = props.img;
    descarga.download = 'Paisaje-Argentina.jpg';
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  const [showPopup, setShowPopup] = useState(false);

  function handleClick() {
    setShowPopup(true);
  }
  function handleClose() {
    setShowPopup(false);
  }

  return (
    <>
      <img src={props.img} alt={props.alt} onClick={handleClick} className="rounded-lg h-60 object-cover w-full" />

      {showPopup && (
        <div className="popup h-full grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50 bg-white">
          <div className="container px-12 py-8 rounded-lg flex flex-col z-50 justify-center items-center bg-white">
            <img src={logo} className="pb-6 w-40" />
            <img className="rounded-lg md:max-w-[70%] w-full" src={props.img} />
            <div className="flex flex-col sm:flex-row justify-between w-full mt-6 gap-4 sm:gap-0">
              <div onClick={handleClose}><IconButtomRight name={"Volver"} /></div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={props.imgsrc} download={props.img} onClick={handleDescarga}><IconButtomLeft name={"Descargar fondo"} /></a>
                <a href={props.linksrc}><IconButtomRightDark name={"Trabajar aquí"} /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GridCard;