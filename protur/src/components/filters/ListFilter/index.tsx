import { useEffect, useState } from 'react';
import GridCard from '../../grid/GridCard';
import axios from 'axios';

const categorias = ['Ciudades', 'Rutas', 'Pueblos', 'Naturaleza'];


const contenido = [
  {
    categoria: 'Ciudades',
    elementos: [
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA3",
        "Imagen": "lugares/03.jpeg",
        "url_destino": "#"
      },
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA2",
        "Imagen": "lugares/02.jpeg",
        "url_destino": "#"
      }
    ]
  },
  {
    categoria: 'Rutas',
    elementos: [
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA",
        "Imagen": "lugares/01.jpeg",
        "url_destino": "#"
      },
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA2",
        "Imagen": "lugares/02.jpeg",
        "url_destino": "#"
      }
    ]
  },
  {
    categoria: 'Pueblos',
    elementos: [
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA",
        "Imagen": "lugares/01.jpeg",
        "url_destino": "#"
      },
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA3",
        "Imagen": "lugares/03.jpeg",
        "url_destino": "#"
      }
    ]
  },
  {
    categoria: 'Naturaleza',
    elementos: [
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA4",
        "Imagen": "lugares/04.jpeg",
        "url_destino": "#"
      },
      {
        "id": "6",
        "Nombre_del_Lugar": "SARLANGA2",
        "Imagen": "lugares/02.jpeg",
        "url_destino": "#"
      }
    ]
  }
];

export const ListFilter = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Ciudades');
  const [busqueda, setBusqueda] = useState('');
  const [isActive, setActive] = useState(false);
  const [animation, setAnimation] = useState({ showAppearClass: false, transiciones: true });
  const [lugares, setLugares] = useState([]);

  //useEffect(() => {
  async function fetchData() {
    const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
    setLugares(response.data);
    console.log('test');
  }
  fetchData();
  //}, []);

  //const contenido:{categoria:string,elementos:string[]}[] = lugares;
  console.log(lugares);

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

  /*const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Ciudades');

  lugares.forEach(categorias => {
    console.log(categorias);
  });*/

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
          <li key={elemento.Nombre_del_Lugar} className={` ${animation.showAppearClass ? 'aparecer' : ''}`} style={{ transitionDelay: `${index * 30}ms` }}>
            <GridCard img={elemento.Imagen} alt={elemento.Nombre_del_Lugar} link={elemento.url_destino} />
          </li>
        ))}
      </ul>
    )}
  </div>)};