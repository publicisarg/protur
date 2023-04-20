import { SetStateAction, useEffect, useState } from 'react';
import GridCard from '../../grid/GridCard';
import List from './list';
import axios from 'axios';
import blah from './blah.json'

const categorias = ['Towns', 'Gastronomy', 'Nature', 'Cities', 'Animals', 'Architecture', 'Arte', 'Handicrafts', 'People', ];

export const ListFilter = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Naturaleza");
  const [busqueda, setBusqueda] = useState('');
  const [isActive, setActive] = useState(false);
  const [animation, setAnimation] = useState({ showAppearClass: false, transiciones: true });
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
      setLugares(response.data);
    }
    fetchData();
  }, []);

  const contenido = blah;

  const handleCategoriaClick = (categoria: SetStateAction<string>) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);

    setAnimation({ showAppearClass: false, transiciones: animation.transiciones });

    setTimeout(() => {
      const filteredElements = contenido.filter((element) => element.categoria === categoria);
      setContenidoFiltrado(filteredElements);
      setAnimation({ showAppearClass: true, transiciones: animation.transiciones });
    }, 500);
  };

  const [contenidoFiltrado, setContenidoFiltrado] = useState(
    contenido.filter((item) => item.categoria === categoriaSeleccionada)
  );


  return (
    <div className='listFilter'>
      <div className='flex px-5 md:p-0 md:gap-8 justify-between flex-col md:flex-row'>
        <div className='sm:flex grid grid-cols-2 sm:justify-center items-center sm:gap-8 gap-6 flex-wrap justify-between w-full sm:w-auto sm:flex-row'>
        {categorias.map((categoria) => (
          <button
            className={`rounded text-[#999999] text-sm bg-white md:px-4 py-2 ${
              categoriaSeleccionada === categoria ? 'activo' : ''
            }`}
            key={categoria}
            onClick={() => handleCategoriaClick(categoria)}
          >
            {categoria}
          </button>
        ))}
        </div>
        <select className='pl-4 pr-8 py-2 rounded text-black border-neutral-400 border'>
          <option value="DEFAULT">Color</option>
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="gray">Gris</option>
          <option value="white">Blanco</option>
        </select>
      </div>
      <List contenido={contenidoFiltrado[0]?.elementos || []} categoriaSeleccionada={categoriaSeleccionada} />
  </div>);
};

export default ListFilter;
