import React from 'react'
import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'
import { Griditems } from '../../components/grid'

export const Main = () => {
  return (
    <div className='container mx-auto items-center'>
      <div className='my-[50px] text-center text-[32px]'>
        <p className='font-quicksandlight font-bold'>Encuentra un fondo de pantalla desde el que quieras trabajar</p>
        </div>
      <Search></Search>
      <div className='border-solid border-t-2 py-9'>
        <ListFilter></ListFilter>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-24'>
        <Griditems />
      </div>
    </div>
  )
}
