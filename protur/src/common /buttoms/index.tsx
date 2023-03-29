import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
//import { GrBriefcase, GrLinkBottom, GrLinkPrevious } from "react-icons/gr";
import { Briefcase, LinkBottom, LinkPrevious } from 'grommet-icons';


export const Standarbuttom = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return <button className={`rounded border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo' : null}`} onClick={toggleClass} >{props.name}</button>;
}

export const IconButtomLeft = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex justify-center w-full md:w-auto gap-2 items-center rounded border-2 border-[#2a2b71] text-[#2a2b71] bg-transparent font-quicksandlight font-bold`}><LinkBottom color="#333" size="18px"/>{props.name} </button>;

  
}
export const IconButtomRight = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex justify-center w-full md:w-auto gap-2 items-center rounded text-[#333] bg-[#f4f4f4] font-quicksandlight font-bold`}><LinkPrevious color="#333" size="18px"/>{props.name}</button>;
}
export const IconButtomRightDark = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex justify-center w-full h-full md:w-auto gap-2 items-center rounded text-[#fff] border-2 bg-[#2a2b71] font-quicksandlight font-bold`}><Briefcase color="#FFF" size="18px"/>{props.name}</button>;
}


