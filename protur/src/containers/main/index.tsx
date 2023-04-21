import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'
import logoImg from '../../../public/logoblack.svg'

export const Main = () => {
  return (
    <div className='container mx-auto items-center'>
      <div className="my-5 w-full inset-0 flex justify-center items-center">
        <img className='w-40' src={logoImg} />
      </div>
      <div className='mb-10 text-center text-[22px] md:text-[32px]'>
        <p className='font-myriadpro'>Find a wallpaper you want to work from</p>
      </div>
      <Search />
      <div className='border-solid relative'>
        <ListFilter />
      </div>
    </div>
  )
}
