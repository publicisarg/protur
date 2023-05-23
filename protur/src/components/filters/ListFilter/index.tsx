import { SetStateAction, useEffect, useState } from 'react';
import List from './list';

const categorias = ['Towns', 'Gastronomy', 'Nature', 'Cities', 'Animals', 'Architecture', 'Art', 'Handicrafts', 'People', ];

export const ListFilter = (props:any) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Towns");
  const [currentColor, setCurrentColor] = useState("null");
  const [isActive, setActive] = useState(false);
  const [animation, setAnimation] = useState({ showAppearClass: false, transiciones: true });

  const handleCategoriaClick = (categoria: SetStateAction<string>) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);
    setAnimation({ showAppearClass: false, transiciones: animation.transiciones });
  };

  function handleColor(event:any) {
    setCurrentColor(event.target.value);
  }

  return (
    <div className='listFilter'>
      <div className='flex px-5 md:p-0 md:gap-8 justify-between flex-col md:flex-row'>
        <div className='sm:flex grid grid-cols-2 sm:justify-center items-center sm:gap-8 gap-6 flex-wrap justify-between w-full sm:w-auto sm:flex-row'>
        {categorias.map((categoria) => (
          <button
            className={`rounded text-[#999999] text-sm bg-white md:px-4 py-2 ${
              categoriaSeleccionada == categoria ? 'activo' : ''
            }`}
            key={categoria}
            onClick={() => handleCategoriaClick(categoria)}
          >
            {categoria}
          </button>
        ))}
        </div>
        <select className='pl-4 pr-8 py-2 rounded text-black border-neutral-400 border' onChange={(event) => handleColor(event)}>
          <option value="null">Color</option>
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Grey">Grey</option>
          <option value="Orange">Orange</option>
          <option value="Pink">Pink</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div>
      <List categoriaSeleccionada={categoriaSeleccionada} colorSeleccionado={currentColor} keywordSeleccionada={props.keywordSeleccionada}/>
  </div>);
};

export default ListFilter;
