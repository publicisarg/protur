import { useState } from "react";



function Buton(props) {

const [isActive, setActive] = useState(false);
const toggleClass = () => {
  setActive(!isActive);
};


    return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo': null}`} onClick={toggleClass} >{props.name}</button>;
  }
export default Buton;
