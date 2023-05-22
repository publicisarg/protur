import axios from "axios";
import { useEffect, useState } from "react";
import GridCard from '../../grid/GridCard';
import Template from "./template.json";

export const List = (props: any) => {

    const [contenido, setContenido] = useState(Template);
    const [contenidoFiltrado, setContenidoFiltrado] = useState([]);
    const [isFlex, setFlex] = useState(false);

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
            if (filteredByColor.length == 0) {
                setFlex(true);
            } else {
                setFlex(false);
            }
        } else {
            filteredByColor = elementosFiltrados;
            setFlex(false);
        }
        setContenidoFiltrado(filteredByColor);
    }, [contenido, props.categoriaSeleccionada, props.colorSeleccionado]);

    function cardsBuild(contenidoFiltrado: any) {
        var cards: any = [];
        if (contenidoFiltrado.length > 0) {
            contenidoFiltrado.forEach((element: {
                Display_url: string; Imagen: any; Image_small: any; Nombre_del_Lugar: any; url_destino: any; Display_name: any
            }, index: any) => {
                if (element.Nombre_del_Lugar != "NOT FOUND") {
                    cards.push(<GridCard img={element.Imagen} img_small={element.Image_small} alt={element.Display_name} imgname={element.Nombre_del_Lugar} linksrc={element.Display_url} delay={index / 10} key={index} />);
                }
            });
            return cards;
        } else {
            return (
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-3xl">
                        No wallpapers found :(
                    </h3>
                    <p className="text-xl mt-6">
                        Try to use different filters.
                    </p>
                </div>
            )
        }
    }

    return (
        <>
            {props.categoriaSeleccionada && (
                <ul
                    className={`${isFlex ? "flex justify-center items-center" : "grid"} p-5 md:p-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 elementos`}>
                    {
                        cardsBuild(contenidoFiltrado)
                    }
                </ul>
            )}
        </>
    )
}

export default List;
