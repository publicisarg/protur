import React from 'react'
import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'

export const Main = () => {
  return (
    <>
      <Search></Search>
      <div className='border-solid border-t-2 pt-9'>
      <ListFilter></ListFilter>
      </div>
    </>
  )
}
