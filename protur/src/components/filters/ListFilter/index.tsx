import { useEffect, useState } from 'react';
import GridCard from '../../grid/GridCard';

const categorias = ['Ciudades', 'Rutas', 'Pueblos', 'Naturaleza'];

const contenido = [
  {
    categoria: 'Ciudades',
    elementos: ['lugares/01.jpeg', 'lugares/02.jpeg', 'lugares/03.jpg', 'lugares/04.jpeg']
  },
  {
    categoria: 'Rutas',
    elementos: ['lugares/04.jpeg', 'lugares/02.jpeg', 'lugares/03.jpg', 'lugares/01.jpeg']
  },
  {
    categoria: 'Pueblos',
    elementos: ['lugares/02.jpeg', 'lugares/03.jpg', 'lugares/04.jpeg', 'lugares/01.jpeg']
  },
  {
    categoria: 'Naturaleza',
    elementos: ['lugares/03.jpg', 'lugares/02.jpeg', 'lugares/04.jpeg', 'lugares/01.jpeg']
  }
];
export const ListFilter = () => {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Ciudades');
  const [busqueda, setBusqueda] = useState('');
  const [isActive, setActive] = useState(false);
  const [animation, setAnimation] = useState({ showAppearClass: false, transiciones: true });

  const handleCategoriaClick = (categoria:any) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);

    // eliminar la clase "aparecer" después de la transición
    setAnimation({ showAppearClass: false, transiciones: animation.transiciones });

    // esperar un corto tiempo para que se complete la transición
    setTimeout(() => {
      // filtrar los elementos según la categoría seleccionada
      const filteredElements = contenido.filter((element) => element.categoria === categoria);
      setContenidoFiltrado(filteredElements);

      // volver a agregar la clase "aparecer" después de renderizar los nuevos elementos
      setAnimation({ showAppearClass: true, transiciones: animation.transiciones });
    }, 500);
  };

  const [contenidoFiltrado, setContenidoFiltrado] = useState(
    contenido.filter((item) => item.categoria === categoriaSeleccionada)
  );

  useEffect(() => {
    setAnimation({ showAppearClass: animation.showAppearClass, transiciones: true });
    setContenidoFiltrado(contenido.filter((item) => item.categoria === categoriaSeleccionada));
  }, [categoriaSeleccionada]);

  useEffect(() => {
    // Aparecer los elementos de la categoría "Ciudades" al iniciar la página
    setAnimation({ showAppearClass: true, transiciones: animation.transiciones });
    setContenidoFiltrado(contenido.filter((item) => item.categoria === categoriaSeleccionada));
  }, []);

  return (
    <div className='listFilter'>
      <div className='grid px-5 md:p-0 grid-cols-2 lg:grid-cols-8 gap-6'>
        {categorias.map((categoria) => (
          <button
            className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-white ${
              categoriaSeleccionada === categoria ? 'activo' : ''
            }`}
            key={categoria}
            onClick={() => handleCategoriaClick(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
      {categoriaSeleccionada && (
        <ul
          className={`p-5 md:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-24 my-10 elementos  ${animation.showAppearClass ? 'aparecer' : ''} ${animation.transiciones ? 'transition-all duration-500' : ''}`}>
        {contenidoFiltrado[0].elementos.map((elemento, index) => (
          <li key={elemento} className={` ${animation.showAppearClass ? 'aparecer' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
            <GridCard img={elemento} link={""} />
          </li>
        ))}
      </ul>
    )}
  </div>
)};