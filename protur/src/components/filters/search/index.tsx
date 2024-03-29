import axios from 'axios';
import { useEffect, useState } from 'react'
import Template from "../ListFilter/template.json";

export const Search = (props: any) => {

  const [contenido, setContenido] = useState(Template);
  const [keywords, setKeywords] = useState<any>([]);

  function handleChange(event: any) {
    if (event.target.value != "" && event.target.value != undefined) {
      props.setKeyword(event.target.value);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://desarrollodesitios0.site/crude/json.php');
      setContenido(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (contenido.length > 0) {
      var auxKeywords: any = [];
      contenido.forEach(cat => {
        cat.elementos.forEach(element => {
          element.keywords.split(',').forEach((keyword: any) => {
            if (keyword != '' && keyword != undefined) {
              if(!auxKeywords.includes(keyword)) {
                auxKeywords.push(keyword);
              }
            }
          })
        });
      });
    }
    setKeywords(auxKeywords);
  }, [contenido]);

  return (
    <div className="grid grid-cols-1 gap-4 place-items-center mb-16">
      <div className="relative w-full p-5 md:p-0 md:max-w-3xl lg:w-1/3">
        <input onChange={(e) => { handleChange(e) }} className=" w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-white border-neutral-400 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 pr-5 pl-5 rounded p-2.5 text-sm" list="keywords" id="keywordslist" name="keywordslist" />
        <datalist id="keywords">
          {keywords.map((values:any, index:number) => {
            return (<option value={values} key={index} />)
          })}
        </datalist>
        <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pl-3">
          <svg className='w-6 text-white' xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 24 24"><path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M14.578 14.542a5.6 5.6 0 1 0-7.955-7.884 5.6 5.6 0 0 0 7.955 7.884Zm0 0L19 19" /></svg>
        </div>
      </div>
    </div>
  )
}
