import { useState, useEffect } from 'react';
import { DownloadPopUp } from '../../containers/download/pop-up';
import { motion, useAnimation } from "framer-motion";

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
  const control = useAnimation();

  const variantes = {
    visible: {opacity: 1, transition:{duration: 0.5}, x: 0, y: 0, rotate: 0, scale: 1},
    rotated: {rotate: 2, transition:{duration: 0.5}, scale: 1.05},
    hidden: {opacity: 0, x: 1000, transition:{duration: 0.25}}
  }

  useEffect(() => {
    control.start("visible");
  }, []);

  useEffect(() => {
    if (!showPopup) {
      control.start("visible");
    }
  });

  function handleClick() {
    control.start("rotated");
    setTimeout(() => {
      setShowPopup(true);
    }, 500);
  }

  return (
    <>
      <motion.img variants={variantes} initial="hidden" animate={control} src={props.img} alt={props.alt} onClick={handleClick} className="rounded-lg h-60 object-cover w-full drop-shadow-lg cursor-pointer" />

      {showPopup && (
        <DownloadPopUp imgsrc={props.img} img={props.alt} handleFunc={handleDescarga} setShowPopup={setShowPopup} linksrc={props.linksrc}/>
      )}
    </>
  );
}

export default GridCard;