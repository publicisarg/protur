import { SetStateAction, useEffect, useState } from 'react';
import List from './list';

const categoriasDefault = [
  { value: 'Towns', display: "Towns" },
  { value: 'Nature', display: "Nature" },
  { value: 'Cities', display: "Cities" }
];

export const ListFilter = (props: any) => {

  const [categorias, setCategorias] = useState(categoriasDefault);

  useEffect(() => {
    if (props.lang != "en") {
      console.log(props.lang);
      setCategorias(
        [
          { value: 'Towns', display: "Pueblos" },
          { value: 'Nature', display: "Naturaleza" },
          { value: 'Cities', display: "Ciudades" }
        ]
      );
    } else {
      setCategorias(
        [
          { value: 'Towns', display: "Towns" },
          { value: 'Nature', display: "Nature" },
          { value: 'Cities', display: "Cities" }
        ]
      )
    }
  }, [])

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Home");
  const [currentColor, setCurrentColor] = useState("null");
  const [isActive, setActive] = useState(false);
  const [animation, setAnimation] = useState({ showAppearClass: false, transiciones: true });

  const handleCategoriaClick = (categoria: SetStateAction<string>) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);
    setAnimation({ showAppearClass: false, transiciones: animation.transiciones });
  };

  function handleColor(event: any) {
    setCurrentColor(event.target.value);
  }

  useEffect(() => {
    if (props.clickLogo) {
      props.setClickLogo(false);
      handleCategoriaClick("Home");
    }
  }, [props.clickLogo])

  return (
    <div className='listFilter'>
      <div className='flex px-5 md:p-0 md:gap-8 justify-between flex-col md:flex-row'>
        <div className='sm:flex grid grid-cols-2 sm:justify-center items-center sm:gap-8 gap-6 flex-wrap justify-between w-full sm:w-auto sm:flex-row'>
          {categorias.map((categoria, index) => (
            <button
              className={`rounded text-[#999999] text-sm bg-white md:px-4 py-2 ${categoriaSeleccionada == categoria.value ? 'activo' : ''
                }`}
              key={index}
              onClick={() => handleCategoriaClick(categoria.value)}
            >
              {categoria.display}
            </button>
          ))}
        </div>
        {true && <select className='pl-4 pr-8 py-2 rounded text-black border-neutral-400 border' onChange={(event) => handleColor(event)}>
          <option value="null">Color</option>
          <option value="Black">{props.lang == "en" ? "Black" : "Negro"}</option>
          <option value="Blue">{props.lang == "en" ? "Blue" : "Azul"}</option>
          <option value="Brown">{props.lang == "en" ? "Brown" : "Marrón"}</option>
          <option value="Green">{props.lang == "en" ? "Green" : "Verde"}</option>
          <option value="Grey">{props.lang == "en" ? "Grey" : "Gris"}</option>
          <option value="Orange">{props.lang == "en" ? "Orange" : "Naranja"}</option>
          <option value="Pink">{props.lang == "en" ? "Pink" : "Rosa"}</option>
          <option value="Red">{props.lang == "en" ? "Red" : "Rojo"}</option>
          <option value="White">{props.lang == "en" ? "White" : "Blanco"}</option>
          <option value="Yellow">{props.lang == "en" ? "Yellow" : "Amarillo"}</option>
        </select>}
      </div>
      <List lang={props.lang} categoriaSeleccionada={categoriaSeleccionada} colorSeleccionado={currentColor} keywordSeleccionada={props.keywordSeleccionada} />
    </div>);
};

export default ListFilter;
