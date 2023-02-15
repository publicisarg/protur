import React from 'react'
import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'

export const Main = () => {
  return (
    <>
      <div className='my-[50px] text-center text-[32px]'>
        <p>Encuentra un fondo de pantalla desde el que quieras trabajar</p>
      </div>
      <Search></Search>
      <div className='border-solid border-t-2 pt-9'>
      <ListFilter></ListFilter>
      </div>
    </>
  )
}
