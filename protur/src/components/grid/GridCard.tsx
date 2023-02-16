import React, { useState } from 'react';
import { DownloadPopUp } from '../../containers/download/pop-up';
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
      <img src={props.img} alt={props.alt} onClick={handleClick} className="rounded-lg h-60 object-cover w-full drop-shadow-lggit cursor-pointer" />

      {showPopup && (
        <DownloadPopUp imgsrc={props.img} img={props.alt} handleFunc={handleDescarga} setShowPopup={setShowPopup} linksrc={props.linksrc}/>
      )}
    </>
  );
}

export default GridCard;