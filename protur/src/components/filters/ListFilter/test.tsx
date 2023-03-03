import axios from "axios";
import { useEffect, useState } from "react";

export const ListFilterTEST = () => {

    const [lugares, setLugares] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
          setLugares(response.data);
        }
        fetchData();
    }, []);

    return (
        <>
            <p>{JSON.stringify(lugares)}</p>
        </>
    )
}

export default ListFilterTEST