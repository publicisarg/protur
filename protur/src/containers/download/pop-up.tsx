import logo from '../../../public/logoblack.svg'
import logovisit from '../../../public/logovisit.svg'
import { IconButtomLeft, IconButtomRight, IconButtomRightDark } from '../../common /buttoms'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const DownloadPopUp = (props: any) => {

  const [redirectPage, setRedirectPage] = useState(false);
 
  const handleDescarga = () => {
    const descarga = document.createElement('a');
    descarga.href = props.imgdwn;
    descarga.download = 'Paisaje-Argentina.jpg';
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
  }

  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();

  function handleClose() {
    control1.start('hidden1');
    control2.start('hidden2');
    control3.start('hidden3');
    setTimeout(() => {
      control.start('hidden');
    }, 500);
    setTimeout(() => {
      props.setShowPopup(false);
    }, 1200);
  }

  useEffect(() => {
    control.start('visible');
    control1.start('visible1');
    control2.start('visible2');
    control3.start('visible3');
  });

  const variantes = {
    visible: { opacity: 1, transition: { duration: 0.25 }, x: 0, y: 0 },
    visible1: { opacity: 1, transition: { duration: 1 }, x: 0, y: 0 },
    visible2: { opacity: 1, scale: 1, transition: { duration: 0.5 }, x: 0, y: 0 },
    visible3: { opacity: 1, transition: { duration: 1 }, x: 0, y: 0 },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    hidden1: { opacity: 0, y: -100, transition: { duration: 1 } },
    hidden2: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    hidden3: { opacity: 0, y: 100, transition: { duration: 1 } }
  }

  function changePage(data:any) {
    control1.start('hidden1');
    control2.start('hidden2');
    control3.start('hidden3');
    setTimeout(() => {
      control.start('hidden');
    }, 500);
    setTimeout(() => {
      setRedirectPage(true);
    }, 1200);
    setTimeout(() => {
      control.start('visible');
      control1.start('visible1');
      control2.start('visible2');
      control3.start('visible3');
    }, 1250);
  }

  return (
    <>
      { !redirectPage && <motion.div variants={variantes} initial="hidden" animate={control} className="popup h-[100vh] grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container px-12 py-8 rounded-lg flex flex-col z-50 justify-center items-center bg-transparent max-w-screen-lg">
          <div className='w-full flex justify-start items-start'>
            <motion.img variants={variantes} initial="hidden1" animate={control1} src={logo} onClick={handleClose} className="pb-6 w-36 cursor-pointer" />
          </div>
          <div className='relative'>
            <motion.img variants={variantes} initial="hidden2" animate={control2} className="rounded-lg w-auto auxheightcorrection" src={props.imgsrc} />
            <motion.div variants={variantes} initial="hidden" whileHover="visible" className='absolute w-full h-full inset-0 flex justify-center items-center gap-4 bg-black/30 rounded-lg'>
              <a onClick={handleDescarga}><IconButtomLeft name={"Download wallpaper"} /></a>
              <span className='cursor-pointer' onClick={() => changePage(true)}><IconButtomRightDark name={"Work here"} /></span>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end w-full mt-6 gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a variants={variantes} initial="hidden3" animate={control3} onClick={handleDescarga}><IconButtomLeft name={"Download wallpaper"} /></motion.a>
              <motion.span variants={variantes} initial="hidden3" animate={control3} onClick={() => changePage(true)}><IconButtomRightDark name={"Work here"} /></motion.span>
            </div>
          </div>
        </div>
      </motion.div>}

      { redirectPage && <motion.div variants={variantes} initial="hidden" animate={control} className="popup h-[100vh] grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50 bg-white">
        <div className='flex flex-col justify-start items-center h-full w-full'>
          <div className='flex flex-row justify-around items-center w-full'>
            <motion.img variants={variantes} initial="hidden1" animate={control1} src={logo} onClick={handleClose} className="my-6 w-32 cursor-pointer" />
            <motion.img variants={variantes} initial="hidden1" animate={control1} src={logovisit} onClick={handleClose} className="my-6 w-32 cursor-pointer" />
          </div>
          <motion.div variants={variantes} initial="hidden2" animate={control2} className='h-3/4 w-full bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: 'url("' + props.imgdwn + '")' }}>
            <div className="w-full h-full flex justify-center items-center flex-col gap-12 backdrop-brightness-50">
              <div className="flex justify-center items-center flex-col gap-3">
                <p className='text-white text-2xl font-myriadpro'>Work from</p>
                <h3 className='text-white text-5xl font-myriadpro border-t-4 border-b-4 border-white py-3 px-12'>{props.alt}</h3>
                <p className='text-white text-2xl font-myriadpro'>Argentina</p>
              </div>
              <a href={props.linksrc} target='_blank'>
                <span className="text-white px-6 pt-3 pb-2 text-lg font-myriadpro rounded bg-[#2F2B83] cursor-pointer">Get more info!</span>
              </a>
            </div>
          </motion.div>
          <span className='w-full h-4 bg-gradient-to-r from-[#520BFF] to-[#52E6FF] bg-blue-500' />
        </div>

      </motion.div> }
    </>
  )
}