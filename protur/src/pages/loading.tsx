
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

export const Loading = () => {
  const [showPopup, setShowPopup] = useState(true);
  const controlInicio1 = useAnimation();
  const controlInicio2 = useAnimation();
  const controlInicio3 = useAnimation();
  const controlInicio4 = useAnimation();
  const controlPath = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
        controlInicio2.start("hidden2");
      setTimeout(() => {
        controlInicio3.start("hidden3");
        setTimeout(() => {
          controlInicio4.start("hidden4");
          setTimeout(() => {
            controlInicio1.start("hidden");
          }, 300);
        }, 300);
      }, 300);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }, 3000);
  }, []);

  useEffect(() => {
    controlPath.start("path1");
    setTimeout(() => {
      controlPath.start("path2");
    }, 1000);
  }, []);

  const variantesInicio = {
    visible: {opacity: 1, transition:{duration: 0.5}, x: 0, y: 0, rotate: 0, scale: 1},
    hidden: {opacity: 0, transition:{duration: 0.5}, ease: "easeOut"},
    hidden2: {opacity: 0, transition:{duration: 0.5}, x: -1000, ease: "easeIn"},
    hidden3: {opacity: 0, transition:{duration: 0.5}, x: 1000, ease: "easeIn"},
    hidden4: {opacity: 0, transition:{duration: 0.5}, y: -400, ease: "easeIn"}
  }

  const paths = {
    path0: {pathLength: 0, transition:{duration: 2}, stroke: "white", fill: "#FFFFFF00", strokeWidth: 0.2},
    path1: {pathLength: 1, transition:{duration: 2}, stroke: "white", fill: "#FFFFFF00" },
    path2: {fill: "#FFFFFFFF", transition:{duration: 2}, strokeWidth: 0}
  }

  return (
    <>
      {showPopup && (
        <motion.div variants={variantesInicio} initial="visible" animate={controlInicio1} className='bg-gradient-to-tr from-[#52E6FF] to-[#520BFF] h-full grid justify-items-center items-center overflow-hidden fixed top-0 left-0 right-0 z-50' >
          <motion.svg variants={variantesInicio} initial="visible" animate={controlInicio2} xmlns="http://www.w3.org/2000/svg" className='w-[346px] absolute right-[64px] -top-[135px] animate-spin-slow' data-name="Capa 1" viewBox="0 0 466.23 466.24"><defs><linearGradient id="a" x1="4.85" x2="324.13" y1="-3.96" y2="329.01" data-name="Degradado sin nombre 11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#520bff"/><stop offset=".12" stop-color="#520fff"/><stop offset=".26" stop-color="#521cff"/><stop offset=".4" stop-color="#5231ff"/><stop offset=".54" stop-color="#5250ff"/><stop offset=".69" stop-color="#5277ff"/><stop offset=".83" stop-color="#52a6ff"/><stop offset=".98" stop-color="#52deff"/><stop offset="1" stop-color="#52e6ff"/></linearGradient></defs>
            <motion.path d="M233.12 466.24C104.58 466.24 0 361.66 0 233.12S104.58 0 233.12 0c53.71 0 106.14 18.71 147.63 52.7 13.48 11.04 15.45 30.91 4.41 44.39s-30.91 15.45-44.39 4.41c-30.24-24.77-68.47-38.41-107.65-38.41-93.75 0-170.03 76.27-170.03 170.03s76.27 170.03 170.03 170.03 170.03-76.27 170.03-170.03c0-17.42 14.12-31.54 31.54-31.54s31.54 14.12 31.54 31.54c0 128.54-104.58 233.12-233.12 233.12Z" fill="url(#a)"/>
          </motion.svg>
          <motion.svg variants={variantesInicio} initial="visible" animate={controlInicio3} xmlns="http://www.w3.org/2000/svg" className='w-[346px] absolute left-[64px] -bottom-[135px] animate-spin-slow' data-name="Capa 1" viewBox="0 0 421.28 421.28"><defs><linearGradient id="a" x1="207.56" x2="628.79" y1="-865.9" y2="-865.9" data-name="Degradado sin nombre 11" gradientTransform="rotate(170.07 267.646 -336.645)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#520bff"/><stop offset=".12" stop-color="#520fff"/><stop offset=".26" stop-color="#521cff"/><stop offset=".4" stop-color="#5231ff"/><stop offset=".54" stop-color="#5250ff"/><stop offset=".69" stop-color="#5277ff"/><stop offset=".83" stop-color="#52a6ff"/><stop offset=".98" stop-color="#52deff"/><stop offset="1" stop-color="#52e6ff"/></linearGradient></defs>
            <motion.path d="M174.32 3.18C288.71-16.85 398.08 59.93 418.1 174.32c20.03 114.39-56.75 223.75-171.14 243.78C132.56 438.13 23.2 361.35 3.18 246.96-16.85 132.56 59.92 23.2 174.32 3.18Zm62.81 358.78c83.44-14.61 139.43-94.37 124.83-177.81-14.61-83.44-94.37-139.43-177.81-124.83-83.44 14.61-139.43 94.37-124.83 177.81 14.61 83.44 94.37 139.43 177.81 124.83Z" fill="url(#a)"/>
          </motion.svg>
          
          <motion.svg variants={variantesInicio} initial="visible" animate={controlInicio4} className='w-2/3 sm:w-1/3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.32 96.02">
            <g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m41.98,26.3h-2.44l-.55,3.29h-2.9l.55-3.29h-3.16l-.57,3.29h-2.9l.55-3.29h-1.65v-2.81h2.13l.57-3.25h-1.93v-2.81h2.41l.55-3.2h2.9l-.55,3.2h3.18l.55-3.2h2.9l-.55,3.2h1.67v2.81h-2.15l-.57,3.25h1.95v2.81h.01Zm-8.1-2.73h3.31l.57-3.42h-3.31l-.57,3.42Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m45.12,26.25v-5.58h-1.4v-2.85h1.4v-3.01h3.34v3.01h2.77v2.85h-2.77v5.03c0,.77.35,1.14,1.08,1.14.59,0,1.14-.13,1.65-.42v2.68c-.7.42-1.51.68-2.63.68-2.03,0-3.44-.81-3.44-3.53Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m52.37,17.82h3.34v2.37c.68-1.6,1.76-2.68,3.75-2.59v3.49h-.18c-2.22,0-3.58,1.32-3.58,4.15v4.35h-3.34v-11.77h.01Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m58.97,26.21v-.05c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.22,0-4.04-1.25-4.04-3.6Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m74.69,28.05v1.54h-3.34V13.56h3.34v5.95c.81-1.12,1.91-1.91,3.67-1.91,2.74,0,5.36,2.15,5.36,6.08v.04c0,3.93-2.57,6.08-5.36,6.08-1.78,0-2.88-.8-3.67-1.75Zm5.68-4.32v-.04c0-1.95-1.32-3.25-2.88-3.25s-2.85,1.3-2.85,3.25v.04c0,1.95,1.3,3.25,2.85,3.25s2.88-1.28,2.88-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m84.15,26.21v-.05c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.22,0-4.04-1.25-4.04-3.6Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m94.8,33.04v-2.61c.26.04.5.07.7.07.7,0,1.19-.37,1.19-1.36v-11.3h3.34v11.57c0,2.61-1.3,3.78-3.78,3.78-.62-.02-.99-.07-1.45-.15Zm1.8-19.48h3.51v2.96h-3.51v-2.96Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m101.14,26.21v-.05c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.22,0-4.04-1.25-4.04-3.6Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m29.12,39.15v-.04c0-3.93,2.57-6.08,5.36-6.08,1.78,0,2.88.81,3.67,1.76v-5.8h3.34v16.02h-3.34v-1.69c-.81,1.12-1.91,1.91-3.67,1.91-2.75,0-5.36-2.15-5.36-6.08Zm9.06,0v-.04c0-1.95-1.3-3.25-2.85-3.25s-2.88,1.27-2.88,3.25v.04c0,1.95,1.32,3.25,2.88,3.25s2.85-1.3,2.85-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m42.57,39.19v-.04c0-3.36,2.39-6.12,5.82-6.12,3.93,0,5.73,3.05,5.73,6.39,0,.26-.02.55-.04.88h-8.19c.33,1.51,1.38,2.3,2.88,2.3,1.12,0,1.91-.35,2.85-1.21l1.91,1.69c-1.12,1.38-2.68,2.2-4.81,2.2-3.53-.01-6.15-2.49-6.15-6.09Zm8.3-.99c-.2-1.49-1.08-2.5-2.48-2.5s-2.28.99-2.55,2.5h5.03Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m54.36,43.45l1.43-2.2c1.3.94,2.59,1.4,3.71,1.4.97,0,1.4-.35,1.4-.88v-.04c0-.72-1.14-.94-2.44-1.36-1.65-.46-3.51-1.25-3.51-3.53v-.04c0-2.39,1.93-3.73,4.3-3.73,1.49,0,3.1.5,4.39,1.36l-1.27,2.3c-1.16-.68-2.33-1.1-3.18-1.1s-1.23.35-1.23.81v.04c0,.61,1.12,1.01,2.39,1.4,1.65.53,3.56,1.34,3.56,3.49v.04c0,2.61-1.95,3.8-4.5,3.8-1.67.02-3.47-.53-5.05-1.76Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m64.46,39.15v-.04c0-3.93,2.57-6.08,5.36-6.08,1.78,0,2.88.81,3.67,1.76v-5.8h3.34v16.02h-3.34v-1.69c-.81,1.12-1.91,1.91-3.67,1.91-2.75,0-5.36-2.15-5.36-6.08Zm9.07,0v-.04c0-1.95-1.3-3.25-2.85-3.25s-2.88,1.27-2.88,3.25v.04c0,1.95,1.32,3.25,2.88,3.25s2.85-1.3,2.85-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m77.92,39.19v-.04c0-3.36,2.39-6.12,5.82-6.12,3.93,0,5.73,3.05,5.73,6.39,0,.26-.02.55-.04.88h-8.19c.33,1.51,1.38,2.3,2.88,2.3,1.12,0,1.91-.35,2.85-1.21l1.91,1.69c-1.12,1.38-2.68,2.2-4.81,2.2-3.54-.01-6.15-2.49-6.15-6.09Zm8.29-.99c-.2-1.49-1.08-2.5-2.48-2.5s-2.28.99-2.55,2.5h5.03Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m96.44,41.67v-5.58h-1.4v-2.85h1.4v-3.01h3.34v3.01h2.77v2.85h-2.77v5.03c0,.77.35,1.14,1.08,1.14.59,0,1.14-.13,1.65-.42v2.68c-.7.42-1.51.68-2.63.68-2.03.01-3.44-.81-3.44-3.53Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m103.6,40.86v-7.62h3.34v6.56c0,1.58.72,2.39,2.02,2.39s2.09-.81,2.09-2.39v-6.56h3.34v11.77h-3.34v-1.67c-.77.99-1.78,1.89-3.45,1.89-2.55,0-4-1.65-4-4.37Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m30.22,51.52h-1.38v-2.74h1.38v-.75c0-1.27.31-2.22.94-2.85s1.51-.92,2.7-.92c1.05,0,1.76.13,2.37.33v2.77c-.5-.18-.92-.29-1.51-.29-.81,0-1.21.42-1.21,1.27v.46h2.7v2.72h-2.66v8.91h-3.34v-8.91h0Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m35.92,54.61v-.04c0-3.38,2.72-6.12,6.39-6.12s6.34,2.68,6.34,6.08v.04c0,3.38-2.72,6.12-6.39,6.12-3.61,0-6.34-2.68-6.34-6.08Zm9.44,0v-.04c0-1.73-1.25-3.25-3.1-3.25s-3.05,1.45-3.05,3.2v.04c0,1.73,1.25,3.25,3.1,3.25,1.91.01,3.05-1.44,3.05-3.2Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m49.75,48.66h3.34v1.67c.77-.99,1.78-1.89,3.45-1.89,2.55,0,4,1.65,4,4.37v7.62h-3.34v-6.57c0-1.58-.72-2.39-2.02-2.39s-2.09.81-2.09,2.39v6.56h-3.34s0-11.76,0-11.76Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m61.58,54.57v-.04c0-3.93,2.57-6.08,5.36-6.08,1.78,0,2.88.81,3.67,1.76v-5.8h3.34v16.02h-3.34v-1.69c-.81,1.12-1.91,1.91-3.67,1.91-2.74,0-5.36-2.15-5.36-6.08Zm9.07,0v-.04c0-1.95-1.3-3.25-2.85-3.25s-2.88,1.27-2.88,3.25v.04c0,1.95,1.32,3.25,2.88,3.25,1.55,0,2.85-1.3,2.85-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m75.04,54.61v-.04c0-3.38,2.72-6.12,6.39-6.12s6.34,2.68,6.34,6.08v.04c0,3.38-2.72,6.12-6.39,6.12-3.62,0-6.34-2.68-6.34-6.08Zm9.44,0v-.04c0-1.73-1.25-3.25-3.1-3.25s-3.05,1.45-3.05,3.2v.04c0,1.73,1.25,3.25,3.1,3.25,1.91.01,3.05-1.44,3.05-3.2Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m93.61,54.57v-.04c0-3.93,2.57-6.08,5.36-6.08,1.78,0,2.88.81,3.67,1.76v-5.8h3.34v16.02h-3.34v-1.69c-.81,1.12-1.91,1.91-3.67,1.91-2.75,0-5.36-2.15-5.36-6.08Zm9.07,0v-.04c0-1.95-1.3-3.25-2.85-3.25s-2.88,1.27-2.88,3.25v.04c0,1.95,1.32,3.25,2.88,3.25,1.55,0,2.85-1.3,2.85-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m107.07,54.61v-.04c0-3.36,2.39-6.12,5.82-6.12,3.93,0,5.73,3.05,5.73,6.39,0,.26-.02.55-.04.88h-8.19c.33,1.51,1.38,2.3,2.88,2.3,1.12,0,1.91-.35,2.85-1.21l1.91,1.69c-1.12,1.38-2.68,2.2-4.81,2.2-3.54-.01-6.15-2.49-6.15-6.09Zm8.29-.99c-.2-1.49-1.08-2.5-2.48-2.5s-2.28.99-2.55,2.5h5.03Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m29.65,64.08h3.34v1.69c.81-1.12,1.91-1.91,3.67-1.91,2.74,0,5.36,2.15,5.36,6.08v.04c0,3.93-2.57,6.08-5.36,6.08-1.78,0-2.88-.81-3.67-1.76v5.05h-3.34s0-15.27,0-15.27Zm9.02,5.91v-.04c0-1.95-1.32-3.25-2.88-3.25s-2.85,1.3-2.85,3.25v.04c0,1.95,1.3,3.25,2.85,3.25s2.88-1.28,2.88-3.25Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m42.44,72.47v-.04c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.22-.01-4.04-1.26-4.04-3.61Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m54.82,64.08h3.34v1.67c.77-.99,1.78-1.89,3.45-1.89,2.55,0,4,1.65,4,4.37v7.62h-3.34v-6.56c0-1.58-.72-2.39-2.02-2.39s-2.09.81-2.09,2.39v6.56h-3.34s0-11.77,0-11.77Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m67.73,72.51v-5.58h-1.4v-2.85h1.4v-3.01h3.34v3.01h2.77v2.85h-2.77v5.03c0,.77.35,1.14,1.08,1.14.59,0,1.14-.13,1.65-.42v2.68c-.7.42-1.51.68-2.63.68-2.03.01-3.44-.81-3.44-3.53Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m74.27,72.47v-.04c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.22-.01-4.04-1.26-4.04-3.61Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m86.81,59.82h3.34v16.02h-3.34v-16.02Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m92.12,59.82h3.34v16.02h-3.34v-16.02Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m96.57,72.47v-.04c0-2.55,1.95-3.75,4.74-3.75,1.21,0,2.02.2,2.88.48v-.2c0-1.4-.86-2.15-2.52-2.15-1.3,0-2.17.22-3.25.64l-.83-2.55c1.3-.55,2.57-.94,4.57-.94,1.84,0,3.12.46,3.97,1.32.88.88,1.27,2.17,1.27,3.75v6.83h-3.23v-1.27c-.81.9-1.91,1.49-3.56,1.49-2.21-.01-4.04-1.26-4.04-3.61Zm7.66-.77v-.59c-.59-.26-1.32-.44-2.13-.44-1.43,0-2.3.57-2.3,1.62v.04c0,.9.75,1.43,1.82,1.43,1.58,0,2.61-.83,2.61-2.06Z"/>

              </g>
            </g>
            <g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m145.93,85.19H20.56c-.28,0-.51-.23-.51-.51V6.27c0-.28.23-.51.51-.51h125.37c.28,0,.51.23.51.51v78.42c0,.27-.23.5-.51.5Zm-124.87-1.01h124.36V6.77H21.06v77.41Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m150.92,90.31c-.28,0-.51-.23-.51-.5,0-.73-.12-73.02,0-81.17.04-2.72-.59-4.71-1.89-5.9-1.5-1.38-3.4-1.21-3.42-1.21s-.04.01-.05,0c-.56,0-28.56-.03-57.67-.03s-60.27.03-64.56.16h-.04c-2.59-.15-4.43.41-5.47,1.65-1.49,1.78-.88,4.44-.87,4.47.01.04.01.08.01.12l-.12,81.79c0,.28-.23.5-.51.5h0c-.28,0-.51-.23-.5-.51l.12-81.73c-.1-.47-.61-3.26,1.09-5.29,1.26-1.5,3.37-2.18,6.29-2.02,8.65-.25,120.06-.13,122.22-.12.29-.02,2.42-.14,4.17,1.46,1.52,1.4,2.27,3.64,2.23,6.67-.12,8.14,0,80.43,0,81.16,0,.27-.24.5-.52.5h0Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m161.25,95.52h0l-85.32-.19H5.6c-.07,0-.13-.01-.19-.04l-4.59-1.87c-.19-.08-.31-.26-.31-.47v-3.18c0-.13.05-.26.15-.36.09-.09.22-.15.36-.15h0l165.11.09c.27,0,.49.21.5.47l.19,2.9c0,.21-.11.41-.3.49l-5.06,2.25c-.07.05-.14.06-.21.06Zm-155.55-1.19h70.23l85.21.19,4.64-2.06-.13-2.08-164.13-.1v2.34l4.18,1.71Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m1.01,93.46c-.28,0-.51-.23-.51-.5s.23-.51.5-.51l165.3-.19h0c.28,0,.51.23.51.5s-.23.51-.5.51l-165.3.19s0,0,0,0Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m80.41,91.78c-2.25,0-4.05-.01-4.38-.04-1.22-.12-1.55-1.71-1.57-1.78l.73-.15-.37.07.37-.07s.25,1.12.9,1.18c.64.06,7.78.04,14.25,0,.49,0,.94-.17,1.26-.48.17-.16.26-.32.27-.46l.75.03c-.01.35-.18.68-.51.98-.46.43-1.09.68-1.77.68-1.89.02-6.45.04-9.93.04Z"/>

              </g>
              <g>
                <motion.path variants={paths} initial="path0" animate={controlPath}  d="m83.52,5.02c-.57,0-1.03-.46-1.03-1.03s.46-1.03,1.03-1.03,1.03.46,1.03,1.03-.46,1.03-1.03,1.03Zm0-1.44c-.22,0-.4.18-.4.4s.18.4.4.4.4-.18.4-.4-.17-.4-.4-.4Z"/>

              </g>
            </g>
          </motion.svg>
        </motion.div>
      )}
    </>
  );
}


