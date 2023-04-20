import axios from "axios";
import { useEffect, useState } from "react";
import GridCard from '../../grid/GridCard';
import Template  from "./template.json";

export const List = (props: any) => {

    const [contenido, setContenido] = useState(Template);
    const [contenidoFiltrado, setContenidoFiltrado] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
            setContenido(response.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const filtrado: any = contenido.filter((item: any) => item.categoria === props.categoriaSeleccionada);
        var filteredByColor;
        const elementosFiltrados = Object.values<any>(filtrado)[0].elementos;
        if (props.colorSeleccionado != null && props.colorSeleccionado != "null") {
            filteredByColor = elementosFiltrados.filter((filteredElement: any) => filteredElement.colores.indexOf(props.colorSeleccionado) > -1);
        } else {
            filteredByColor = elementosFiltrados;
        }
        setContenidoFiltrado(filteredByColor);
    }, [contenido, props.categoriaSeleccionada, props.colorSeleccionado]);

    function cardsLoop(datos: any) {
        let cardsJSX = [];
        for (var i = 0; i < datos.elementos.length; i++) {
            cardsJSX.push(cardsReturn(datos.elementos[i]));
        }
        return cardsJSX;
    }

    function cardsReturn(datos: any) {
        return (
            <li key={datos.id}>
                <GridCard img={datos.Imagen} img_small={datos.Image_small} alt={datos.Nombre_del_Lugar} link={datos.url_destino} />
            </li>
        )
    }

    function cardsBuild(contenidoFiltrado: any) {
        var cards: any = [];
        contenidoFiltrado.forEach((element: { Imagen: any; Image_small: any; Nombre_del_Lugar: any; url_destino: any; }) => {

            cards.push(<GridCard img={element.Imagen} img_small={element.Image_small} alt={element.Nombre_del_Lugar} link={element.url_destino} />);
        });
        return cards;
    }

    return (
        <>
            {props.categoriaSeleccionada && (
                <ul
                    className={`p-5 md:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 elementos`}>
                    {
                        cardsBuild(contenidoFiltrado)
                    }
                </ul>
            )}
        </>
    )
}

export default List;
