import React from 'react'
import { ListFilter } from '../../components/filters/ListFilter'
import { List } from '../../components/filters/ListFilter/list'
import { Search } from '../../components/filters/search'
import { Griditems } from '../../components/grid'

export const Main = () => {
  return (
    <div className='container mx-auto items-center'>
      <div className='my-[50px] text-center text-[22px] md:text-[32px]'>
        <p className='font-quicksandlight font-bold'>Encuentra un fondo de pantalla desde el que quieras trabajar</p>
        </div>
      {/*<Search></Search>*/}
      <div className='border-solid border-t-2 py-9 relative'>
        <ListFilter/>

        <svg xmlns="http://www.w3.org/2000/svg" className='z-[-1] w-[346px] absolute -right-[128px] top-[30px] animate-spin-slow' data-name="Capa 1" viewBox="0 0 466.23 466.24"><defs><linearGradient id="a" x1="4.85" x2="324.13" y1="-3.96" y2="329.01" data-name="Degradado sin nombre 11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#520bff"/><stop offset=".12" stop-color="#520fff"/><stop offset=".26" stop-color="#521cff"/><stop offset=".4" stop-color="#5231ff"/><stop offset=".54" stop-color="#5250ff"/><stop offset=".69" stop-color="#5277ff"/><stop offset=".83" stop-color="#52a6ff"/><stop offset=".98" stop-color="#52deff"/><stop offset="1" stop-color="#52e6ff"/></linearGradient></defs><path d="M233.12 466.24C104.58 466.24 0 361.66 0 233.12S104.58 0 233.12 0c53.71 0 106.14 18.71 147.63 52.7 13.48 11.04 15.45 30.91 4.41 44.39s-30.91 15.45-44.39 4.41c-30.24-24.77-68.47-38.41-107.65-38.41-93.75 0-170.03 76.27-170.03 170.03s76.27 170.03 170.03 170.03 170.03-76.27 170.03-170.03c0-17.42 14.12-31.54 31.54-31.54s31.54 14.12 31.54 31.54c0 128.54-104.58 233.12-233.12 233.12Z" fill="url(#a)"/></svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" className='z-[-1] w-[346px] absolute -left-[128px] bottom-[40px] animate-spin-slow' data-name="Capa 1" viewBox="0 0 421.28 421.28"><defs><linearGradient id="a" x1="207.56" x2="628.79" y1="-865.9" y2="-865.9" data-name="Degradado sin nombre 11" gradientTransform="rotate(170.07 267.646 -336.645)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#520bff"/><stop offset=".12" stop-color="#520fff"/><stop offset=".26" stop-color="#521cff"/><stop offset=".4" stop-color="#5231ff"/><stop offset=".54" stop-color="#5250ff"/><stop offset=".69" stop-color="#5277ff"/><stop offset=".83" stop-color="#52a6ff"/><stop offset=".98" stop-color="#52deff"/><stop offset="1" stop-color="#52e6ff"/></linearGradient></defs><path d="M174.32 3.18C288.71-16.85 398.08 59.93 418.1 174.32c20.03 114.39-56.75 223.75-171.14 243.78C132.56 438.13 23.2 361.35 3.18 246.96-16.85 132.56 59.92 23.2 174.32 3.18Zm62.81 358.78c83.44-14.61 139.43-94.37 124.83-177.81-14.61-83.44-94.37-139.43-177.81-124.83-83.44 14.61-139.43 94.37-124.83 177.81 14.61 83.44 94.37 139.43 177.81 124.83Z" fill="url(#a)"/></svg>
        
        
      </div>
      
    </div>
  )
}
