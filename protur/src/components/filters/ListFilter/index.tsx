import { useEffect, useState } from 'react';
import GridCard from '../../grid/GridCard';
import List from './list';
import axios from 'axios';
import blah from './blah.json'

const categorias = ['Ciudades', 'Rutas', 'Pueblos', 'Naturaleza'];

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
      <div className='flex px-5 md:p-0 gap-8 justify-between'>
        <div className='flex justify-center items-center gap-12'>
        {categorias.map((categoria) => (
          <button
            className={`rounded text-[#999999] bg-white lg:p-1 ${
              categoriaSeleccionada === categoria ? 'activo' : ''
            }`}
            key={categoria}
            onClick={() => handleCategoriaClick(categoria)}
          >
            {categoria}
          </button>
        ))}
        </div>
        <select className='pl-4 pr-8 py-2 rounded text-[#999999] border-neutral-400 border'>
          <option value="DEFAULT">Color</option>
          <option value="red">Rojo</option>
          <option value="blue">Azul</option>
          <option value="gray">Gris</option>
          <option value="white">Blanco</option>
        </select>
      </div>
      <List contenido={contenidoFiltrado[0].elementos} categoriaSeleccionada={categoriaSeleccionada} />
  </div>)};