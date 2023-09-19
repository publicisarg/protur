import { ListFilter } from '../../components/filters/ListFilter'
import { Search } from '../../components/filters/search'
import { useState } from 'react'

export const Main = (props: any) => {

  const [keyword, setKeyword] = useState("");
  const [clickLogo, setClickLogo] = useState(false);

  return (
    <div className='container mx-auto items-center'>
      <div className="my-5 w-full inset-0 flex flex-row justify-between items-center">
        <img className='w-40 cursor-pointer' src={props.lang == "en" ? "./logoblack-en.svg" : "logoblack-es.svg"} onClick={() => setClickLogo(true)} />
        <img className='w-40 cursor-pointer' src="./logovisit.svg" />
      </div>
      <div className='mb-10 text-center text-[22px] md:text-[32px]'>
        <p className='font-semibold quicksand'>{props.lang == "en" ? "Choose an image and work from your favorite wallpaper" : "Elige una imagen y trabaja desde tu fondo de pantalla preferido"}</p>
      </div>
      {false && <Search setKeyword={setKeyword} />}
      <div className='border-solid relative'>
        <ListFilter lang={props.lang} setClickLogo={setClickLogo} clickLogo={clickLogo} keywordSeleccionada={keyword} />
      </div>
    </div>
  )
}
