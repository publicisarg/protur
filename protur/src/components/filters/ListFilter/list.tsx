import axios from "axios";
import { useEffect, useState } from "react";
import GridCard from '../../grid/GridCard';

export const List = (props:any) => {

    const [contenido, setLugares] = useState([]);

    const [contenidoFiltrado, setContenidoFiltrado] = useState(
        contenido.filter((item:any) => item.categoria === props.categoriaSeleccionada)
    );
    
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
          setLugares(response.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setContenidoFiltrado(contenido.filter((item:any) => item.categoria === props.categoriaSeleccionada));
    }, [props.categoriaSeleccionada]);

    function test() {
        for (let values of contenidoFiltrado.values()) {
            return values;
        }
    };

    return (
        <>
            {props.categoriaSeleccionada && (
                <ul
                    className={`p-5 md:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-24 my-10 elementos`}>
                    {contenidoFiltrado.map((elemento:any, index:any) => (
                        <li key={elemento.elementos[0].id}>
                            <GridCard img={elemento.elementos[0].Imagen} alt={elemento.elementos[0].Nombre_del_Lugar} link={elemento.elementos[0].url_destino} />
                            <p>{}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default List