import { useState, useEffect } from 'react';
import { DownloadPopUp } from '../../containers/download/pop-up';
import { motion, useAnimation } from "framer-motion";

function GridCard(props: any) {
  const handleDescarga = () => {
    const descarga = document.createElement('a');
    descarga.href = props.img;
    descarga.download = props.alt;
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  const [showPopup, setShowPopup] = useState(false);
  const control = useAnimation();

  const variantes = {
    visible: { opacity: 1, transition: { duration: 0.25 } },
    hidden: { opacity: 0, transition: { duration: 0.25 } }
  }

  const descripcion = {
    hover: { opacity: 1, transition: { duration: 0.3 }, x: 0, scale: 1 },
    rotated: { opacity: 1, transition: { duration: 0.3 }, scale: 1.01 },
    rotatedClick: { opacity: 1, transition: { duration: 0.3 }, scale: 1.01 },
    rest: { opacity: 0, transition: { duration: 0.3 }, scale: 1 }
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
   // control.start("rotatedClick");
    //setTimeout(() => {
      setShowPopup(true);
    //}, 500);
  }

  return (
    <>
      <motion.div variants={descripcion} initial="visible" whileHover="rotated" animate={control} className="relative w-full h-full inset-0 mx-0 my-0">
        <motion.img src={'https://desarrollodesitios0.site/protur/public/lugares/'+ props.alt +'/small/' + props.img_small + '.jpg-small.jpg'} alt={props.alt} className="rounded h-60 object-cover w-full" />
        <motion.p variants={variantes} initial="hidden" whileHover="visible" onClick={handleClick} className="cursor-pointer backdrop-blur-sm absolute inset-0 justify-center items-center flex text-white bg-black/50 rounded">
          {props.alt}
        </motion.p>
      </motion.div>


      {showPopup && (
        <DownloadPopUp imgsrc={props.img} img={props.alt} handleFunc={handleDescarga} setShowPopup={setShowPopup} linksrc={props.linksrc} />
      )}
    </>
  );
}

export default GridCard;