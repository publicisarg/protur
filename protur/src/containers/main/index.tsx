import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'
import { useState } from 'react'

export const Main = (props:any) => {

  const [keyword, setKeyword] = useState("");
  const [clickLogo, setClickLogo] = useState(false);

  return (
    <div className='container mx-auto items-center'>
      <div className="my-5 w-full inset-0 flex justify-center items-center">
        <img className='w-40 cursor-pointer' src={props.lang == "en" ? "./logoblack-en.svg" : "logoblack-es.svg"} onClick={() => setClickLogo(true)}/>
      </div>
      <div className='mb-10 text-center text-[22px] md:text-[32px]'>
        <p className='font-myriadpro'>{props.lang == "en" ? "Find a wallpaper you want to work from" : "Encuentra un fondo de pantalla desde el que quieras trabajar"}</p>
      </div>
      {false && <Search setKeyword={setKeyword}/>}
      <div className='border-solid relative'>
        <ListFilter lang={props.lang} setClickLogo={setClickLogo} clickLogo={clickLogo} keywordSeleccionada={keyword}/>
      </div>
    </div>
  )
}
