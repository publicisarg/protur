import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { GrBriefcase, GrLinkBottom, GrLinkPrevious } from "react-icons/gr";
// import { Briefcase, LinkBottom, LinkPrevious } from 'grommet-icons';


export const Standarbuttom = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return <button className={`rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent ${isActive ? 'activo' : null}`} onClick={toggleClass} >{props.name}</button>;
}

export const IconButtomLeft = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent font-quicksandlight font-bold`}>{props.name} <LinkBottom color="#999999" size="18px"/></button>;

  
}
export const IconButtomRight = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent font-quicksandlight font-bold`}><LinkPrevious color="#999999" size="18px"/> {props.name}</button>;
}
export const IconButtomRightDark = (props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
  return <button className={`flex gap-2 items-center rounded-3xl border-solid border-[#CCCCCC] text-[#999999] bg-transparent activo font-quicksandlight font-bold`}>{props.name} <Briefcase color="white" size="18px"/></button>;
}


