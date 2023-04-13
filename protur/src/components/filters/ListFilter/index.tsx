import { useEffect, useState } from 'react';
import GridCard from '../../grid/GridCard';
import List from './list';
import axios from 'axios';
import blah from './blah.json'

const categorias = ['City', 'Routes', 'Towns', 'Nature'];

export const ListFilter = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Nature");

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

  const contenido:any = blah;

  const handleCategoriaClick = (categoria:any) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);

    // eliminar la clase "aparecer" después de la transición
    setAnimation({ showAppearClass: false, transiciones: animation.transiciones });

    // esperar un corto tiempo para que se complete la transición
    setTimeout(() => {
      // filtrar los elementos según la categoría seleccionada
      const filteredElements = contenido.filter((element:any) => element.categoria === categoria);
      setContenidoFiltrado(filteredElements);

      // volver a agregar la clase "aparecer" después de renderizar los nuevos elementos
      setAnimation({ showAppearClass: true, transiciones: animation.transiciones });
    }, 500);
  };

  const [contenidoFiltrado, setContenidoFiltrado] = useState(
    contenido.filter((item:any) => item.categoria === categoriaSeleccionada)
  );

/*  useEffect(() => {
    setAnimation({ showAppearClass: animation.showAppearClass, transiciones: true });
    setContenidoFiltrado(contenido.filter((item:any) => item.categoria === categoriaSeleccionada));
  }, [categoriaSeleccionada]);

  useEffect(() => {
    // Aparecer los elementos de la categoría "Ciudades" al iniciar la página
    setAnimation({ showAppearClass: true, transiciones: animation.transiciones });
    setContenidoFiltrado(contenido.filter((item:any) => item.categoria === categoriaSeleccionada));
  }, []);*/

  
  return (
    <div className='listFilter'>
      <div className='flex px-5 md:p-0 gap-8 justify-between flex-col md:flex-row'>
        <div className='sm:flex grid grid-cols-2 sm:justify-center items-center sm:gap-12 gap-6 flex-wrap justify-between w-full sm:w-auto sm:flex-row'>
        {categorias.map((categoria) => (
          <button
            className={`rounded text-[#999999] bg-white px-4 py-2 ${
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
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="gray">Gray</option>
          <option value="white">White</option>
        </select>
      </div>
      <List contenido={contenidoFiltrado[0].elementos} categoriaSeleccionada={categoriaSeleccionada} />
  </div>)};