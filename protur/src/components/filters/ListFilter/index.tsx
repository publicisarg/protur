import React from 'react'
import Buton from '../../../common /buttoms'



export const ListFilter = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
     
    <Buton activo="activo" name="Ciudades"></Buton>
    <Buton activo="" name="Rutas"></Buton>
    <Buton activo="" name="Pueblos"></Buton>
    <Buton activo="" name="Naturaleza"></Buton>
  
    </div>
  )
}
