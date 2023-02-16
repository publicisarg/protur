import { useState } from 'react';
import GridCard from '../../grid/GridCard';
import { Search } from '../search';

const categorias = ['Ciudades', 'Rutas', 'Pueblos', 'Naturaleza'];

const contenido = [
  {
    categoria: 'Ciudades',
    elementos: ['lugares/01.jpeg', 'lugares/02.jpeg', 'lugares/03.jpg', 'lugares/04.jpeg']
  },
  {
    categoria: 'Rutas',
    elementos:  ['lugares/04.jpeg', 'lugares/02.jpeg', 'lugares/03.jpg', 'lugares/01.jpeg']
  },
  {
    categoria: 'Pueblos',
    elementos:  ['lugares/02.jpeg', 'lugares/03.jpg', 'lugares/04.jpeg', 'lugares/01.jpeg']
  },
  {
    categoria: 'Naturaleza',
    elementos:  ['lugares/03.jpg', 'lugares/02.jpeg', 'lugares/04.jpeg', 'lugares/01.jpeg']
  }
];

export const ListFilter = (props: any) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Ciudades');
  const [busqueda, setBusqueda] = useState('');
  const [isActive, setActive] = useState(false);
  const handleCategoriaClick = (categoria:any) => {
    setCategoriaSeleccionada(categoria);
    setActive(!isActive);
  };
 
  

  const contenidoFiltrado = contenido.filter((item) => item.categoria === categoriaSeleccionada);

  return (
    <div>
    
      <div className='grid px-5 md:p-0 grid-cols-2 lg:grid-cols-8 gap-6'>
        {categorias.map((categoria) => (
         
          <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${categoriaSeleccionada === categoria ? 'activo' : ''}`} key={categoria} onClick={() => handleCategoriaClick(categoria)} >
            {categoria}
            </button>
        ))}
      </div>
      {categoriaSeleccionada && (
        
        <ul className='p-5 md:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-24  my-10'>
          {contenidoFiltrado[0].elementos.map((elemento) => (
            <li key={elemento}>
              <GridCard img={elemento} link={""} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
