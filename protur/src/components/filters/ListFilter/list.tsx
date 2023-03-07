import axios from "axios";
import { useEffect, useState } from "react";
import GridCard from '../../grid/GridCard';

export const List = (props:any) => {

    const [contenido, setContenido] = useState([]);
    const [contenidoFiltrado, setContenidoFiltrado] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
          setContenido(response.data);
        }
        fetchData();
    },[]);

    useEffect(() => {
        const filtrado = contenido.filter((item:any) => item.categoria === props.categoriaSeleccionada);
        setContenidoFiltrado(filtrado);
    }, [contenido, props.categoriaSeleccionada]);

    function cardsLoop(datos:any) {
        let cardsJSX = [];

        for (var i = 0; i < datos.elementos.length; i++) {
            cardsJSX.push(cardsReturn(datos.elementos[i]));
        }

        return cardsJSX;
    }

    function cardsReturn(datos:any) {
        return (
            <li key={datos.id}>
                <GridCard img={datos.Imagen} img_small={datos.Image_small} alt={datos.Nombre_del_Lugar} link={datos.url_destino} />
            </li>
        )
    }

    return (
        <>
            {props.categoriaSeleccionada && (
                <ul
                    className={`p-5 md:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-24 my-10 elementos`}>
                    {contenidoFiltrado.map((elemento:any, index:any) => (
                        cardsLoop(elemento)
                    ))}
                </ul>
            )}
        </>
    )
}

export default List;
